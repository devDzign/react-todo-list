import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            // <li className="list-group-item"></li>
            <li className="list-group-item d-flex justify-content-between align-items-center text-capitalize my-2 shadow-lg bg-white rounded">
                Cras justo odio{this.props.item.title}
                {/*<span className="badge badge-primary badge-pill">14</span>*/}
                <div>
                    <span className="btn btn-link text-success">
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