import React from 'react';
import {Link, Route, withRouter} from 'react-router-dom'

import ReservationForm from '../reservation/reservation_form_container'
import RatingIndexContainer from '../rating/rating_index_container'
import RatingForm from '../rating/rating_form_container'
import HouseMap from '../map/house_map'


class HouseShow extends React.Component{
  constructor(props){
    super(props)
    window.scrollTo(0, 0);
    this.scroll = this.scroll.bind(this)
    this.toggleFavorite = this.toggleFavorite.bind(this)
    this.deleteFavorite = this.deleteFavorite.bind(this)
    this.createFavorite = this.createFavorite.bind(this)
    this.getAverageRating = this.getAverageRating.bind(this)
    this.getCommentsSize = this.getCommentsSize.bind(this)
  }

  componentDidMount(){

    this.props.fetchHouse(this.props.match.params.houseId)
    this.props.fetchHouseRatings(this.props.match.params.houseId)
    this.props.requestUserFavorites(this.props.currentUser)
    this.props.fetchUserReservations(this.props.currentUser)
  }

  scroll(el) {
    return () => {
      el.scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
    };
  }


  toggleFavorite() {
    if (!this.props.currentUser) { return null; }
    const house = this.props.house;    
    if (house.userFavorited) {
      return (
        <div
          onClick={this.deleteFavorite(house.id)}
          className="fav-button-text favorited">
          <i className="fas fa-bookmark"></i>
          House saved!
        </div>
      );
    } else {
      return (
        <div
          onClick={this.createFavorite()}
          className="fav-button-text">
          <i className="far fa-bookmark"></i>
          Save this house!
        </div>
      );
    }
  }


  deleteFavorite(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteFavorite(id).then(()=>
        this.props.fetchHouse(this.props.match.params.houseId))
    };
  }

  createFavorite() {
    return (e) => {
      e.preventDefault();
      this.props.createFavorite(this.props.house.id).then(() =>
        this.props.fetchHouse(this.props.match.params.houseId))
    }
  }

  getAverageRating(){
    const house = this.props.house;
    let sum = 0 
    house.score_arr.forEach( (score) => sum+=score)
    let avgRating; 
    if (sum === 0) {
      avgRating = "No Reviews";
    } else {
      avgRating = (Math.round(sum/house.score_arr.length * 10) / 10).toFixed(1)
    }
    return avgRating
  }

  getCommentsSize(){
    const ratings = this.props.house.score_arr.length;
    
    return ratings
  }

  getChairsScoreHouse() {
    const house = this.props.house;
    let sum = 0; 
    house.score_arr.forEach((score) => sum += score)
    let houseAvgRating;
    if (sum === 0) {
      houseAvgRating = 0 
    }  else {
      houseAvgRating = (Math.floor(sum / house.score_arr.length * 10) / 10)
    }

    const houseRatingArray = [] 

    for (let i = 0; i < houseAvgRating; i++) {
      houseRatingArray.push(
        <i key={i} className="fas fa-chair fa-lg chair-filled"></i>
      )
    }

    return houseRatingArray
  }


  render (){
    // this is way too long 
    // turn favorites into its own component 
    if (!this.props.house) return null
    
    const house = this.props.house;
    const bImg = {
      backgroundImage: `url(${house.bphoto})`,
    };
    const moneyCheck = house.price > 30 ? "$300 to $500 " : "$300 and under "

    
    return (
      <div className="single-house-show">
        <ol className="breadcrumb">
          <li className="crumb">
            <a href="/" className="crumb-link">Home</a>
          </li>
          <li className="crumb">
            <a href="/#/houses" className="crumb-link">All Houses</a>
          </li>
          <li className="crumb">
            <div onClick={() => this.props.history.push({ pathname: "/houses", state: { sqm: house.sqm}})} className="crumb-link">{house.sqm}</div>
          </li>
          <li className="crumb">
            <div onClick={() => this.props.history.push({ pathname: "/houses", state: { sort: house.sort }})} className="crumb-link">{house.sort}</div>
          </li>
        </ol >
        <div className="house-show-header">
          <div className="bimg" id="house-bimg" style={bImg}></div>
          <div className="fav-button">
            {this.toggleFavorite()}
         </div>
        </div>
        <div className="house-show-content">
          <aside className="house-right-side">
            <div className="side-content">
              <div className ="house-reservation">
                <ReservationForm reservations={this.props.reservations} currentHouse={this.props.house}/>
              </div>
              <div className="google-api">
                <div className="house-location">
                  <HouseMap house={house}/>
                </div>
                <div className="home-full-address">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{house.adress} {house.sqm}, {house.state} {house.zip}</span>
                </div>
              </div>

              <div className="home-info">
     

                <div className="house-info-box">
                  <div className="box-head"><i className="fas fa-phone-alt"></i> Phone Number</div>
                  <div className="box-description">{house.phone_number}</div>
                </div>

                <div className="house-info-box">
                  <div className="box-head"> <i className="far fa-clock"></i> Hours of allowed Visits </div>
                  <div className="box-description">Open: {`${parseInt(house.open_time.slice(11,13)) - 12}:00 pm`}</div>
                  <div className="box-description">Close: {`${parseInt(house.close_time.slice(11, 13)) - 12}:00 pm`}</div>

                </div>


                <div className="house-info-box">
                  <div className="box-head"><i className="fas fa-utensils"></i>sort</div>
                  <div className="box-description"> {house.sort}</div>
                </div>
              </div>
            </div>
          </aside>
          <main className="house-main-content">
            <div id="overview-section">
              <div className="overview-head">
                <nav className="house-nav">
                  <div className="page-nav-links" onClick={this.scroll(this.aboutSection)}> About </div>
                  <div className="page-nav-links" onClick={this.scroll(this.ratingSection)}> Reviews </div>
                </nav>
                <div className="overview-title">
                  <h1>{house.name}</h1>
                  <span className="house-chair"></span>
                </div>
                <div className ="overview-detail">
                    <div className="overview-rr">
                      <div className="house-ratings"> Rating: {this.getAverageRating()} {this.getChairsScoreHouse()} </div>
                    </div>
                    <div className="overview-price">
                      <div><i className="far fa-money-bill-alt"></i> {moneyCheck} </div>
                    </div>
                      <div className="overview-sort">
                    <div><i className="fas fa-utensils"></i> {house.sort}</div>
                  </div>
                </div>
              </div>
              <div className="overview-description" ref={el => { this.aboutSection = el; }}>
                {house.description}
              </div>
            </div>

            <div id="ratings" ref={el => { this.ratingSection = el; }}>
              {/* <h3 className="ratings-title">What {this.props.house.score_arr.length} people are saying:</h3> */}
              <div className="ratings-header">
                <h3 className="ratings-title">What {this.getCommentsSize()} people are saying:</h3>
                <div>
                  {this.props.currentUser ? (
                    <Link to={`/houses/${house.id}/ratings/new`}>
                      <div className="review-button">
                        Leave a Review
                      </div>
                    </Link>
                  ) : (
                    <div className="review-button" id="disabled-btn">
                        Login To Review
                      </div>
                  )
                  }
                </div>
                
              </div>
              <Route path={'/houses/:houseId'} component={RatingIndexContainer} />
              <div className="house-reviews">
              {/* <Route path={'/houses/:houseId'} component={RatingForm}  /> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(HouseShow);

