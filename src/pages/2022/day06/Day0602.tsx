import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";

class Day0602 extends React.Component<any, any> {
    state: {
        answer: string
    }

    execute() {
        let marker: string[] = [];
        let answer: number = 0;

        for (let i = 0; i < input.length; i++) {
            if (!marker.includes(input[i])) {
                marker.push(input[i]);

                if (marker.length === 14) {
                    answer = i + 1;
                    break;
                }
            } else {
                marker.push(input[i]);
                let markerResetted = false;
                while (!markerResetted) {
                    if (marker[0] === input[i]) {
                        markerResetted = true;
                    }
                    marker.shift();
                }
            }
        }


        this.setState({
            answer: answer.toString()
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
                <h2>Exercise 06 Part 2</h2>
                <ExerciseComponent yearNumber={2022} exerciseNumber={6} answer={this.state.answer} rightAnswer={"CNSCZWLVT"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0602;
