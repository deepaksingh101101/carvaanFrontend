import { themes } from './styles';

export const defaultTheme = {
  colorScheme: 'light',
  palette: {
    default: {
      background: themes.light.white,
      text: themes.light.black,
      textLight: themes.light.white,
    },
  },
};

export const darkTheme = {
  colorScheme: 'dark',
  palette: {
    default: {
      background: themes.dark.white,
      text: themes.dark.black,
      textLight: themes.dark.white,
    },
  },
};