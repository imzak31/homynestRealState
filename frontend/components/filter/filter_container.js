import {connect} from 'react-redux';
import { fetchHouses } from '../../actions/house_actions'

import Filter from './filter'

const mSTP = state => {
  return {
    houses: state.entities.houses
  }
}

const mDTP = dispatch => {
  return {
    fetchHouses: () => dispatch(fetchHouses())
  }
}

export default connect(mSTP, mDTP)(Filter)