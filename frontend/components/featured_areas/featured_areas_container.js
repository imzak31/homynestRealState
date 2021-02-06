import {connect} from 'react-redux';
import {searchHouses} from '../../actions/house_actions'

import FeaturedAreas from './featured_areas'

const mDTP = dispatch => {
    return {
        searchHouses: (search) => dispatch(searchHouses(search))
    }
}

export default connect(null,mDTP)(FeaturedAreas)