export default class TodoItemType {
    id?: number;
    text: string;
    date?: Date;

    constructor(text: string, id: number, date: Date) {
        this.id = id;
        this.text = text;
        this.date = date;
    }
}