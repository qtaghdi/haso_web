import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    box-shadow: ${({ theme }) => theme.shadow.v2};
    background-color: #fff;
`;

export const Container = styled.div`
    display: flex;
    padding: 15px 40px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const SearchBar = styled.input`
    flex-grow: 1;
    max-width: 500px;
    padding: 12px 20px;
    border: 1px solid #ddd;
    border-radius: 25px;
    font-size: 16px;
    margin: 0 30px;

    &::placeholder {
        color: #999;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    gap: 30px;
    font-size: 16px;
    font-weight: bold;

    span {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.Text.Dark};
        &:hover {
            color: #4f86f7;
        }
    }
`;
