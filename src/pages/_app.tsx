import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { ProvideAuth } from '@/lib/auth';
import theme from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ProvideAuth>
        <Component {...pageProps} />
      </ProvideAuth>
    </ChakraProvider>
  );
}

export default MyApp;
