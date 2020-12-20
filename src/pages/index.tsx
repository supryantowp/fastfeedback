import { Button, Flex, Image } from '@chakra-ui/react';
import Head from 'next/head';

import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  console.log({ user: auth.user });

  return (
    <>
      <Head>
        <title>Fastfeedback</title>
      </Head>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="80vh"
      >
        <Image src="/logo.svg" boxSize="64px" />
        <Button onClick={() => auth.signinWithGithub()}>Login</Button>
        <div>{auth?.user?.email}</div>

        {auth.user && <button onClick={() => auth.signout()}>sign out</button>}
      </Flex>
    </>
  );
}
