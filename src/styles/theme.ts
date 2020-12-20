import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  ...theme,
  fonts: {
    ...theme.fonts,
    body: `Inter`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  colors: {
    cyan: {
      50: '#d9ffff',
      100: '#acfdfe',
      200: '#7efbfb',
      300: '#4ef8f7',
      400: '#23f6f5',
      500: '#09dddc',
      600: '#00acab',
      700: '#007c7b',
      800: '#004b4a',
      900: '#001b1a'
    }
  }
});
