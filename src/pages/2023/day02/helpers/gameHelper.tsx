import {Cubes, IGame, ISetCubes} from "../interfaces/gameStructureInterfaces";

export function getCubeColor(cubeInfos: string): Cubes {
    if (cubeInfos === 'red') {
        return Cubes.Red;
    } else if (cubeInfos === 'blue') {
        return Cubes.Blue;
    } else {
        return Cubes.Green;
    }
}


export function parseGame(line: string): IGame {
    let game: IGame = {
        id: 0,
        sets: []
    };
    let gameStirng = line.split(':');
    game.id = Number(gameStirng[0].substring(5));
    let setsString = gameStirng[1].split(';');

    setsString.forEach(setString => {
        let setOfCube: ISetCubes[] = [];
        let cubeString = setString.split(',');

        cubeString.forEach(cube => {
            cube = cube.trim();
            let cubeInfos = cube.split(' ');
            setOfCube.push({
                number: Number(cubeInfos[0]),
                cube: getCubeColor(cubeInfos[1]),
            });
        });

        game.sets.push({
            setOfCubes: setOfCube
        });
    });

    return game;
}