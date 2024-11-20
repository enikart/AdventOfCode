import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";
import {parseEngine, gearRatio} from "./helpers/gameHelper";
import {IEngine} from "./interfaces/engineStructureInterfaces";

class Day0302 extends React.Component<any, any> {
    state: {
        answer: string
    }

    execute() {
        // First, we need to split the input
        let inputParsed = input.split("\n");

        let engine: IEngine = parseEngine(inputParsed);

        let total: number = 0;

        engine.symbolsSorted.forEach(ySymbols => {
            if (ySymbols.length === 0) {
                return;
            }

            ySymbols.forEach(symbol => {
                total += gearRatio(symbol, engine.numbers);
            });
        });

        // tadam
        this.setState({
            answer: total
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
                <h2>Exercise 03 Part 2</h2>
                <ExerciseComponent yearNumber={2023} exerciseNumber={3} answer={this.state.answer} rightAnswer={"78236071"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0302;
