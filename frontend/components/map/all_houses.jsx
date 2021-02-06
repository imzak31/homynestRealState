import React from "react";
import HouseIndexItems from "../houses/house_index_item";

class AllHouse extends React.Component {

  render() {
    const houses = this.props.houses;
    const display = houses.length === 0 ? 
      <div className="notfound emojis-search-map">
        <h3>No Houses found...</h3>
      </div> : houses.map(house => (
        <HouseIndexItems key={house.id} house={house} />
      ));
    return (
      <div className="search-map-list">
        {display}
      </div>
    )
  }
}

export default AllHouse;