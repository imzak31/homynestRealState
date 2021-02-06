import {connect} from "react-redux";
import HomePage from './home'
import { asArray } from "../../reducers/selectors";
import {
  fetchHouses,
  fetchHouse,
  searchHouses,
} from "../../actions/house_actions";


const mSTP = state => {
    return {
      houses: asArray(state.entities),
    };
}

const mDTP = dispatch => {
    return {
      fetchHouses: () => dispatch(fetchHouses()),
      fetchHouse: HouseId => dispatch(fetchHouse(houseId)),
      searchHouses: search => dispatch(searchHouses(search))
    };
}

export default connect(mSTP,mDTP)(HomePage)