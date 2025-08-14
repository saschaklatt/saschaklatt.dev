/**
 * Get the breakpoints from the Tailwind config.
 * @returns The breakpoints.
 */
export const getBreakpoints = (): Record<string, number> => {
    return {
        "sm": 640,
        "md": 768,
        "lg": 1024,
        "xl": 1280,
        "2xl": 1536,
    };
};
