import React from 'react';
import TodoItem from '../types/TodoItem';

const TodoItemComponent = (props: TodoItem) => {
    return (
        <li>
            {props.text}
            <button type='button'>Delete</button>
            </li>
    );
}

export default TodoItemComponent;