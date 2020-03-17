import React from 'react';

const Tour = (props) => {


    return (
        <div className="card mb-3">
            <div className="row no-gutters">

                <div className="col-md-2 col-md-pull-1 rotate-sm-l-90">
                    <p className="display-6 text-capitalize text-center">{props.data.city}</p>
                    <hr className="bg-dark"/>
                </div>
                <div className="col-md-4 col-md-pull-2">
                    <div className="hover-fade-in-overlay">
                        <img src={props.data.img} className="card-img hover-grayscale" alt={props.data.city}/>
                        <div className="overlay-75 bg-black">
                            <div className="overlay-container">
                                <p className="display-7 text-light">{props.data.name}</p>

                                <a className="btn btn-outline-danger"
                                   onClick={()=>props.onRemove(props.data.id)}>
                                    Remove
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{props.data.name}</h5>
                        <p className="card-text">
                            {props.data.info}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tour;
