/**
 * Check if a value is null or undefined.
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 */
export const isNil = (value: any) => value === undefined || value === null;

/**
 * Sort a list of items by their order property.
 * @param direction - The direction to sort the list.
 * @returns The sorted list.
 */
export const sortByOrderProp =
    (direction: "asc" | "desc") =>
    <T extends {data: {order: number}}>(list: T[]): T[] => {
        return list.sort((a, b) => (direction === "asc" ? a.data.order - b.data.order : b.data.order - a.data.order));
    };

/**
 * Convert a string with a unit to a number.
 * @param pxStr - The string to convert.
 * @returns The number.
 */
export const pxToNum = (pxStr?: string) => (pxStr ? parseInt(pxStr.replace("px", "")) : NaN);

/**
 * Convert a number to a string with a `px` unit.
 * @param value - The number to convert.
 * @returns The string.
 */
export const numToPx = (value: number) => `${value}px`;

/**
 * Strip a trailing slash from a string.
 * @param str - The string to strip.
 * @returns The string without a trailing slash.
 */
export const stripTrailingSlash = (str: string) => {
    return str.replace(/\/$/, "");
};

/**
 * Check if a value is a string.
 * @param strOrNot - The value to check.
 * @returns True if the value is a string, false otherwise.
 */
export const isString = (strOrNot: any) => typeof strOrNot === "string";

/**
 * Remove multiple spaces from a string.
 * @param str - The string to remove multiple spaces from.
 * @returns The string without multiple spaces.
 */
export const removeMultipleSpaces = (str: string) => {
    return str.replace(/ +/g, " ");
};

/**
 * Join a list of class names into a string.
 * @param classNames - The list of class names to join.
 * @returns The joined string.
 */
export const classList = (classNames: any[]) => {
    return removeMultipleSpaces(classNames.filter(isString).join(" "));
};

// TODO: read from Tailwind config
/**
 * Get the breakpoints from the Tailwind config.
 * @returns The breakpoints.
 */
export const getBreakpoints = (): Record<string, number> => ({
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "2xl": 1536,
});
