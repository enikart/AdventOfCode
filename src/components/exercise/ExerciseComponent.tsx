
import React from "react";
import {Button} from "@mui/material";
import {ExerciseProps} from "../../types/propsTypes";

class Exercise extends React.Component<ExerciseProps, any> {

    state: {
        yearNumber: number,
        exerciseNumber: number,
        answer: string,
        exec: () => void
    }

    constructor(props: ExerciseProps) {
        super(props);

        this.state = {
            yearNumber: props.yearNumber,
            exerciseNumber: props.exerciseNumber,
            answer: props.answer,
            exec: props.exec
        }
    }

    static getDerivedStateFromProps(props: ExerciseProps) {
        return {
            yearNumber: props.yearNumber,
            exerciseNumber: props.exerciseNumber,
            answer: props.answer,
            exec: props.exec
        }
    }
    
    render() {
        let execute_help;
        if (this.state.answer.length === 0) {
            execute_help = <p>To have the answer, please execute the code by clicking here : </p>;
        }

        return (
            <div>
                <a target={"_blank"} href={"https://adventofcode.com/"+this.state.yearNumber+"/day/"+this.state.exerciseNumber}>Link from the exercise</a>
                <p>Answer for the day : <span id={"answer"}>{this.state.answer}</span></p>
                {execute_help}
                <Button variant="contained" onClick={this.state.exec}>Execute</Button>
            </div>
        );
    }
}

export default Exercise;
