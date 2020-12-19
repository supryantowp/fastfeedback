import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from '@/lib/firebase';

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

  const signinWithGithub = async (): Promise<firebase.User> => {
    return await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signout = async (): Promise<void> => {
    return await firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  useEffect(() => {
    const unsubcribe: firebase.Unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(false);
        }
      });

    return () => unsubcribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout
  };
}
