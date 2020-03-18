import React, {Component} from 'react';
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {


    render() {
        const {items, onClearList, onEdiItem, onDelete} = this.props;
        return (
         <ul className="list-group my-5">

             <h3 className="text-capitalize text-center"> Todo List</h3>

             {
                 items.map( item => {
                     return <TodoItem
                         key={item.id}
                         item={item}
                         onEdit={onEdiItem}
                         onDelete={onDelete}
                     />
                 })
             }
             <li className="list-group-item d-flex justify-content-between align-items-center">
                 <button className="btn btn-block btn-outline-danger" onClick={onClearList}>Remove All</button>
             </li>

         </ul>
        );
    }
}

export default TodoList;