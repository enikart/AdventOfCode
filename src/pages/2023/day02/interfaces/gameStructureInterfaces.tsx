export enum Cubes {
    Red,
    Blue,
    Green
}
export interface IGame {
    id: number,
    sets: ISets[]
}

export interface ISetCubes {
    cube: Cubes,
    number: number
}

export interface ISets {
    setOfCubes: ISetCubes[],
}
