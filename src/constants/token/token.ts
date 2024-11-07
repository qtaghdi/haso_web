import * as Cookies from 'js-cookie'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './token.constants';

class Token {
    public getToken(key: string): string | undefined {
        return Cookies.get(key);
    }

    public setToken(key: string, token: string, expires: number = 7): void {
        Cookies.set(key, token, { expires : 2 }); // 토큰 만료일 수정
    }

    public clearToken() {
        Cookies.remove(ACCESS_TOKEN_KEY);
        Cookies.remove(REFRESH_TOKEN_KEY);
    }
}

export default new Token();
