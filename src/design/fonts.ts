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
        font-family: "Pretendard-Thin";
        font-style: normal;
        src: local("Pretendard-Thin"), url(${PretendardThin}) format("opentype");
    }

    @font-face {
        font-family: "Pretendard-ExtraLight";
        font-style: normal;
        src: local("Pretendard-ExtraLight"), url(${PretendardExtraLight}) format("opentype");
    }

    @font-face {
        font-family: "Pretendard-Light";
        font-style: normal;
        src: local("Pretendard-Light"), url(${PretendardLight}) format("opentype");
    }

    @font-face {
        font-family: "Pretendard-Regular";
        font-style: normal;
        src: local("Pretendard-Regular"), url(${PretendardRegular}) format("opentype");
    }

    @font-face {
        font-family: "Pretendard-Medium";
        font-style: normal;
        src: local("Pretendard-Medium"), url(${PretendardMedium}) format("opentype");
    }

    @font-face {
        font-family: "Pretendard-SemiBold";
        font-style: normal;
        src: local("Pretendard-SemiBold"), url(${PretendardSemiBold}) format("opentype");
    }

    @font-face {
        font-family: "Pretendard-Bold";
        font-style: normal;
        src: local("Pretendard-Bold"), url(${PretendardBold}) format("opentype");
    }

    @font-face {
        font-family: "Pretendard-ExtraBold";
        font-style: normal;
        src: local("Pretendard-ExtraBold"), url(${PretendardExtraBold}) format("opentype");
    }

    @font-face {
        font-family: "Pretendard-Black";
        font-style: normal;
        src: local("Pretendard-Black"), url(${PretendardBlack}) format("opentype");
    }
`;
