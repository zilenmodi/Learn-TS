type Point = { x: number; y: number };
type P = keyof Point;
type Q = "x" | "y" //P===Q

type Points = {
    x: number;
    y: number;
}

type ReadonlyPoints = {
    readonly [key in 'x' | 'y']: number;
}

type Readonly<T> = {
    readonly [key in keyof T]: T[key];
}

let p1: Readonly<Points> = {
    x: 0,
    y: 0
}

type size = "small" | "medium" | "large";
type color = "primary" | "secondary"

type styles = `${size}-${color}`

export { }