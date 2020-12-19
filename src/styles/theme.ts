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
  }
});
