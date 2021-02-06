import {connect} from 'react-redux';
import { fetchHouse } from '../../actions/house_actions';
import { deleteRating, fetchHouseRatings, } from "../../actions/rating_actions";
import { createFavorite, deleteFavorite, requestUserFavorites } from "../../actions/favorite_actions"
import { fetchUserReservations } from "../../actions/reservation_actions"
import HouseShow from './house_show'


const mSTP = (state, ownProps) => {
    return {
      favorites: Object.values(state.entities.favorites),
     
      house: state.entities.houses[ownProps.match.params.houseId],
      currentUser: state.session.id,
      reservations: state.entities.reservations
    }
}

const mDTP = dispatch => {
    return {
      fetchHouses: () => dispatch(fetchHouses()),
      fetchHouse: (houseId) => dispatch(fetchHouse(houseId)),
      deleteRating: (ratingId) => dispatch(deleteRating(ratingId)),
      fetchHouseRatings: (houseId) => dispatch(fetchHouseRatings(houseId)),
      createFavorite: favorite => dispatch(createFavorite(favorite)),
      deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId)),
      requestUserFavorites: userId => dispatch(requestUserFavorites(userId)),
      fetchUserReservations: (userId) => dispatch(fetchUserReservations(userId)),

    };
}

export default connect(mSTP,mDTP)(HouseShow)