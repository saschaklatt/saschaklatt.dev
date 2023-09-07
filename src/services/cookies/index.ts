import type {SetCookieOptions} from "./typedefs";

export function getCookie(cookieName: string): string | undefined {
    const cookiePattern = new RegExp(`(^|;)[ ]*${cookieName}=([^;]*)`);
    const cookieMatch = cookiePattern.exec(document.cookie);
    return cookieMatch ? decodeURIComponent(cookieMatch[2]) : undefined;
}

export function setCookie(cookieName: string, value: string, options?: SetCookieOptions) {
    const parts = [];

    parts.push(`${cookieName}=${encodeURIComponent(value)}`);

    if (options?.msToExpire) {
        const expiryDate = new Date();
        expiryDate.setTime(new Date().getTime() + options?.msToExpire);
        parts.push(`expires=${expiryDate.toUTCString()}`);
    }

    parts.push(`path=${options?.path || "/"}`);

    if (options?.domain) {
        parts.push(`domain=${options?.domain}`);
    }
    if (options?.secure) {
        parts.push("secure");
    }
    if (options?.sameSite) {
        parts.push(`SameSite=${options.sameSite}`);
    }

    document.cookie = parts.join(";");

    if ((!options?.msToExpire || options?.msToExpire >= 0) && getCookie(cookieName) !== String(value)) {
        console.warn(`There was an error setting cookie "${cookieName}". Please check domain and path.`);
    }
}

export function removeCookie(cookieName: string) {
    setCookie(cookieName, "", {sameSite: "Lax", msToExpire: -1});
}
