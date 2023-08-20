import React, {memo} from "react";
import ExerciseComponent from "../../../components/exercise/ExerciseComponent";
import input from "./input";
import {IDirectory, IFileTreeStructure} from "./interfaces/fileStructureInterfaces";

class Day0702 extends React.Component<any, any> {
    state: {
        answer: string
    }

    addDirectoryToTree(currentDir: IDirectory, newDir: string): void {
        currentDir.childrenDirectory[newDir] = {
            size: 0,
            childrenFile: [],
            childrenDirectory: {},
            name: newDir
        };
    }

    addFileToTree(currentDir: IDirectory, fileSize: string, fileName: string): void {
        currentDir.childrenFile.push({
            name: fileName,
            size: parseInt(fileSize)
        });
    }

    calculateDirSize(dir: IDirectory): void {
        let dirSize = 0;

        dir.childrenFile.forEach(file => {
            dirSize += file.size;
        });

        for (let subdir in dir.childrenDirectory) {
            this.calculateDirSize(dir.childrenDirectory[subdir]);
            dirSize += dir.childrenDirectory[subdir].size;
        }

        dir.size = dirSize;
    }

    getCurrentDir(fts: IFileTreeStructure, currentPath: string[]): IDirectory {
        let dir: IDirectory = {
            size: -1,
            childrenFile: [],
            childrenDirectory: {},
            name: ''
        };

        currentPath.forEach(path => {
            if (dir.size === -1) {
                dir = fts[path];
            } else {
                dir = dir.childrenDirectory[path];
            }
        });

        return dir;
    }

    printTree(fts: IFileTreeStructure) {
        let print: string = '';


    }

    calculateAnswer(dir: IDirectory, actualDirToDel: IDirectory, actualMemoryNeed: number): IDirectory {
        let answer = actualDirToDel;

        if (dir.size > actualMemoryNeed && dir.size < actualDirToDel.size) {
            answer = dir;
        }

        for (let subdir in dir.childrenDirectory) {
            answer = this.calculateAnswer(dir.childrenDirectory[subdir], answer, actualMemoryNeed);
        }

        return answer;
    }


    execute() {
        let inputParsed = input.split('$');
        inputParsed.shift();// removing the first command '' because of split
        let fileTreeStructure: IFileTreeStructure = {};
        let currentDir: string = '';
        let changeDir: string = '';
        let currentPath: string[] = [];

        fileTreeStructure['/'] = {
            size: 0,
            childrenFile: [],
            childrenDirectory: {},
            name: '/'
        };

        inputParsed.forEach(command => {
            let commandDetails: string[] = command.split('\n');
            if (commandDetails[0].substring(1, 3) === 'cd') {
                changeDir = commandDetails[0].substring(4);
                if (changeDir === '..') {
                    currentPath.pop();
                } else {
                    let currentDirObject = this.getCurrentDir(fileTreeStructure, currentPath);
                    currentPath.push(changeDir);
                    if (currentDirObject.childrenDirectory[changeDir] === undefined) {
                        this.addDirectoryToTree(currentDirObject, changeDir);
                    }
                }

                currentDir = changeDir;
            } else {
                commandDetails.shift();// removing 'ls' line, we don't need it
                commandDetails.forEach(lsLine => {
                    if (lsLine.substring(0, 3) === 'dir') {
                        let currentDirObject = this.getCurrentDir(fileTreeStructure, currentPath);
                        if (currentDirObject.childrenDirectory[lsLine.substring(4)] === undefined) {
                            this.addDirectoryToTree(currentDirObject, lsLine.substring(4));
                        }
                    } else if (lsLine !== '') {
                        let fileInfos = lsLine.split(' ');
                        let currentDirObject = this.getCurrentDir(fileTreeStructure, currentPath);
                        this.addFileToTree(currentDirObject, fileInfos[0], fileInfos[1]);
                    }
                });
            }
        });
        this.calculateDirSize(fileTreeStructure['/']);

        this.setState({
            answer: this.calculateAnswer(fileTreeStructure['/'], fileTreeStructure['/'], 30000000 - (70000000 - fileTreeStructure['/'].size)).size
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
                <h2>Exercise 07 Part 2</h2>
                <ExerciseComponent yearNumber={2022} exerciseNumber={7} answer={this.state.answer} rightAnswer={"5025657"} exec={this.execute}/>
            </div>
        );
    }
}

export default Day0702;
