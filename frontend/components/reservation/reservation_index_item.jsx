import React from 'react';

import {Link} from 'react-router-dom'


class ReservationIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteReservation = this.deleteReservation.bind(this);

  }

  deleteReservation(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteReservation(id);
    };
  }

  render() {
    if (!(this.props.houses[this.props.reservation.house_id])) return null;
        
    const resTime = (parseInt(this.props.reservation.time) - 12)
    return (
      <div className="reservation-index-item">
        <div className="res-img-container">
          <img
            className="res-img"
            src={
              this.props.houses[this.props.reservation.house_id].photo
            }
          />
        </div>
        <div className="res-rest-info">
          <Link
            to={`/houses/${this.props.reservation.house_id}`}
            className="res-rest-name"
          >
            {this.props.reservation.house.name}
          </Link>
          <div className="res-info">Date: {this.props.reservation.date}</div>
          <div className="res-info">Time: {resTime}:00 pm</div>
          <div className="res-info">Party: {this.props.reservation.party}</div>
          <div className="res-location">
            <i className="fas fa-map-marker-alt"></i>{this.props.reservation.house.address},{" "} {this.props.reservation.house.type}
          </div>
          <button
            className="red-btn"
            type="button"
            onClick={this.deleteReservation(this.props.reservation.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default ReservationIndexItem;