import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            // <li className="list-group-item"></li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio{this.props.item.title}
                {/*<span className="badge badge-primary badge-pill">14</span>*/}
                <div>
                    <button className="btn btn-outline-success" ><span className="fa fa-edit"></span> </button>
                    <button className="btn btn-outline-danger" onClick={() => this.props.onDelete(this.props.item.id)}><span className="fa fa-trash"></span> </button>
                </div>

            </li>

        );
    }
}

export default TodoItem;