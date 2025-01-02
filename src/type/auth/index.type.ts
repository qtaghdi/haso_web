export interface SignUpProps {
    name: string;
    id: string;
    password: string;
    passwordConfirm: string; // 비밀번호 확인
    tel: string;
    telAccess: string; // 전화번호 인증 번호
    business_name: string; // 상호명
    store_no: string;
    fax_no: string;
}

export interface LoginProps {
    id: string;
    password: string;
}