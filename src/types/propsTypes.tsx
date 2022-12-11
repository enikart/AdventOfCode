import {Exercise} from "./exercisesProps";

export type YearProps = {
    y: number
}

export type ExerciseProps = {
    yearNumber: number,
    exerciseNumber: number,
    answer: string,
    rightAnswer: string,
    exec: () => void,
}

export type YearNavigatorProps = {
    year: number,
    exs: Exercise[]
}