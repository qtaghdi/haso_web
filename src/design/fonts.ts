import { css } from "styled-components";

import PretendardThin from "@/assets/font/Pretendard-Thin.otf";
import PretendardExtraLight from "@/assets/font/Pretendard-ExtraLight.otf";
import PretendardLight from "@/assets/font/Pretendard-Light.otf";
import PretendardRegular from "@/assets/font/Pretendard-Regular.otf";
import PretendardMedium from "@/assets/font/Pretendard-Medium.otf";
import PretendardSemiBold from "@/assets/font/Pretendard-SemiBold.otf";
import PretendardBold from "@/assets/font/Pretendard-Bold.otf";
import PretendardExtraBold from "@/assets/font/Pretendard-ExtraBold.otf";
import PretendardBlack from "@/assets/font/Pretendard-Black.otf";

export const fonts = css`
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 100;
    src: local("Pretendard Thin"), url(${PretendardThin}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 200;
    src: local("Pretendard ExtraLight"), url(${PretendardExtraLight}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 300;
    src: local("Pretendard Light"), url(${PretendardLight}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    src: local("Pretendard Regular"), url(${PretendardRegular}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    src: local("Pretendard Medium"), url(${PretendardMedium}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    src: local("Pretendard SemiBold"), url(${PretendardSemiBold}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    src: local("Pretendard Bold"), url(${PretendardBold}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 800;
    src: local("Pretendard ExtraBold"), url(${PretendardExtraBold}) format("opentype");
  }

  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 900;
    src: local("Pretendard Black"), url(${PretendardBlack}) format("opentype");
  }
`;
