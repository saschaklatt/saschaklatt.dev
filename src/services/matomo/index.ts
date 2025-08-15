import type {MatomoTrackingEvent} from "./typedefs";
import {getCookie} from "../cookies";
import {isNil} from "../../utils";

export const COOKIE_NAME_CONSENT_REMOVED = "mtm_consent_removed";

export const matomoPush = (data: any[]) => {
    const _paq = ((window as any)._paq = (window as any)._paq || []);
    return _paq.push(data);
};

const toTrackingArray = (event: MatomoTrackingEvent) => {
    const result = ["trackEvent", event.category, event.action];
    if (event.name && isNil(event.value)) {
        return [...result, event.name];
    }
    if (event.name && !isNil(event.value)) {
        return [...result, event.name, event.value];
    }
    if (!event.name && !isNil(event.value)) {
        return [...result, undefined, event.value];
    }
    return result;
};

export const matomoTrackEvent = (event: MatomoTrackingEvent) => {
    matomoPush(toTrackingArray(event));
};

export function hasOptOutCookie() {
    return getCookie(COOKIE_NAME_CONSENT_REMOVED) !== undefined;
}

export function giveConsent() {
    matomoPush(["forgetUserOptOut"]);
}

export function revokeConsent() {
    matomoPush(["optUserOut"]); // automatically sets the cookie "mtm_consent_removed"
}
