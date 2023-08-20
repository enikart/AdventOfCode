import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";

class Day0501 extends React.Component<any, any> {
    state: {
        answer: string
    }

    getStartMap(input: string): string[][] {
        let map: string[][] = [];
        let inputParsed = input.split('\n');
        let stackNumbers = inputParsed[inputParsed.length - 1].split('  ').length;
        while (map.length < stackNumbers) {
            map.push([]);
        }

        for (let i = 0; i < (inputParsed.length - 1); i++) {
            for (let j = 0; j < stackNumbers; j++) {
                if (inputParsed[i][j * 4 + 1] !== ' ') {
                    map[j].push(inputParsed[i][j * 4 + 1]);
                }
            }
        }

        return map;
    }

    makeMove(map: string[][], move: number, from: number, to: number): string[][] {
        for (let i = 0; i < move; i++) {
            let crateMoving = map[from - 1].shift();
            if (crateMoving) {
                map[to-1].unshift(crateMoving);
            }
        }
        return map;
    }

    execute() {
        let inputParsed = input.split("\n\n");
        let map = this.getStartMap(inputParsed[0]);
        let moves = inputParsed[1].split('\n');

        moves.forEach(move => {
            let moveParsed = move.split(' ');
            moveParsed = moveParsed.filter(item => !isNaN(parseInt(item)));
            this.makeMove(map, parseInt(moveParsed[0]), parseInt(moveParsed[1]), parseInt(moveParsed[2]));
        });

        let answer = '';

        for (let i = 0; i < map.length; i++) {
            answer += map[i][0];
        }

        this.setState({
            answer: answer
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
                <h2>Exercise 05 Part 1</h2>
                <ExerciseComponent yearNumber={2022} exerciseNumber={5} answer={this.state.answer} rightAnswer={"CVCWCRTVQ"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0501;
