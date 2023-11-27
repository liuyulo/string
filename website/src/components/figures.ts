import { CCW, CW, r, type Figure } from "./consts";
import { L1, R2, L5, R1, R5 } from "./fingers";

export const star: Figure = {
    fingers: [
        [L1, CCW],
        [R2, CCW],
        [L5, CCW],
        [R1, CCW],
        [R5, CCW],
    ],
    crossings: [
        [r * 1.01, r * 1.027],
        [r * 1.267, r * 0.77],
        [r * 1.65, r * 0.92],
        [r * 1.65, r * 1.12],
        [r * 1.26, r * 1.28],
    ],
}

export const open: Figure = {
    crossings: [],
    fingers: [
        [L1, CW],
        [L5, CW],
        [R2, CW],
    ],
}

/// pick below
export const below: Figure = {
    fingers: [
        [R2, CCW],
        [L5, CCW],
        [R5, CW],
        [L1, CCW],
    ],
    crossings: [
        [r * 0.67, r * 0.33],
        [r * 1.36, r * 0.61],
    ],
}

/// pick above
export const above: Figure = {
    fingers: [
        [R2, CCW],
        [L5, CCW],
        [R5, CCW],
        [L1, CCW],
    ],
    crossings: [
        [r * 0.75, r * 0.35],
        [r * 1.25, r * 0.56],
        [r * 1.45, r * 0.35],
    ],
}

export const o1: Figure = {
    fingers: [
        [L5, CW],
        [R5, CW],
        [R1, CW],
        [L1, CW],
    ],
    crossings: []
}