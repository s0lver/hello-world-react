// export default interface TodoItem {
//     id?: number;
//     text: string;
//     date?: Date;
// }

export default class TodoItem {
    id?: number;
    text: string;
    date?: Date;

    constructor(text: string, id: number, date: Date) {
        this.id = id;
        this.text = text;
        this.date = date;
    }
}