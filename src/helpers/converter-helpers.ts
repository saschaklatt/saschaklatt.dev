export const pxToNum = (pxStr?: string) => (pxStr ? parseInt(pxStr.replace("px", "")) : NaN);

export const numToPx = (value: number) => `${value}px`;
