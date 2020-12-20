import firebase from '@/lib/firebase';

import { Site } from '../utils/types';

export const createUser = (
  uid: string,
  data: Partial<firebase.firestore.DocumentData>
) => {
  return firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .set(
      {
        uid,
        ...data
      },
      { merge: true }
    );
};

export const createSite = (data: Site) => {
  return firebase.firestore().collection('sites').doc().set(data);
};
