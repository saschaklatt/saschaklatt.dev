export const stripTrailingSlash = (str: string) => {
    return str.replace(/\/$/, "");
};

export const isString = (strOrNot: any) => typeof strOrNot === "string";

export const removeMultipleSpaces = (str: string) => {
    return str.replace(/ +/g, " ");
};

export const classList = (classNames: any[]) => {
    return removeMultipleSpaces(classNames.filter(isString).join(" "));
};
