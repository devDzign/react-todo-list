import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            // <li className="list-group-item"></li>
            <li className="list-group-item d-flex justify-content-between align-items-center text-capitalize my-2 shadow-lg bg-white rounded">
                {this.props.item.title}

                <div>
                    <span
                        className="btn btn-link text-success"
                        onClick={() => this.props.onEdit(this.props.item.id)}
                    >
                        <i className="fa fa-edit"/>
                    </span>
                    <span
                        className="btn btn-link text-danger"
                        onClick={() => this.props.onDelete(this.props.item.id)}
                    >
                        <i
                            className="fa fa-trash"
                        />
                    </span>
                </div>

            </li>

        );
    }
}

export default TodoItem;