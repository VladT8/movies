enum Colors {
  TEXT_LIGHT = "#000000",
  TEXT_DARK = "#FFFFFF",
  BACKGROUND_LIGHT = "#BA7978",
  BACKGROUND_DARK = "#592d2d",
}

export type ThemeType = "light" | "dark";

export interface Theme {
  text: Colors;
  background: Colors;
}

type ThemesType = Record<ThemeType, Theme>;

export const Themes: ThemesType = {
  light: {
    text: Colors.TEXT_LIGHT,
    background: Colors.BACKGROUND_LIGHT,
  },
  dark: {
    text: Colors.TEXT_DARK,
    background: Colors.BACKGROUND_DARK,
  },
};
