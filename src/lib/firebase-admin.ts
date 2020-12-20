import 'firebase/auth';

import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    }),
    databaseURL: 'https://fast-feedback-a41d5-default-rtdb.firebaseio.com/'
  });
}

export default admin.firestore();
