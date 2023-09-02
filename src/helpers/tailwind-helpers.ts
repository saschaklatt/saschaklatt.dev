import resolveConfig from "tailwindcss/resolveConfig";
import customConfig from "../../tailwind.config";
import {pxToNum} from "./converter-helpers";

const fullConfig = resolveConfig(customConfig);

export const getBreakpoints = (): Record<string, number> => {
    const screens = (fullConfig.theme as any).screens as Record<string, string>;
    return Object.entries(screens).reduce((acc, [key, val]) => ({...acc, [key]: pxToNum(val)}), {});
};
