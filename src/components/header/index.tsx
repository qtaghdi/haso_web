import React from "react";
import * as S from "./style";
import Logo from "@/components/logo/Logo.svg";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Logo />
        <S.SearchBar placeholder="찾으시는게 있으신가요?" />
        <S.NavBar>
          <span>상품 등록</span>
          <span>채팅</span>
          <span>거래처 관리</span>
        </S.NavBar>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;