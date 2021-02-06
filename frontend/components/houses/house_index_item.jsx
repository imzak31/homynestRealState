import React from 'react';
import {Link, NavLink} from 'react-router-dom'
class IndexItem extends React.Component{
    constructor(props){
        super(props)
    }


  getAverageRating() {
    const house = this.props.house;
    let sum = 0
    house.score_arr.forEach((score) => sum += score)
    let avgRating;
    if (sum === 0) {
      avgRating = "No Reviews";
    } else {
      avgRating = (Math.round(sum / house.score_arr.length * 10) / 10).toFixed(1)
    }
    return avgRating
  }

  getChairsScoreHouse() {
    const house = this.props.house;
    let sum = 0;
    house.score_arr.forEach((score) => sum += score)
    let houseAvgRating;
    if (sum === 0) {
      houseAvgRating = 0
    } else {
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
    const house = this.props.house
    const pImg = {
        backgroundImage: `url(${house.photo})`
    }
    
      return (
        <div className="house-item">
          <Link to={`/houses/${house.id}`}>
            <li className="house-lists">
              <div className="house-content">
                <div className="img" id="house-img" style={pImg}></div>
                <div className="house-info">
                  <div className="house-name">{house.name} </div>
                  <div className="house-review">
                    <span>
                      Rating: {this.getAverageRating()}{" "}
                      {this.getChairsScoreHouse()}
                    </span>
                  </div>
                  <div className="house-row">
                    {/* <span>{moneyCheck}</span> */}
                    <span>{house.price}</span>
                    <span>
                      <i className="fas fa-utensils"></i> {house.sort}
                    </span>
                    <span>
                      <i className="fas fa-map-marker-alt location-idx"></i>{" "}
                      {house.sqm}
                    </span>
                  </div>
                  <div className="house-contact-container">
                    <div className="house-contact">
                      <i className="fas fa-phone-alt"></i> {house.phone_number}
                    </div>
                  </div>
                  <br />
                  <div className="house-links">
                    <div
                      to={`/houses/${house.id}`}
                      className="house-item-btn"
                    >
                      Visit Now!
                    </div>
                    <div
                      to={`/housess/${house.id}`}
                      className="house-item-btn"
                    >
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        </div>
      );
    }
}

export default IndexItem