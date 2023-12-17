import React from "react";
import {exercisesJson} from "./exercisesJson";
import YearNavigator from "../../components/year/YearNavigatorComponent";
import {Exercise} from "../../types/exercisesProps";

class Year2023 extends React.Component<any, any> {
    state: {
        year: number,
        exs: Exercise[],
    }

    constructor(props: null) {
        super(props);

        this.state = {
            year: 2023,
            exs: exercisesJson
        }
    }

    render() {
        return (
            <div>
                <p>List of the Exercises for {this.state.year} </p>
                <YearNavigator year={this.state.year} exs={this.state.exs}/>
            </div>
        );
    }
}

export default Year2023;
