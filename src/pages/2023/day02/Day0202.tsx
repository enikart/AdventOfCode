import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";
import {Cubes, IGame} from "./interfaces/gameStructureInterfaces";
import {parseGame} from "./helpers/gameHelper";

class Day0202 extends React.Component<any, any> {
    state: {
        answer: string
    }

    calculateGamePower(game: IGame): number {
        let power: number = 0;
        let minRed: number | undefined = undefined;
        let minBlue: number | undefined = undefined;
        let minGreen: number | undefined = undefined;

        game.sets.forEach(set => {
            set.setOfCubes.forEach(setOfCube => {
                if (setOfCube.cube === Cubes.Green && (minGreen === undefined || minGreen < setOfCube.number)) {
                    minGreen = setOfCube.number;
                } else if (setOfCube.cube === Cubes.Red && (minRed === undefined || minRed < setOfCube.number)) {
                    minRed = setOfCube.number;
                } else if (setOfCube.cube === Cubes.Blue && (minBlue === undefined || minBlue < setOfCube.number)) {
                    minBlue = setOfCube.number;
                }
            });
        });

        if (minGreen !== undefined && minRed !== undefined && minBlue !== undefined) {
            power = minBlue * minRed * minGreen;
        }

        return power;
    }

    execute() {
        // First, we need to split the input
        let inputParsed = input.split("\n");

        let totalPower: number = 0;

        // For each inventory
        inputParsed.forEach(line =>  {
            let game: IGame = parseGame(line);
            totalPower += this.calculateGamePower(game);
        });

        // tadam
        this.setState({
            answer: totalPower.toString()
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
                <h2>Exercise 02 Part 2</h2>
                <ExerciseComponent yearNumber={2023} exerciseNumber={2} answer={this.state.answer} rightAnswer={"78375"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0202;
