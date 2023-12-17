import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";

interface AssociativeArray {
    [key: string]: number
}

const DIGITS: string[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
];

const DIGITS_LETTER: string[] = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
];

const DIGITS_MATCH: AssociativeArray = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
};

type DigitFound = {
    digit: number,
    digitString: string,
    pos: number
}

class Day0102 extends React.Component<any, any> {
    state: {
        answer: string
    }

    execute() {
        // First, we need to split the input
        let inputParsed = input.split("\n");

        let totalDigit: number = 0;

        // For each inventory
        inputParsed.forEach(item =>  {
            let firstDigit: DigitFound | null = null;
            let lastDigit: DigitFound | null = null;
            let total: number = 0;
            let allDigits: DigitFound[] = [];
            let maxPos: number = item.length - 1;


            // For each line we need to search from each part of the string :
            // - from the beginning, until we find a digit
            // - from the end, until we find a digit (which can be the same as the first digit)

            // For this exercise we need one thing that we didn't have last time : the digits spelled out with letters
            // We'll need to search for "one", "two" and so on, and for 1 2 3...
            // We won't be searching char by char this time but we'll identify every occurence of a digit and THEN
            // we'll be choosing first and last.
            for (let i = 0; i < item.length; i++) {
                if (DIGITS.includes(item[i])) {// In this case we have a number written digit, not a letter written digit
                    allDigits.push({
                        digit: Number(item[i]),
                        digitString: item[i],
                        pos: i
                    });
                } else {
                    for (const key in DIGITS_LETTER) {
                        if (i + DIGITS_LETTER[key].length - 1 <= maxPos && item.substring(i, i + DIGITS_LETTER[key].length) === DIGITS_LETTER[key]) {
                            allDigits.push({
                                digit: DIGITS_MATCH[DIGITS_LETTER[key]],
                                digitString: DIGITS_LETTER[key],
                                pos: i
                            });
                            break;
                        }
                    }
                }
            }

            // Now we just have to iterate through foudnDigit to find the first and last with pos attribute
            allDigits.forEach(digit => {
                if (firstDigit === null || firstDigit.pos > digit.pos) {
                    firstDigit = digit;
                }
                if (lastDigit === null || lastDigit.pos < digit.pos) {
                    lastDigit = digit;
                }
            });

            if (firstDigit !== null && lastDigit !== null) {
                total = firstDigit['digit'] * 10 + lastDigit['digit'];
            }

            totalDigit += total;
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
                <h2>Exercise 01 Part 2</h2>
                <ExerciseComponent yearNumber={2023} exerciseNumber={1} answer={this.state.answer} rightAnswer={"53868"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0102;
