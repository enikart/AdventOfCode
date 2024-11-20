import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";

class Day0402 extends React.Component<any, any> {
    state: {
        answer: string
    }

    execute() {
        // First, we need to split the input
        let inputParsed = input.split("\n");
        // tadam
        this.setState({
            answer: ''
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
                <h2>Exercise 04 Part 2</h2>
                <ExerciseComponent yearNumber={2023} exerciseNumber={4} answer={this.state.answer} rightAnswer={"??????"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0402;
