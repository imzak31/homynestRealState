import {connect} from 'react-redux'

import {
  fetchHouses,
  fetchHouse,
  searchHouses,
} from "../../actions/house_actions";
import HouseIndex from './house_index'


const mSTP = state => {
    return {
        currentUser: state.currentUser,
        houses: Object.values(state.entities.houses)
    }
}

const mDTP = dispatch => {
    return {
      fetchHouses: () => dispatch(fetchHouses()),
      fetchHouse: (houseId) => dispatch(fetchHouse(houseId)),
      fetchUserReservations: (userId) => dispatch(fetchUserReservations(userId)),
      searchHouses: search => dispatch(searchHouses(search))

    };
}

export default connect(mSTP,mDTP)(HouseIndex)

