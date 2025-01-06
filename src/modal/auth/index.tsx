import ReactDOM from "react-dom";
import * as S from "./style";
import { ModalProps } from "@/type/modal/modal.type";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalContent>
    </S.ModalOverlay>,
    document.body
  );
};

export default Modal;
