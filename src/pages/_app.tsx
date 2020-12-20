import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import Navbar from '@/components/navbar';
import { ProvideAuth } from '@/lib/auth';
import theme from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProvideAuth>
        <ChakraProvider theme={theme} resetCSS>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </ProvideAuth>
    </>
  );
}

export default MyApp;
