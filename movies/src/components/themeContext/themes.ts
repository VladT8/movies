enum Colors {
  TEXT_LIGHT = "#00141e",
  TEXT_DARK = "#c8cdcd",
  BACKGROUND_LIGHT = "#eee",
  BACKGROUND_DARK = "#0f2d37",
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
