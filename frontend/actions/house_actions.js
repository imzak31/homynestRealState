import * as ApiUtil from '../util/house_api_util';

export const RECEIVE_HOUSES = "RECEIVE_HOUSES";
export const RECEIVE_HOUSE = "RECEIVE_HOUSE";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS"; 

export const receiveAllHouses = houses => {
    return {
      type: RECEIVE_HOUSES,
      houses,
    };
}

export const receiveHouse = payload => {
    return {
      type: RECEIVE_HOUSE,
      payload
    };
}

export const recieveSearchErrors = errors => {
  return {
    type: RECEIVE_SEARCH_ERRORS,
    errors,
  };
}

export const fetchHouses = () => dispatch => {
    return ApiUtil.fetchHouses().then(
        (houses) => dispatch(receiveAllHouses(houses)))
}

export const fetchHouse = id => dispatch => {
    return ApiUtil.fetchHouse(id).then(
        (payload) => dispatch(receiveHouse(payload)))
}

export const searchHouses = search => dispatch => {
  return ApiUtil.searchHouses(search).then(
    (searchedHouses) =>
    dispatch(receiveAllHouses(searchedHouses)),
    (errors) => dispatch(recieveSearchErrors(errors.responseJSON))
  );
}