export const stroke = 'black';
export const background = 'white';


export const r = 560;
export const sw = r / 30; // stroke width

export const fr = r / 40; // finger radius
export const fw = fr / 2.5; // finger width
export const fp = fr * 2; // finger padding
export const ap = sw * 2; // arc padding
export const td = r / 10; // text distance

export const ar = fr + fp; // arc radius
export const d = r * 2;
export const D = d + sw;
export const R = D / 2;
export const ttd = td * 2;

export enum Orientation {
    CCW = 1,
    CW = -1,
}

export const CCW = Orientation.CCW;
export const CW = Orientation.CW;

export type Circle = {
    cx: number;
    cy: number;
    x: number;
    y: number;
};

export type Line = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};

export type Finger = Circle & {name: string};

export type Figure = {
    fingers: [Finger, Orientation][],
    crossings: [number, number][],
}