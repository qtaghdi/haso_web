import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;

    @media (max-width: 768px) {
        gap: 12px;
    }

    @media (max-width: 480px) {
        gap: 10px;
    }
`;

export const Label = styled.label`
    font-size: ${({ theme }) => theme.typography.fontSizes.heading[3]};
    font-family: "Pretendard-Semibold";
    color: ${({ theme }) => theme.colors.text.Dark};
    text-align: left;

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.typography.fontSizes.heading[4]};
    }

    @media (max-width: 480px) {
        font-size: ${({ theme }) => theme.typography.fontSizes.body[2]};
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    padding-right: 40px;
    font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: 5px;
    outline: none;
    color: ${({ theme }) => theme.colors.text.Dark};

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary[400]};
    }

    &::placeholder {
        font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
        color: ${({ theme }) => theme.colors.gray[400]};
        font-family: "Pretendard-Medium";
    }

    @media (max-width: 768px) {
        padding: 8px 12px;
        font-size: ${({ theme }) => theme.typography.fontSizes.body[2]};
    }

    @media (max-width: 480px) {
        padding: 6px 10px;
        font-size: ${({ theme }) => theme.typography.fontSizes.caption[1]};
    }
`;

export const EyeIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.gray[400]};

    &:hover {
        color: ${({ theme }) => theme.colors.gray[600]};
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;

export const Error = styled.span`
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.typography.fontSizes.caption[1]};
    margin-top: 5px;

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.typography.fontSizes.caption[1]};
    }

    @media (max-width: 480px) {
        font-size: 0.65rem;
    }
`;

