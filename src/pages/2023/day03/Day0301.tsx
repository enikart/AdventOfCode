import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";
import {parseEngine, isPartNumber} from "./helpers/gameHelper";
import {IEngine} from "./interfaces/engineStructureInterfaces";


class Day0301 extends React.Component<any, any> {
    state: {
        answer: string
    }

    calculateSum(engine: IEngine): number
    {
        let sum: number = 0;

        engine.numbers.forEach(yNumbers => {
            yNumbers.forEach(number => {
                if (isPartNumber(number, engine.symbolsSorted)) {
                    sum += number.number;
                }
            });
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
                <ExerciseComponent yearNumber={2023} exerciseNumber={3} answer={this.state.answer} rightAnswer={"533775"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0301;
