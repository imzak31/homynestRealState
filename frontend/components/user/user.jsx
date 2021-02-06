import React from "react";
import { Link, Switch, Route, withRouter} from "react-router-dom"

import ReservationIndex from '../reservation/reservation_index_container'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.favoriteHouses = this.favoriteHouses.bind(this)
    this.deleteFavorite = this.deleteFavorite.bind(this)
    this.scroll = this.scroll.bind(this)
  }

  componentDidMount() {
 
    this.props.fetchHouses()
    // this.props.fetchUser(this.props.currentUser.id)
    this.props.fetchUserReservations(this.props.currentUser.id)
    this.props.requestUserFavorites(this.props.currentUser.id)
  }

  deleteFavorite(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteFavorite(id).then(()=> 
        window.location.reload()
      )
    };
  }

  scroll(el) {
    return () => {
      el.scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
    };
  }

  favoriteHouses() {
    if (Object.keys(this.props.favorites).length === 0) {
      return (
        <div>
          <p>No Favorites</p>
        </div>
      )
    } else {
      return (
        <div>
          {Object.values(this.props.favorites).map((favorite, i) => {
            return (
              <section key={`favorite-${i}`} className="favorite-list">
                <div className="house-detail-container">
                  <div className="house-icon-container">
                    <img className="house-icon" src={favorite.house.photo}></img>
                  </div>
                  <div className="favorite-info">
                    <Link to={`/houses/${favorite.house.id}`} className="house-name">
                      {favorite.house.name} 
                    </Link>
                    <div className="favorite-types">
                      {favorite.house.sort} | {favorite.house.sqm}
                    </div>
                    <br/>
                    <div className="remove-fav" onClick={this.deleteFavorite(favorite.house.id)}>
                      <i className="fas fa-bookmark"></i> Remove from saved houses
                    </div>
                  </div>
                  <Link to={`/houses/${favorite.house.id}`} className="green-btn">
                    Reserve Now
                    </Link>
                </div>
              </section>
            )
          }
          )}
        </div>
      )
    }
  }

  render() {
    const {currentUser} = this.props
    return (
      <div className="page-container">

        <div className="page-header">
          <div className="page-header-content">
            <h1 className="full-name">{`${currentUser.first_name} ${currentUser.last_name}`}</h1>
          </div>
        </div>

        <div className="content-group">
          <nav className="page-nav" >
            <div className="page-nav-links" onClick={this.scroll(this.reservationSection)}> Reservations </div>
            <div className="page-nav-links" onClick={this.scroll(this.favoriteSection)}> Saved Houses </div>
          </nav>
        </div>

        <div className="page-main-content">
          

          <div className="content-reservations">
            <div className="content-header" ref={el => this.reservationSection = el}>
              <h3>Reservations</h3>
            </div>
            <div className="content-feed">
              <ReservationIndex houses={this.props.houses}
                 reservations={this.props.reservations} 
                />
            </div>
          </div>

          <div className="content-favorites">
            <div className="content-header" ref={el => this.favoriteSection = el}>
              <h3>Saved houses</h3>
            </div>
            <div className="content-feed">
                {this.favoriteHouses()}
                {/* {UserFavorites} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(UserProfile);