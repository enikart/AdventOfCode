import React, {memo} from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";

class Day0802 extends React.Component<any, any> {
    state: {
        answer: string
    }

    execute() {

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
                <h2>Exercise 08 Part 2</h2>
                <ExerciseComponent yearNumber={2022} exerciseNumber={8} answer={this.state.answer} rightAnswer={"??"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0802;
