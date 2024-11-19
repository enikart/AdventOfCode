import {IEngine, INumber} from "../interfaces/engineStructureInterfaces";

export function parseEngine(input: string[]): IEngine {
    let engine: IEngine = {
        numbers: [],
        symbolsSorted: new Map<number, Map<number, boolean>>(),
        y_max: input.length,
        x_max: input[0].length
    };
    let y: number = 0;
    let newNumber: INumber | undefined = undefined;

    input.forEach(line => {
        let y_map = new Map<number, boolean>();

        //For each line we need to spot every symbol and every number, and get their coordinates
        for (let x = 0; x < line.length; x++) {
            y_map.set(x, false);
            // engine.symbolsSorted[y][x] = false;
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
                    engine.numbers.push(newNumber);
                    newNumber = undefined;
                }

                if (line[x] !== '.') {//IF this char is a symbol
                    y_map.set(x, true);
                }
            }
        }
        if (newNumber !== undefined) {// Reset the number
            engine.numbers.push(newNumber);
            newNumber = undefined;
        }

        engine.symbolsSorted.set(y, y_map);
        y++;
    });

    return engine;
}