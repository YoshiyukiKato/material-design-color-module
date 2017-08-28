export interface DullColor {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
}
export interface Color extends DullColor {
    "a100": string;
    "a200": string;
    "a400": string;
    "a700": string;
}
export interface TextColor {
    "primary": string;
    "secondary": string;
    "disabled": string;
    "dividers": string;
}
export interface IconColor {
    "active": string;
    "inactive": string;
}
export declare const red: Color;
export declare const pink: Color;
export declare const purple: Color;
export declare const deepPurple: Color;
export declare const indigo: Color;
export declare const blue: Color;
export declare const lightBlue: Color;
export declare const cyan: Color;
export declare const teal: Color;
export declare const green: Color;
export declare const lightGreen: Color;
export declare const lime: Color;
export declare const yellow: Color;
export declare const amber: Color;
export declare const orange: Color;
export declare const deepOrange: Color;
export declare const brown: DullColor;
export declare const grey: DullColor;
export declare const blueGrey: DullColor;
export declare const darkText: TextColor;
export declare const lightText: TextColor;
export declare const darkIcons: IconColor;
export declare const lightIcons: IconColor;
export declare const white: string;
export declare const black: string;
declare const _default: {
    red: Color;
    pink: Color;
    purple: Color;
    deepPurple: Color;
    indigo: Color;
    blue: Color;
    lightBlue: Color;
    cyan: Color;
    teal: Color;
    green: Color;
    lightGreen: Color;
    lime: Color;
    yellow: Color;
    amber: Color;
    orange: Color;
    deepOrange: Color;
    brown: DullColor;
    grey: DullColor;
    blueGrey: DullColor;
    darkText: TextColor;
    lightText: TextColor;
    darkIcons: IconColor;
    lightIcons: IconColor;
    white: string;
    black: string;
};
export default _default;
