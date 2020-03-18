import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "react-uuid";

import './App.scss';
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/Input/TodoInput";

class App extends Component {

    state = {
        items: [],
        item: "",
        editItem: false,
        id: uuid()
    }

    changeHandler = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();

        if(this.state.item.length <=0){
            return;
        }
        const newItem = {
            id: this.state.id,
            title: this.state.item
        }

        const updateItems = [...this.state.items, newItem];

        this.setState({
            items: updateItems,
            item: '',
            id: uuid(),
        });

    }

    clearListHandler = () => {
        const clearListItems = [];

        this.setState({
            items: clearListItems
        })
    }

    editHandler = (id) => {
        const filtredItems = this.state.items.filter( item => {
            return id !== item.id
        })
        const updateItem = this.state.items.find( item => {
            return id === item.id
        })

        this.setState({
            item: updateItem.title,
            editItem: true,
            id: id,
            items: filtredItems
        })
    }

    removeHandler = (id) => {
        console.log('handler remove', id);
        const newListItem = this.state.items.filter(item => {
            return id !== item.id
        })

        this.setState(
            {
                items: newListItem
            }
        )
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5">
                            <h3 className="text-capitalize text-center">Todo Input</h3>
                            <TodoInput
                                item={this.state.item}
                                changeHandler={this.changeHandler}
                                submitHandler={this.submitHandler}
                                editItem={this.state.editItem}
                            />
                            <TodoList
                                items={this.state.items}
                                onClearList={this.clearListHandler}
                                onDelete={this.removeHandler}
                                onEdiItem={this.editHandler}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
