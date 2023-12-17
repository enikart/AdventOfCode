import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";

class Day0201 extends React.Component<any, any> {
    state: {
        answer: string
    }

    execute() {
        // First, we need to split the input
        let inputParsed = input.split("\n");

        let totalDigit: number = 0;

        // For each inventory
        inputParsed.forEach(item =>  {
            let firstDigit: string = '';
            let lastDigit: string = '';
            let total: string = '';
            let j: number = item.length -1;

            // For each line we need to search from each part of the string :
            // - from the beginning, until we find a digit
            // - from the end, until we find a digit (which can be the same as the first digit)
            // To be faster, we'll search in one loop from the beginning AND from the end
            for (let i = 0; i < item.length; i++) {
                if (firstDigit.length > 0 && lastDigit.length > 0) {
                    break;
                }

                if (firstDigit.length === 0 && /^\d$/.test((item[i]))) {
                    firstDigit = item[i];
                }

                if (lastDigit.length === 0 && /^\d$/.test(item[j])) {
                    lastDigit = item[j];
                }
                j--;
            }

            total = firstDigit + lastDigit;

            totalDigit += Number(total);
        });

        // tadam
        this.setState({
            answer: totalDigit.toString()
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
                <ExerciseComponent yearNumber={2023} exerciseNumber={2} answer={this.state.answer} rightAnswer={"54953"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0201;
