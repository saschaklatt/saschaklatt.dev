import type {MatomoTrackingEvent} from "@/services/matomo/typedefs";

export type IconId = "document" | "envelope" | "github" | "instagram" | "linkedin" | "nomadlist" | "stackoverflow" | "x" | "xing";

export enum IllustrationId {
    ApiCloudScreen = "api-cloud-screen",
    HeadlessCms = "headless-cms",
    Mongodb = "mongodb",
    RocketCloud = "rocket-cloud",
    UiComponentsPhone = "ui-components-phone",
}

export interface EditorTab {
    id: string;
    tab: string;
    lines: string[];
}

export interface CtaProps {
    trackingEvent: MatomoTrackingEvent;
    href: string;
    text: string;
    target?: string;
    rel?: string;
    class?: string;
}
