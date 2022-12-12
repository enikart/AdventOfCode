import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";
import {MyPlays, MyPlaysPoints, OpponentPlays, ResultLetter, RoundResult, RoundResultPoints} from "./assets/enums";


class Day0202 extends React.Component<any, any> {
    state: {
        answer: string
    }

    checkRoundPoints(result: string, myPlay: string): number {
        let points: number = 0;

        switch (myPlay) {
            case MyPlays.Rock:
                points += MyPlaysPoints.Rock;
                break;
            case MyPlays.Paper:
                points += MyPlaysPoints.Paper;
                break;
            case MyPlays.Scissors:
                points += MyPlaysPoints.Scissors;
                break;
        }

        switch (result) {
            case ResultLetter.Win:
                points += RoundResultPoints.Win;
                break;
            case ResultLetter.Lose:
                points += RoundResultPoints.Lose;
                break;
            case ResultLetter.Draw:
                points += RoundResultPoints.Draw;
                break;
        }

        return points;
    }

    checkRoundPlayerPlay(opponentPlay: string, result: string): string {
        switch(result) {
            case ResultLetter.Win:
                if (opponentPlay === OpponentPlays.Scissors) {
                    //Win if I play rock
                    return MyPlays.Rock;
                } else if (opponentPlay === OpponentPlays.Paper) {
                    //Win if I play scissors
                    return MyPlays.Scissors;
                }
                //Win if I play paper
                return MyPlays.Paper;
            case ResultLetter.Draw:
                if (opponentPlay === OpponentPlays.Scissors) {
                    //Draw if I play scissors
                    return MyPlays.Scissors;
                } else if (opponentPlay === OpponentPlays.Paper) {
                    //Draw if I play paper
                    return MyPlays.Paper;
                }
                //Draw if I play rock
                return MyPlays.Rock;
            case ResultLetter.Lose:
                if (opponentPlay === OpponentPlays.Scissors) {
                    //Lose if I play paper
                    return MyPlays.Paper;
                } else if (opponentPlay === OpponentPlays.Paper) {
                    //Lose if I play rock
                    return MyPlays.Rock;
                }
                //Lose if I play scissors
                return MyPlays.Scissors;
        }
        return opponentPlay;
    }

    execute() {
        let inputParsed = input.split("\n");
        let totalPoints: number = 0;

        // Less algo on this one. We split each line (one line = 1 round) then split each play (opponent/us)
        inputParsed.forEach(item => {
            let roundInfos = item.split(' ');

            // We check with enums & switch what shape to play according to the opponent's play and the round's ending
            let myPlay = this.checkRoundPlayerPlay(roundInfos[0], roundInfos[1]);

            // Knowing the result and our play, we can calculate the points for the round (still with enums & switch)
            totalPoints += this.checkRoundPoints(roundInfos[1], myPlay);
        });

        this.setState({
            answer: totalPoints.toString()
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
                <h2>Exercise 02 Part 2</h2>
                <ExerciseComponent yearNumber={2022} exerciseNumber={2} answer={this.state.answer} rightAnswer={"11373"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0202;
