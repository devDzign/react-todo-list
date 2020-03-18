import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "react-uuid";

import './App.scss';
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/Input/TodoInput";

class App extends Component {

    state = {
        items: [
            {
                id: uuid(),
                title: "make sport"
            },
            {
                id: uuid(),
                title: "make sport"
            }
        ],
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

        console.log('items states : ', this.state)


    }

    clearListHandler = () => {
        console.log('clear list handler')
    }

    editHandler = (id) => {
        console.log('handler edit');
    }

    removeHandler = (id) => {
        console.log('handler remove');
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
                                onEdiItem={this.state.editItem}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
