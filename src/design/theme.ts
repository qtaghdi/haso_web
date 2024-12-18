import { Colors } from "@/design/color";
import { FontList } from "@/assets/font/fontList";
import { Shadow } from "@/design/shadow";

export const theme = {
  colors: {
    Primary: Colors.Primary,
    Secondary: Colors.Secondary,
    White: Colors.White,
    Text: Colors.Text,
    Gray: Colors.Gray,
    Black: Colors.Black,
    Error: Colors.Error,
  },
  fonts: FontList,
  typography: {
    fonts: FontList, // 폰트 리스트
    fontSizes: {
      Title: {
        1: "2.5rem",
        2: "1.875rem",
        3: "1.688rem",
      },
      Heading: {
        1: "1.5rem",
        2: "1.25rem",
        3: "1rem",
        4: "0.875rem",
      },
      Body: {
        1: "1rem",
        2: "0.875rem",
      },
      Caption: {
        1: "0.75rem",
      },
    },
    lineSpacing: {
      Title: "1.5",
      Heading: "1.3",
    },
  },
  Shadow: Shadow,
};