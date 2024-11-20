import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";
import {parseCards} from "./helpers/gameHelper";
import {ICards} from "./interfaces/cardsStructureInterfaces";

class Day0402 extends React.Component<any, any> {
    state: {
        answer: string
    }

    calculatePoints(cards: ICards): number
    {
        let sum: number = 0;
        let winningHaving: number = 0;
        let cardNumber: number = 1;

        cards.forEach(card => {
            winningHaving = 0;
            card.winning.forEach(winning => {
                card.having.forEach(having => {
                    if (having === winning) {
                        winningHaving++;
                    }
                });
            });
            if (winningHaving > 0) {
                for (let j = cardNumber; j < cardNumber + winningHaving; j++) {
                    if (typeof cards[j] !== 'undefined') {
                        cards[j].copies += card.copies;
                    }
                }
            }

            sum += card.copies;

            cardNumber++;
        });

        return sum;
    }

    execute() {
        // First, we need to split the input
        let inputParsed = input.split("\n");

        let cards: ICards = parseCards(inputParsed);

        // tadam
        this.setState({
            answer: this.calculatePoints(cards).toString()
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
                <ExerciseComponent yearNumber={2023} exerciseNumber={4} answer={this.state.answer} rightAnswer={"??????"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0402;
