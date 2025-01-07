import { createTheming } from '@callstack/react-theme-provider';

// export type Theme = {
//   primaryColor: string,
//   accentColor: string,
//   backgroundColor: string,
//   textColor: string,
//   secondaryColor: string,
// };

export const themes = {
  default: {
    primaryColor: '#FFA72A',
    accentColor: '#458622',
    backgroundColor: '#FFC777',
    textColor: '#504f4d',
    secondaryColor: '#7F5315',
  },
  dark: {
    primaryColor: '#FFA72A',
    accentColor: '#458622',
    backgroundColor: '#504f4d',
    textColor: '#FFC777',
    secondaryColor: '#252525',
},
};

const { ThemeProvider, withTheme }= createTheming(
  themes.default
);

export default { ThemeProvider, withTheme };