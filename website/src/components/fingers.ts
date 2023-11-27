import { R, fp, fr, r, td } from './consts';
import type { Finger } from './consts';

function finger(name:string, deg: number): Finger {
    const rad = (deg * Math.PI) / 180;
    const r1 = r - fp - fr;
    const r2 = r + td;
    return {
        name,
        cx: r1 * Math.cos(rad) + R,
        cy: r1 * Math.sin(rad) + R,
        x: r2 * Math.cos(rad) + R, // text x
        y: r2 * Math.sin(rad) + R, // text y
    }
}


// function rotate(deg: number) {
//     return `transform: rotate(${deg}deg); transform-origin: center`;
// }

export const R1: Finger = finger('R1', 45);
export const R2: Finger = finger('R2', 0);
export const R3: Finger = finger('R3', -45 / 3);
export const R4: Finger = finger('R4', (-2 * 45) / 3);
export const R5: Finger = finger('R5', -45);
export const L1: Finger = finger('L1', 180 - 45);
export const L2: Finger = finger('L2', 180);
export const L3: Finger = finger('L3', 180 + 45 / 3);
export const L4: Finger = finger('L4', 180 + (2 * 45) / 3);
export const L5: Finger = finger('L5', 180 + 45);

export const fingers: Map<Finger, string> = new Map([
    [R1, 'R1'],
    [R2, 'R2'],
    [R3, 'R3'],
    [R4, 'R4'],
    [R5, 'R5'],
    [L1, 'L1'],
    [L2, 'L2'],
    [L3, 'L3'],
    [L4, 'L4'],
    [L5, 'L5'],
]);

