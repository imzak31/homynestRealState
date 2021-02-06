import {connect} from "react-redux"
import  {editRating} from "../../actions/rating_actions"
import {fetchHouse} from '../../actions/house_actions'
import {fetchRating, receiveRatingErrors} from '../../actions/rating_actions'


import EditRatingForm from "./edit_rating"

const mSTP = (state, ownProps) => {
    return {
      rating: state.entities.ratings[ownProps.match.params.ratingId], 
      currentUser: state.entities.users[state.session.id],
      house: state.entities.houses[ownProps.match.params.houseId],
      formType: "Edit Rating",
      house: state.entities.houses[ownProps.match.params.id],
    };
}

const mDTP = dispatch => {
  return {
    action: rating => dispatch(editRating(rating)),
    fetchHouse: houseId => dispatch(fetchHouse(houseId)),
    fetchRating: ratingId => dispatch(fetchRating(ratingId)),
    clearErrors: () => dispatch(receiveRatingErrors([])),

  }
}

export default connect(mSTP, mDTP)(EditRatingForm)