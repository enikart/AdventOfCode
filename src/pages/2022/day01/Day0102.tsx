import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";

class Day0102 extends React.Component<any, any> {
    state: {
        answer: string
    }

    sortCompare(a: number, b: number): number {
        if (a > b) {
            return -1;// return < 0 means a will be before b in the array
        } else if (a < b) {
            return 1;// return > 0 means a will be after b in the array
        }

        return 0;// return = 0 means the positions won't swap no matter the original order
    }

    bubbleSort(array: number[]): number[] {
        let arrayLength: number = array.length;
        let change: boolean;

        /* After each comparison, the smaller number will be placed after his neighbor
            Which means that after a complete loop of the original array, the last element will be sorted
            Which means after each loop we don't have to compare the last element we compared before
            So after for example 3 complete loops : the 3 last items of an array will be sorted, so we don't have
            to check them
            That's why i is decrementing from (arrayLength-1) and the 2nd for loop check items from 0 to (i - 1)
            We could just do j < arrayLength - 1, but it would be useless

            The "change" variable is here to stop the loops if there are no changes left to do :
            If a complete loop doesn't change eanything, well.. nothing will !
         */
        for (let i = (arrayLength - 1); i > 0; i--) {
            change = false;
            for (let j = 0; j < i; j++) {
                if (array[j] <= array[j+1]) {
                    change = true;
                    let tmp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = tmp;
                }
            }
            if (!change) {
                break;
            }
        }

        return array;
    }

    execute() {
        // First, we need to split the inventories by Elf
        // To do that, we know that there's a blank line between each inventory
        let inputParsed = input.split("\n\n");

        let bestCarryElf: number[] = [0,0,0];

        // For each inventory
        inputParsed.forEach(item =>  {
            let caloriesArray = item.split("\n");
            let totalElfCalories: number = 0;

            // we'll calculate the total amount of calories carried by the Elf
            // by adding each food calories together
            caloriesArray.forEach(food => {
                totalElfCalories += +food;
            });

            // We only store the value if the current Inventory has more calories than the 3rd previous "best carry"
            if (totalElfCalories > bestCarryElf[2]) {
                bestCarryElf[2] = totalElfCalories;
                // Just had fun to do the bubbleSort from scratch, there are
                // fully working/simpler solutions for that on JS
                // like array.sort() with a compare function inside (see sortCompare in this file)
                bestCarryElf = this.bubbleSort(bestCarryElf);
            }
        });

        let totalBestrCarry = bestCarryElf.reduce((sum, item) => {
            return sum + item;
        });

        // tadam
        this.setState({
            answer: totalBestrCarry.toString()
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
                <h2>Exercise 01 Part 2</h2>
                <ExerciseComponent yearNumber={2022} exerciseNumber={1} answer={this.state.answer} rightAnswer={"209481"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0102;
