import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";
import calculateLetterPoint from "./helper/points";


class Day0302 extends React.Component<any, any> {
    state: {
        answer: string
    }

    sortCompare(a: string, b: string): number {
        if (a.length > b.length) {
            return -1;// return < 0 means a will be before b in the array
        } else if (a.length < b.length) {
            return 1;// return > 0 means a will be after b in the array
        }

        return 0;// return = 0 means the positions won't swap no matter the original order
    }

    execute() {
        let inputParsed = input.split("\n");
        let sum = 0;

        // We need to check the common letter in each GROUP of three elves.
        // So the loop iterator will be incremented by 3 each iteration
        for (let i = 2; i < inputParsed.length; i += 3) {
            // We put the 3 elves on an array
            let group = [inputParsed[i], inputParsed[i - 1], inputParsed[i - 2]];

            // And we sort it out by making the longest inventory first
            // We do that to ensure that checking every char in THIS inventory (the longest) will eventually give us the common letter
            group = group.sort(this.sortCompare);

            for (let j = 0; j < group[0].length; j++) {
                // If a letter contained in inventory of elve 1 of this group is also contained in the other's two inventory...
                // It's a win !
                if (group[1].includes(group[0][j]) && group[2].includes(group[0][j])) {// -> Yes, string.includes() is case sensitive :D
                    sum += calculateLetterPoint(group[0][j]);

                    // -> The break statement is here to gain loop iterations but also to avoid multiple letter occurences
                    // If partOne and partTwo share "l" letter, but partOne has it once, partTwo has it twice, we need to add
                    // only once the points :)
                    break;
                }
            }
        }

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
                <h2>Exercise 03 Part 2</h2>
                <ExerciseComponent yearNumber={2022} exerciseNumber={3} answer={this.state.answer} rightAnswer={"2585"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0302;
