export interface SetCookieOptions {
    domain?: string;
    msToExpire?: number;
    path?: string;
    sameSite: string;
    secure?: boolean;
}
