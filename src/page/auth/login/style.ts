import styled from "styled-components";
import {theme} from "@/design/theme";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.Gray[200]};
`