type TodoContents = {
    text: string;
};

export type TodoDTO = {
    id: string;
    contents: TodoContents;
    author: string;
    done: boolean;
    createdAt: string;
};

export default class TodoEntity {
    get textContents(): string {
        return this.contents.text;
    }

    constructor(public id: string, private readonly contents: TodoContents, public author: string, public done: boolean, public createdAt: string) {}
}
