export const UPDATE_FILTER = "UPDATE_FILTER"

const updateFilter = (houses) => {
  return {
    type: UPDATE_FILTER,
    houses
  }
}

export default updateFilter; 
