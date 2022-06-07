import "./TodoList.css";
import TodoItem from "./TodoItem";

// const itemOne = new TodoItem("Item 1", 1, new Date(Date.now()));
// const itemTwo = new TodoItem("Item 2", 2, new Date(Date.now()));
// const itemThree = new TodoItem("Item 3", 3, new Date(Date.now()));
// const itemFour = new TodoItem("Item 4", 4, new Date(Date.now()));

// let todoItemList: TodoItem[] = [itemOne, itemTwo, itemThree, itemFour];


const TodoList = () => {
    return (
        <ul className="list">
            <TodoItem text="Todo 1" key={1}></TodoItem>
            <TodoItem text="Todo 2" key={2}></TodoItem>
            <TodoItem text="Todo 3" key={3}></TodoItem>
        </ul>
    );
};

export default TodoList;