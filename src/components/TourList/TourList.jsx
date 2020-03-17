import React, {Component} from 'react';
import Tour from "../Tour/Tour";

import {tourData} from '../../constants/tourData'

class TourList extends Component {
     state = {
         tours: tourData
     }

     removeTourHandler = id => {
         let newTour = this.state.tours.filter(
             tour => {
                 return tour.id !== id
             }
         )

         this.setState({
             ...this.state,
             tours: newTour
         })
     }

    render() {
        return (

            <>
                {this.state.tours.map(tour =>
                    <Tour
                        key={tour.id}
                        data={tour}
                        onRemove={this.removeTourHandler}
                    />
                    )
                }
            </>

        );
    }
}

export default TourList;
