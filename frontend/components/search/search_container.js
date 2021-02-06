import {connect} from 'react-redux'
import {asArray} from '../../reducers/selectors'

import {
  fetchHouses,
  fetchHouse,
  searchHouses,
} from "../../actions/house_actions";

import Search from './search'

const mSTP = state => {
    return {
      houses: asArray(state.entities),
    };
}

const mDTP = (dispatch) => {
  return {
    fetchHouses: () => dispatch(fetchHouses()),
    fetchHouse: (houseId) => dispatch(fetchHouse(houseId)),
    searchHouses: search => dispatch(searchHouses(search))
  };
};


export default connect(null, mDTP)(Search);