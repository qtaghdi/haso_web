declare module 'js-cookie' {
    interface CookieAttributes {
        path?: string;
        expires?: number | Date;
        maxAge?: number;
        domain?: string;
        secure?: boolean;
        sameSite?: 'strict' | 'lax' | 'none';
    }

    export function get(name: string): string | undefined;
    export function getJSON(name: string): any;
    export function set(name: string, value: any, options?: CookieAttributes): void;
    export function remove(name: string, options?: CookieAttributes): void;

    export default {
        get,
        getJSON,
        set,
        remove,
    };
}
