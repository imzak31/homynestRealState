import React from "react";
import { withRouter } from "react-router-dom";

class HouseMap extends React.Component {
  componentDidMount() {
    const { house } = this.props;
    const houseLatLng = { lat: house.lat, lng: house.lng }
    const mapOptions = {
      center: houseLatLng,
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.marker = new google.maps.Marker({
      position: houseLatLng,
      map: this.map,
      title: house.name
    })
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
        <h1>the map</h1>
      </div>
    )
  }
}


export default withRouter(HouseMap);