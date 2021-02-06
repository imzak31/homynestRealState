import {connect} from 'react-redux';

import {
  createReservation,
  receiveReservationErrors,
} from "../../actions/reservation_actions";

import ReservationForm from './reservation_form'

const mSTP = (state, ownProps)  => {
  return {
    currentUser: state.entities.users[state.session.id],
    houses: state.entities.houses,
    errors: state.errors.reservation,
    reservations: state.entities.reservations,
    house: state.entities.houses[ownProps.currentHouse.id]
  };
}

const mDTP = dispatch => {
  return {
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    clearErrors: () => dispatch(receiveReservationErrors([])),
  };
}

export default connect(mSTP, mDTP)(ReservationForm);