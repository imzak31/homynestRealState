import { connect } from "react-redux";
import { fetchHouses, searchHouses } from "../../actions/house_actions";
import MapSearch from "./map_search";

const mSTP = state => {
  return {
    houses: Object.values(state.entities.houses)
  }
}

const nDTP = dispatch => {
  return {
    fetchHouses: () => dispatch(fetchHouses()),
    searchHouses: (search) => dispatch(searchHouses(search)),
  }
};

export default connect(mSTP, nDTP)(MapSearch);
