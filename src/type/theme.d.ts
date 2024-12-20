import "styled-components";
import { theme } from "@/design/theme";

type ThemeType = typeof theme;

declare module "styled-components" {
    type DefaultTheme = ThemeType;
}