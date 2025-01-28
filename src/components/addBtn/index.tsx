import * as S from "./style";
import plusImg from "@/assets/image/plus.svg";
import { ButtonProps } from "@/type/button/button.type";

interface AddBtnProps extends ButtonProps {
}

const AddBtn = ({ onClick }: AddBtnProps) => {
  return (
    <S.AddBtnBack onClick={onClick}>
      <S.AddBtnImg src={plusImg} />
    </S.AddBtnBack>
  );
};

export default AddBtn;
