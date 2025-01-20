import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const More = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DescriptionText = styled.div`
    font-family: "Pretendard-Bold";
    font-size: ${({theme}) => theme.typography.fontSizes.heading[1]};
`

export const MoreText = styled.h4`
    font-family: "Pretendard-Bold";
    font-size: ${({theme}) => theme.typography.fontSizes.heading[2]};

`