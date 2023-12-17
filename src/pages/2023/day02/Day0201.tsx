import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";
import {Cubes, IGame} from "./interfaces/gameStructureInterfaces";
import {parseGame} from "./helpers/gameHelper";

class Day0201 extends React.Component<any, any> {
    state: {
        answer: string
    }

    isGamePossible(game: IGame): boolean {
        let isGamePossible: boolean = true;
        game.sets.some(set => {
            let isSetPossible: boolean = true;
            set.setOfCubes.some(cubes => {
                if (cubes.cube === Cubes.Red && cubes.number > 12) {
                    isSetPossible = false;
                    return true;
                }
                if (cubes.cube === Cubes.Blue && cubes.number > 14) {
                    isSetPossible = false;
                    return true;
                }
                if (cubes.cube === Cubes.Green && cubes.number > 13) {
                    isSetPossible = false;
                    return true;
                }
                return false;
            });

            if (!isSetPossible) {
                isGamePossible = false;
                return true;// stopping the loop
            }
            return false;
        });

        return isGamePossible;
    }

    execute() {
        // First, we need to split the input
        let inputParsed = input.split("\n");

        let totalGames: number = 0;

        // For each inventory
        inputParsed.forEach(line =>  {
            let isGameCounting: boolean;
            let game: IGame = parseGame(line);

            isGameCounting = this.isGamePossible(game);

            if (isGameCounting) {
                totalGames += game.id;
            }
        });

        // tadam
        this.setState({
            answer: totalGames.toString()
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
                <h2>Exercise 02 Part 1</h2>
                <ExerciseComponent yearNumber={2023} exerciseNumber={2} answer={this.state.answer} rightAnswer={"2406"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0201;
