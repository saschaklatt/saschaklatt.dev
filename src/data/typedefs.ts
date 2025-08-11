import type {IconId} from "../typedefs";

export interface Resource {
    title: string;
    description: string;
    link: {
        href: string;
        rel?: string;
        target?: "_blank" | "_self";
    };
    iconId: IconId;
}
