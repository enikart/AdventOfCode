import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";
import {parseEngine} from "./helpers/gameHelper";
import {IEngine, INumber, ISymbols, ISymbol} from "./interfaces/engineStructureInterfaces";


class Day0301 extends React.Component<any, any> {
    state: {
        answer: string
    }

    isPartNumber(number: INumber, symbols: ISymbols): boolean
    {
        for (let y = number.y - 1; y <= number.y + 1; y++) {
            let symbol_y_map: ISymbol | undefined = symbols.get(y);
            if (typeof symbol_y_map !== 'undefined') {
                for (let x = number.x_min; x <= number.x_max; x++) {
                    if (symbol_y_map.has(x) && symbol_y_map.get(x) === true) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    calculateSum(engine: IEngine): number
    {
        let sum: number = 0;

        engine.numbers.forEach(number => {
            if (this.isPartNumber(number, engine.symbolsSorted)) {
                sum += number.number;
            }
        });

        return sum;
    }

    execute() {
        // First, we need to split the input
        let inputParsed = input.split("\n");

        let engine: IEngine = parseEngine(inputParsed);

        // tadam
        this.setState({
            answer: this.calculateSum(engine).toString()
        });
    }

    constructor(props: null) {
        super(props);

        this.state = {
            answer: ""
        }

        this.execute = this.execute.bind(this);
    }

    render() {
        return (
            <div>
                <h2>Exercise 03 Part 1</h2>
                <ExerciseComponent yearNumber={2023} exerciseNumber={3} answer={this.state.answer} rightAnswer={"????"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0301;
