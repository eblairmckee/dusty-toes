import { extendTheme } from 'native-base';
import { pink, purple, red, yellow, blue, orange } from './colors';

export const theme = extendTheme({
  colors: {
    primary: purple,
    secondary: pink,
    tertiary: blue,
    danger: orange,
    error: red,
    warning: yellow,
    info: blue,
    success: pink,
  },
});

type CustomThemeType = typeof theme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
