import firebase from '@/lib/firebase';

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
