import {connect} from 'react-redux';

import {
  createRating,
  receiveRatingErrors,
  fetchHouseRatings
} from "../../actions/rating_actions";

import {fetchHouse} from '../../actions/house_actions'

import RatingForm from './rating_form';

const mSTP = (state, ownProps) => {
    return {
      currentUser: state.entities.users[state.session.id],
      house: state.entities.houses[ownProps.match.params.id],
      errors: state.errors.rating,
      formType: 'Submit Rating'
    };
}

const mDTP = dispatch => {
    return {
      action: (rating) => dispatch(createRating(rating)),
      createRating: (rating) => dispatch(createRating(rating)),
      clearErrors: () => dispatch(receiveRatingErrors([])),
      fetchHouseRatings: (ratings) => dispatch(fetchHouseRatings(ratings)),
      fetchHouse: (houseId) => dispatch(fetchHouse(houseId)),
    };
}

export default connect(mSTP, mDTP)(RatingForm);