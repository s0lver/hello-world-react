import "./TodoList.css";
import TodoItemComponent from "./TodoItemComponent";
import TodoItem from "../types/TodoItem";

// const itemOne = new TodoItem("Item 1", 1, new Date(Date.now()));
// const itemTwo = new TodoItem("Item 2", 2, new Date(Date.now()));
// const itemThree = new TodoItem("Item 3", 3, new Date(Date.now()));
// const itemFour = new TodoItem("Item 4", 4, new Date(Date.now()));

// let todoItemList: TodoItem[] = [itemOne, itemTwo, itemThree, itemFour];


const TodoList = () => {
    return (
        <ul className="list">
            <TodoItemComponent text="Todo 1" key={1}></TodoItemComponent>
            <TodoItemComponent text="Todo 2" key={2}></TodoItemComponent>
            <TodoItemComponent text="Todo 3" key={3}></TodoItemComponent>
        </ul>
    );
};

export default TodoList;