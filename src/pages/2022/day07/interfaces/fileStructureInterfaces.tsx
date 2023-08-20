export interface IFile {
    size: number,
    name: string
}
export interface IDirectory {
    size: number,
    childrenFile: IFile[],
    childrenDirectory: IFileTreeStructure,

    name: string
}

export interface IFileTreeStructure {
    [key: string]: IDirectory,
}
