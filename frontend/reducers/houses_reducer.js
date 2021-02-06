import {
  RECEIVE_HOUSES,
  RECEIVE_HOUSE,
} from "../actions/house_actions";


const housesReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
      case RECEIVE_HOUSES:
        return action.houses;
      case RECEIVE_HOUSE:
        nextState[action.payload.house.id] = action.payload.house;
        return nextState;
      default:
        return state;
    }
}

export default housesReducer;