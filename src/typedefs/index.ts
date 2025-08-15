import type {MatomoTrackingEvent} from "@/services/matomo/typedefs";

export type IconId = "document" | "envelope" | "github" | "instagram" | "linkedin" | "nomadlist" | "stackoverflow" | "x" | "xing";

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
