import React, { createContext, useContext, useEffect, useState } from 'react';

import firebase from '@/lib/firebase';

import { createUser } from './db';

const authContext = createContext(null);

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = async (rawUser: boolean | firebase.User) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      await createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signinWithGithub = async (): Promise<void> => {
    return await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);
      });
  };

  const signout = async (): Promise<void> => {
    return await firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false);
      });
  };

  useEffect(() => {
    const unscribe = firebase.auth().onIdTokenChanged(handleUser);

    return () => unscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout
  };
}

// const getStripRole = async () => {
//   await firebase.auth().currentUser.getIdToken(true);
//   const decodedToken = await firebase.auth().currentUser.getIdTokenResult();

//   return decodedToken.claims.stripeRole || 'free';
// };

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.xa,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoURL
  // stripeRole: await getStripRole()
});
