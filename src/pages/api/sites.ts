import { NextApiRequest, NextApiResponse } from 'next';

import db from '@/lib/firebase-admin';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const snapshot = await db.collection('sites').get();
  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json({ sites });
};
