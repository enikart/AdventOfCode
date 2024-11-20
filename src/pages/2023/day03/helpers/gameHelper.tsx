import {IEngine, INumber, INumbers, ISymbol, ISymbols} from "../interfaces/engineStructureInterfaces";

export function parseEngine(input: string[]): IEngine {
    let engine: IEngine = {
        numbers: new Map<number, INumber[]>(),
        symbolsSorted: new Map<number, ISymbol[]>(),
        y_max: input.length,
        x_max: input[0].length
    };
    let y: number = 0;
    let newNumber: INumber | undefined = undefined;
    let yNumbers: INumber[] = [];
    let ySymbols: ISymbol[] = [];

    input.forEach(line => {
        yNumbers = [];
        ySymbols = [];
        let y_map = new Map<number, boolean>();

        //For each line we need to spot every symbol and every number, and get their coordinates
        for (let x = 0; x < line.length; x++) {
            y_map.set(x, false);
            if (!isNaN(Number(line[x]))) {//IF this char is a number
                if (newNumber === undefined) {// No number is in check right now
                    newNumber = {
                        number: Number(line[x]),
                        numberString: line[x],
                        x_min: x === 0 ? x : x - 1,
                        y: y,
                        x_max: x === line.length - 1 ? x : x + 1
                    };
                } else {
                    newNumber.x_max = x === line.length - 1 ? x : x + 1;
                    newNumber.numberString += line[x];
                    newNumber.number = newNumber.number * 10 + Number(line[x]);
                }
            } else {
                if (newNumber !== undefined) {// Reset the number
                    yNumbers.push(newNumber);
                    newNumber = undefined;
                }

                if (line[x] !== '.') {//IF this char is a symbol
                    y_map.set(x, true);
                    ySymbols.push({
                        x: x,
                        y: y,
                        char: line[x]
                    });
                }
            }
        }
        if (newNumber !== undefined) {// Reset the number
            yNumbers.push(newNumber);
            newNumber = undefined;
        }

        engine.numbers.set(y, yNumbers);
        engine.symbolsSorted.set(y, ySymbols);

        y++;
    });

    return engine;
}

export function isPartNumber(number: INumber, symbols: ISymbols): boolean
{
    let isPartNumber: boolean = false;
    for (let y = number.y - 1; y <= number.y + 1; y++) {
        let ySymbolMap: ISymbol[] | undefined = symbols.get(y);
        if (typeof ySymbolMap !== 'undefined') {
            ySymbolMap.forEach(ySymbol => {
                 if (number.x_min <= ySymbol.x && ySymbol.x <= number.x_max) {
                     isPartNumber = true;
                 }
            });
        }
    }

    return isPartNumber;
}

export function gearRatio(symbol: ISymbol, numbers: INumbers): number
{
    let ratio: number = 0;

    if (symbol.char !== '*') {
        return ratio;
    }

    let numbersAround: INumber[] = [];

    for (let y = symbol.y - 1; y <= symbol.y + 1; y++) {
        let yNumberMap: INumber[] | undefined = numbers.get(y);

        if (typeof yNumberMap !== 'undefined') {
            yNumberMap.forEach(number => {
                if (number.x_min <= symbol.x && symbol.x <= number.x_max) {
                    numbersAround.push(number);
                }
            });
        }
    }

    if (numbersAround.length === 2) {
        ratio = numbersAround[0].number * numbersAround[1].number;
    }

    return ratio;
}