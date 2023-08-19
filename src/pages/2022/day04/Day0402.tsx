import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";


class Day0402 extends React.Component<any, any> {
    state: {
        answer: string
    }

    execute() {
        let inputParsed = input.split("\n");
        let sum = 0;

        inputParsed.forEach(item => {
            // For each pair we need to have the limit numbers for the assignments of each elve
            // We split by , to have each elve assignment separately
            const assignments = item.split(',');
            // We split each by - to have each limit numbers separately
            const elveOne = assignments[0].split('-');
            const elveTwo = assignments[1].split('-');

            /*
                The 2 assignments are overlapping if at least one limit of an assignment is :
                between (not strictely, we have <= and >= on each comparison) the 2 limits of the other assignment
                If assignment one's 1st limit is bigger or equal than assignment two's 1st limit, then there is an overlapping
                if assignment one's 1nd limit is smaller or equl than assignment two's 2nd limit
                And the 2nd row of condition tests the exact opposite
             */
            if ((+elveTwo[0] <= +elveOne[0] && +elveTwo[1] >= +elveOne[0])
                || (+elveOne[0] <= +elveTwo[0] && +elveOne[1] >= +elveTwo[0])
            ) {
                sum++;
            }
        });

        this.setState({
            answer: sum.toString()
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
                <ExerciseComponent yearNumber={2022} exerciseNumber={4} answer={this.state.answer} rightAnswer={"811"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0402;
