import {connect} from 'react-redux';
import { openModal } from "../../actions/modal_actions";

import {
    fetchHouseRatings, deleteRating
} from '../../actions/rating_actions';

import RatingIndex from './rating_index'

const mSTP = (state, ownProps) => {
  
    return {
      ratings: Object.values(state.entities.ratings),
      house: state.entities.houses[ownProps.match.params.houseId],
      currentUser: state.entities.users[state.session.id],
    };
}

const mDTP = dispatch => {
    return {
      openModal: modal => dispatch(openModal(modal)),
      fetchHouseRatings: (ratings) => dispatch(fetchHouseRatings(ratings)),
      deleteRating: ratingId => dispatch(deleteRating(ratingId))
    };
}

export default connect(mSTP,mDTP)(RatingIndex)