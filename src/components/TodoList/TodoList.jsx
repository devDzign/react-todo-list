import React, {Component} from 'react';
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {
    render() {
        return (
            <>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </>
        );
    }
}

export default TodoList;