import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const Label = styled.label`
    font-size: ${({ theme }) => theme.typography.fontSizes.body[2]};
    color: ${({ theme }) => theme.colors.text.Dark};
    text-align: left;
`

export const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: 5px;
    outline: none;
    &:focus {
        border-color: ${({ theme }) => theme.colors.primary[400]};
    }
`;

export const EyeIcon = styled.div`
    position: absolute;
    right: 8px;
    cursor: pointer;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.gray[400]};)}
    &:hover {
        color: #555;
    }
`;

export const Error = styled.span`
    color: ${({ theme }) => theme.colors.error};
`