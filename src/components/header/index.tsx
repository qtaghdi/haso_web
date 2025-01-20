import * as S from "./style";
import LogoIcons from "@/components/icons/logo";
import { Search, ChevronDown } from 'lucide-react';
import ProfileIcon from "@/components/icons/profile";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.LogoSection>
          <LogoIcons width={80} height={50} />
        </S.LogoSection>

        <S.SearchSection>
          <S.SearchContainer>
            <S.SearchInput placeholder="검색어를 입력해주세요" />
            <S.ButtonGroup>
              <S.DropdownButton>
                지역
                <ChevronDown size={16} style={{ marginLeft: '4px' }} />
              </S.DropdownButton>
              <S.DropdownButton>
                품종
                <ChevronDown size={16} style={{ marginLeft: '4px' }} />
              </S.DropdownButton>
            </S.ButtonGroup>
          </S.SearchContainer>
        </S.SearchSection>

        <S.Navigation>
          <S.NavLink /* href="#" */>상품 등록</S.NavLink>
          <S.NavLink /* href="#" */>채팅</S.NavLink>
          <S.NavLink /* href="#" */>거래처 관리</S.NavLink>
          <ProfileIcon size="small" />
        </S.Navigation>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;