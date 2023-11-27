import { fr, fp, Orientation, ar, R } from "./consts";
import type { Circle, Finger, Line, } from './consts'

function intersect([a, b, c, x0, y0, r]: number[]): [number, number] {
    // ax + by + c = 0
    // (x - x0)^2 + (y - y0)^2 = r^2
    if (b == 0) return [x0 - r * Math.sign(a), y0];

    const m = -a / b;
    const A = m * m + 1;
    const B = 2 * (m * c - m * y0 - x0);
    const C = c * c - 2 * c * y0 + y0 * y0 + x0 * x0 - r * r;
    const D = Math.max(B * B - 4 * A * C, 0);
    const x = (-B + Math.sqrt(D)) / (2 * A);
    return [x, m * x + c];
}
/// find common tangle of c1 and c2
/// p1, p2 are 1 or -1
export function tangent(c1: Circle, p1: number, c2: Circle, p2: number): Line {
    const [r1, r2] = [(fr + fp) * p1, (fr + fp) * p2];
    const cc = { x: c2.cx - c1.cx, y: c2.cy - c1.cy };
    const dd = r2 - r1;
    const denom = cc.x * cc.x + cc.y * cc.y;
    const sq = Math.sqrt(Math.abs(denom - dd * dd));
    // ax + by + c = 0
    const a = (cc.x * dd + cc.y * sq) / denom;
    const b = (cc.y * dd - cc.x * sq) / denom;
    const c = -r1 / b;
    const [x2, y2] = intersect([a, b, c, cc.x, cc.y, r2]);
    const [x1, y1] = intersect([a, b, c, 0, 0, r1]);
    return {
        x1: x1 + c1.cx,
        y1: y1 + c1.cy,
        x2: x2 + c1.cx,
        y2: y2 + c1.cy,
    };
}

export function fingers2arcs(fingers: [Finger, Orientation][]): Line[] {
    return fingers.map((f, i, arr) =>
        tangent(...f, ...arr[(i + 1) % arr.length])
    )
}

export function arcs2paths(fingers: [Finger, Orientation][], arcs: Line[], larges: boolean[] = []): string[] {
    return arcs.map(({ x1, y1, x2, y2 }, i) => {
        const j = (i + 1) % arcs.length;
        const [{ cx }, n] = fingers[j];
        const { x1: x, y1: y } = arcs[j];
        const [xx2, xx3, ccx] = [x2, x, cx].map((r) => Math.abs(r - R));
        const large = xx2 <= ccx && xx3 <= ccx;
        const l = larges[i] ? !large : large;
        const sweep = +(n == -1);
        return `M${x1} ${y1} L${x2} ${y2} A${ar} ${ar} 0 ${+l} ${sweep} ${x} ${y}`;
    })
}