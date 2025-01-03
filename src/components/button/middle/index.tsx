import * as S from './style';
import { ButtonProps } from "@/type/button/button.type";
import { PropsWithChildren } from 'react';

interface MiddleButtonProps extends ButtonProps {
  variant: 'primary' | 'secondary';
}

const MiddleButton = ({ children, onClick, disabled, variant }: PropsWithChildren<MiddleButtonProps>) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} variant={variant}>
      {children}
    </S.Button>
  )
}

export default MiddleButton;
