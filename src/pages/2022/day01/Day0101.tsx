import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";

class Day0101 extends React.Component<any, any> {
    state: {
        answer: string
    }

    execute() {
        // First, we need to split the inventories by Elf
        // To do that, we know that there's a blank line between each inventory
        let inputParsed = input.split("\n\n");

        let bestCarryElf: number = 0;

        // For each inventory
        inputParsed.forEach(item =>  {
            let caloriesArray = item.split("\n");
            let totalElfCalories: number = 0;

            // we'll calculate the total amount of calories carried by the Elf
            // by adding each food calories together
            caloriesArray.forEach(food => {
                totalElfCalories += +food;
            });

            // We only store the value if the current Inventory has more calories than the previous "best carry"
            if (totalElfCalories > bestCarryElf) {
                bestCarryElf = totalElfCalories;
            }
        });

        // tadam
        this.setState({
            answer: bestCarryElf.toString()
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
                <ExerciseComponent yearNumber={2022} exerciseNumber={1} answer={this.state.answer} rightAnswer={"74711"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0101;
