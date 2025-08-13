import resolveConfig from "tailwindcss/resolveConfig";
import customConfig from "../../tailwind.config";
import {pxToNum} from "./common";

const fullConfig = resolveConfig(customConfig);

/**
 * Get the breakpoints from the Tailwind config.
 * @returns The breakpoints.
 */
export const getBreakpoints = (): Record<string, number> => {
    const screens = (fullConfig.theme as any).screens as Record<string, string>;
    return Object.entries(screens).reduce((acc, [key, val]) => ({...acc, [key]: pxToNum(val)}), {});
};
