import axios, {AxiosInstance} from "axios";
import Cookies from "js-cookie";
import CONFIG from "@/config/config.json";
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REQUEST_TOKEN_KEY} from "@/constants/token/token.constants";

// axios 인스턴스 생성
export const MigbakCustomAxios: AxiosInstance = axios.create({
    baseURL: `${CONFIG.serverUrl}`,
});

// 리프레시 토큰 갱신 상태 저장
let refreshTokenPromise: Promise<string> | null = null;

// 요청 인터셉터 설정
MigbakCustomAxios.interceptors.request.use(
    (config) => {
        const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
        if (accessToken) {
            config.headers[REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// 리프레시 토큰 함수
async function refreshAccessToken() {
    if (!refreshTokenPromise) {
        const refreshToken = Cookies.get(REFRESH_TOKEN_KEY);
        if (refreshToken) {
            refreshTokenPromise = MigbakCustomAxios.post('/refresh-token', {refreshToken})
                .then((response) => {
                    const newAccessToken = response.data.accessToken;
                    Cookies.set(ACCESS_TOKEN_KEY, newAccessToken);
                    return newAccessToken;
                })
                .catch((error) => {
                    console.error('Token refresh error:', error);
                    return Promise.reject(error);
                })
                .finally(() => {
                    refreshTokenPromise = null;
                });
        } else {
            return Promise.reject(new Error('Refresh token 없음'));
        }
    }
    return refreshTokenPromise;
}

// 응답 인터셉터 설정
MigbakCustomAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response) {
            console.error('Response error:', error.response.data);
            console.error('Status:', error.response.status);

            if (error.response.status === 401) {
                console.warn('승인되지 않은 토큰입니다, 토큰을 재생성합니다.');

                try {
                    const newAccessToken = await refreshAccessToken();
                    error.config.headers[REQUEST_TOKEN_KEY] = `Bearer ${newAccessToken}`;
                    return MigbakCustomAxios.request(error.config);
                } catch (refreshError) {
                    console.error('Failed to refresh token:', refreshError);
                    return Promise.reject(refreshError);
                }
            }
        } else {
            console.error('Network error or request timeout:', error);
        }
        return Promise.reject(error);
    }
);
