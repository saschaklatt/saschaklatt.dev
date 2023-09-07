export interface MatomoApi {
    push: (_arr: (string | number | undefined)[]) => void;
}

export interface MatomoTrackingEvent {
    category: string;
    action: string;
    name: string;
    value?: number;
}
