
export type ISymbol = Map<number, boolean>;
export type ISymbols = Map<number, ISymbol>;
export interface IEngine {
    numbers: INumber[],
    symbolsSorted: ISymbols,
    y_max: number,
    x_max: number
}

export interface INumber {
    number: number,
    numberString: string,
    y: number,
    x_min: number,
    x_max: number
}
