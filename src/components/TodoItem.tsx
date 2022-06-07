import React from 'react';
import TodoItemType from './TodoItem.types';

const TodoItem = (props: TodoItemType) => {
    return (
        <li>
            {props.text}
            <button type='button'>Delete</button>
            </li>
    );
}

export default TodoItem;