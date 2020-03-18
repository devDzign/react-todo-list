import React, {Component} from 'react';

class TodoInput extends Component {
    render() {
        const {item, changeHandler, submitHandler, editItem} = this.props

        const disabled = item.length<=0;
        return (
            <div className="card card-body my-3 shadow-lg bg-white rounded">
                <form onSubmit={submitHandler}>
                    <div className="input-group">
                        <div className="input-group-append">
                            <div className="input-group-text bg-info text-white">
                                <i className="fa fa-book fa-1x "/>
                            </div>

                        </div>
                        <input
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="add todo item"
                            value={item}
                            onChange={changeHandler}
                        />
                    </div>
                    <button className="btn btn-block btn-outline-success text-uppercase mt-3"
                            disabled={disabled}
                    >
                        {editItem ? 'update item' : 'Add item'}
                    </button>
                </form>
            </div>

        );
    }
}

export default TodoInput;