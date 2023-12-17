import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";
import ITree from "./interfaces/treeInterfaces";
class Day0801 extends React.Component<any, any> {
    state: {
        answer: string
    }

    constructMap(input: string): number[][] {
        let map: number[][] = [];
        let inputLines: string[] = input.split('\n');

        inputLines.forEach(line => {
            let lineParsed = line.split('');
            let lineNum: number[] = [];
            lineParsed.forEach(char => {
                lineNum.push(parseInt(char));
            });
            map.push(lineNum);
        });

        return map;
    }

    constructOutput(map: number[][]): ITree[][] {
        let output: ITree[][] = [];

        map.forEach(line => {
            let outputLine: ITree[] = [];
            line.forEach(tree => {
                outputLine.push({
                    top: null,
                    bottom: null,
                    left: null,
                    right: null,
                })
            });
            output.push(outputLine);
        });

        return output;
    }

    checkTree(map: number[][], output: ITree[][], i: number, j: number): number {
        let isVisible: number = 0;

        if (output[i][j].left || output[i][j].top || output[i][j].bottom || output[i][j].right) {
            isVisible = 1;
        }

        for (let k = j; k >= 0; k--) {
            if () {
                
            }
        }

        return isVisible;
    }

    execute() {
        let map = this.constructMap(input);
        let output: ITree[][] = this.constructOutput(map);
        let treeVisible = 0;

        //TODO euh.. Soit on fait pour chacun toutes les possibilités, soit on trouve un moyen de faire light mais je sais pas comment
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[0].length; j++) {
                treeVisible += this.checkTree(map, output, i, j);
            }
        }

        this.setState({
            answer: treeVisible.toString()
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
                <h2>Exercise 08 Part 1</h2>
                <ExerciseComponent yearNumber={2022} exerciseNumber={8} answer={this.state.answer} rightAnswer={"1915606"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0801;
