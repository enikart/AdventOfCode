import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";

class Day0101 extends React.Component<any, any> {
    state: {
        answer: string
    }

    execute() {
        // code
        this.setState({
            answer: "SALUT LA REPONSE"
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
                <h2>Exercise 01 Part 1</h2>
                <ExerciseComponent yearNumber={2022} exerciseNumber={1} answer={this.state.answer} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0101;
