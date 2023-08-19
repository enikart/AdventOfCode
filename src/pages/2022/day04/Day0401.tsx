import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";

class Day0401 extends React.Component<any, any> {
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
                The 2 assignments are overlapping completely If and only if :
                assignment one has its 1st limit lower than assignment 2's and its 2nd limit higher than  assignment 2's
                -> And in this case, assignment 1 overlaps ossignment 2
                OR the opposite, and in this case, assignment 2 overlaps ossignment 1
             */
            if ((+elveOne[0] >= +elveTwo[0] && +elveOne[1] <= +elveTwo[1])
                || (+elveOne[0] <= +elveTwo[0] && +elveOne[1] >= +elveTwo[1])
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
                <h2>Exercise 04 Part 1</h2>
                <ExerciseComponent yearNumber={2022} exerciseNumber={4} answer={this.state.answer} rightAnswer={"305"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0401;
