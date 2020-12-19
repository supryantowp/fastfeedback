import { Button } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Button onClick={() => auth.signinWithGithub()}>Login</Button>
      <div>{auth?.user?.email}</div>

      {auth.user && <button onClick={() => auth.signout()}>sign out</button>}
    </div>
  );
}
