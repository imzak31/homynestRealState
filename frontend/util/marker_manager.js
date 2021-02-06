class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(houses) {
    const houseMarkers = {}
    Object.values(this.markers).forEach(res => this.removeMarker(res));
    Object.values(houses).forEach(house => {
      houseMarkers[house.id] = this.createMarkerFromHouse(house)
    })
    const markerIds = Object.keys(this.markers)

    this.markers = Object.assign({}, this.markers, houseMarkers)

    markerIds.forEach(id => {
      if (!houses[id]) {
        this.removeMarker(this.markers[id])
      }
    })
  }

  removeMarker(marker) {
    marker.setMap(null);
    delete this.markers[marker.id]
  }

  createMarkerFromHouse(house) {
    const latLng = { lat: house.lat, lng: house.lng };
    var infowindow = new google.maps.InfoWindow({
      content: (`<div id=marker-title>${house.name}</div>`)
    });

    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: house.name,
      id: house.id,
      animation: google.maps.Animation.DROP
    });

    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
      $('#marker-title').parent().parent().parent().siblings().addClass("info-window")
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    });

    return marker
  }
}

export default MarkerManager;