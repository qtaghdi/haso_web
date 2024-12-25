import 'styled-components'
import {theme} from "@/design/theme";

declare module 'styled-components' {
    export interface DefaultTheme extends theme {
    }
}