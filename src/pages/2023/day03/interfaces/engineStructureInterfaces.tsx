
export interface ISymbol {
    char: string,
    y: number,
    x: number
}

export type ISymbols = Map<number, ISymbol[]>;
export type INumbers = Map<number, INumber[]>;
export interface IEngine {
    numbers: INumbers,
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
