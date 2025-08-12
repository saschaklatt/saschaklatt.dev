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