import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";
import {parseCards} from "./helpers/gameHelper";
import {ICards} from "./interfaces/cardsStructureInterfaces";


class Day0401 extends React.Component<any, any> {
    state: {
        answer: string
    }

    calculatePoints(cards: ICards): number
    {
        let sum: number = 0;
        let winningHaving: number = 0;

        cards.forEach(card => {
            winningHaving = 0;
            card.winning.forEach(winning => {
                card.having.forEach(having => {
                    if (having === winning) {
                        winningHaving++;
                    }
                });
            });

            if (winningHaving < 2) {
                sum += winningHaving;
            } else {
                sum += 2 ** (winningHaving - 1);
            }
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
                <h2>Exercise 04 Part 1</h2>
                <ExerciseComponent yearNumber={2023} exerciseNumber={4} answer={this.state.answer} rightAnswer={"18519"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0401;
