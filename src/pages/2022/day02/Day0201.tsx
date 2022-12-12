import React from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";

enum OpponentPlays {
    Rock = "A",
    Paper = "B",
    Scissors = "C",
}
enum MyPlays {
    Rock = "X",
    Paper = "Y",
    Scissors = "Z",
}
enum MyPlaysPoints {
    Rock = 1,
    Paper = 2,
    Scissors = 3,
}
enum RoundResultPoints {
    Win = 6,
    Lose = 0,
    Draw = 3,
}

enum RoundResult {
    Win = 1,
    Lose = -1,
    Draw = 0,
}

class Day0201 extends React.Component<any, any> {
    state: {
        answer: string
    }

    checkRoundPoints(result: RoundResult, myPlay: string): number {
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
            case RoundResult.Win:
                points += RoundResultPoints.Win;
                break;
            case RoundResult.Lose:
                points += RoundResultPoints.Lose;
                break;
            case RoundResult.Draw:
                points += RoundResultPoints.Draw;
                break;
        }

        return points;
    }

    checkRoundResult(opponentPlay: string, myPlay: string): RoundResult {
        switch(myPlay) {
            case MyPlays.Rock:
                if (opponentPlay === OpponentPlays.Scissors) {
                    //Win if opponent plays scissors
                    return RoundResult.Win;
                } else if (opponentPlay === OpponentPlays.Paper) {
                    //Lose if opponent plays paper
                    return RoundResult.Lose;
                }
                return RoundResult.Draw;
            case MyPlays.Paper:
                if (opponentPlay === OpponentPlays.Rock) {
                    //Win if opponent plays scissors
                    return RoundResult.Win;
                } else if (opponentPlay === OpponentPlays.Scissors) {
                    //Lose if opponent plays paper
                    return RoundResult.Lose;
                }
                return RoundResult.Draw;
            case MyPlays.Scissors:
                if (opponentPlay === OpponentPlays.Paper) {
                    //Win if opponent plays scissors
                    return RoundResult.Win;
                } else if (opponentPlay === OpponentPlays.Rock) {
                    //Lose if opponent plays paper
                    return RoundResult.Lose;
                }
                return RoundResult.Draw;
        }
        return RoundResult.Draw;
    }

    execute() {
        let inputParsed = input.split("\n");
        let totalPoints: number = 0;

        // Less algo on this one. We split each line (one line = 1 round) then split each play (opponent/us)
        inputParsed.forEach(item => {
            let roundPlays = item.split(' ');

            // We check with enums & switch if we won/lose/draw the round
            let result = this.checkRoundResult(roundPlays[0], roundPlays[1]);

            // Knowing the result and our play, we can calculate the points for the round (still with enums & switch)
            totalPoints += this.checkRoundPoints(result, roundPlays[1]);
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
                <h2>Exercise 02 Part 1</h2>
                <ExerciseComponent yearNumber={2022} exerciseNumber={2} answer={this.state.answer} rightAnswer={"13005"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0201;
