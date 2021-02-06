import React from 'react';
import {withRouter} from 'react-router-dom';
import {wrapGrid} from 'animate-css-grid';

const SQM = [
  "50sqm",
  "100sqm",
  "150sqm",
  "200sqm",
  "250sqm",
  "300sqm"
]

const TYPE = [
  "Houses",
  "Apartments",
  "Hotels",
  "Chalets", 
  "Motels",
  "Shipyards",
  "Hangars",
  "Depots",
  "Rooms",
  "Basements"
]

const PRICE = [
  "$$",
  "$$$",
  "$$$$",
]

class Filter extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { searchFilter: props.history.location.state ? props.history.location.state.search : [], };
    this.state = {
      price: [],
      types: props.location.state ? [props.location.state.type] : [],
      locations:
        props.location.state && props.location.state.sqm
          ? [props.location.state.sqm]
          : [],
      // name: props.location.state ? [props.location.state.name] : [],
    };

    this.handleChangeSqm = this.handleChangeSqm.bind(this);
    this.filterBuilderSqm = this.filterBuilderSqm.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.filterBuilderType = this.filterBuilderType.bind(this);
    this.handleClickPrice = this.handleClickPrice.bind(this);
    this.filterBuilderPrice = this.filterBuilderPrice.bind(this);
  }

  componentDidMount() {
    const grid = document.querySelector(".house-items");
    wrapGrid(grid);
    this.sendSearch();
  }

  sendSearch() {
    this.props.searchHouses({
      price: this.state.price,
      sqm: this.state.locations,
      types: this.state.type,
      // name: this.state.name,
    });
  }

  filterBuilderSqm() {
    let sqmFilter = SQM.map((c, i) => (
      <div className="filter-item-div" key={i}>
        <input
          className="filter-checkbox"
          type="checkbox"
          value={c}
          onChange={this.handleChangeSqm}
          checked={this.state.locations.includes(c) ? "checked" : ""}
        />
        <label className="filter-label">{c}</label>
      </div>
    ));
    return sqmFilter;
  }

  filterBuilderType() {
    let typeFilter = TYPE.map((c, i) => (
      <div className="filter-item-div" key={i}>
        <input
          className="filter-checkbox"
          type="checkbox"
          value={c}
          onChange={this.handleChangeType}
          checked={this.state.types.includes(c) ? "checked" : ""}
        />
        <label className="filter-label">{c}</label>
      </div>
    ));
    return typeFilter;
  }

  filterBuilderPrice() {
    return (
      <div>
        <ul className="price-filter-items">
          <li
            className="price-choice"
            value="$$"
            onClick={this.handleClickPrice}
          >
            $$ <span className="tooltiptext">{"$300 and Under"}</span>
          </li>
          <li
            className="price-choice"
            value="$$$"
            onClick={this.handleClickPrice}
          >
            $$$ <span className="tooltiptext">{"$310 and $500"}</span>
          </li>
          <li
            className="price-choice"
            value="$$$$"
            onClick={this.handleClickPrice}
          >
            $$$$ <span className="tooltiptext">{"$500 and over"}</span>
          </li>
        </ul>
      </div>
    );
  }

  handleClickPrice(e) {
    e.preventDefault();
    let price = e.target.getAttribute("value");
    if (this.state.price.indexOf(price) === -1) {
      e.target.classList.add("price-selected");
      this.setState(
        {
          price: [...this.state.price, price],
        },
        () => this.sendSearch()
      );
    } else {
      e.target.classList.remove("price-selected");
      this.setState({ price: this.state.price.filter((p) => p != price) }, () =>
        this.sendSearch()
      );
    }
  }

  handleChangeType(e) {
    e.preventDefault();
    let type = e.target.value;

    if (this.state.types.indexOf(type) === -1) {
      this.setState(
        {
          types: [...this.state.types, type],
        },
        () => this.sendSearch()
      );
    } else {
      this.setState(
        { types: this.state.types.filter((p) => p != type) },
        () => this.sendSearch()
      );
    }
  }

  handleChangeSqm(e) {
    e.preventDefault;
    let sqm = e.target.value;

    if (this.state.locations.indexOf(sqm) === -1) {
      this.setState(
        {
          locations: [...this.state.locations, sqm],
        },
        () => this.sendSearch()
      );
    } else {
      this.setState(
        { locations: this.state.locations.filter((p) => p != sqm) },
        () => this.sendSearch()
      );
    }
  }

  render() {
    return (
      <div className="filter-container">
        <section className="filter-section">
          <div className="filter-option">
            <h5>
              <i className="far fa-money-bill-alt"></i> Price
            </h5>
            {this.filterBuilderPrice()}
          </div>

          <div className="filter-option">
            <h5>
              <i className="fas fa-map-marker-alt"></i> Sqm
            </h5>
            {this.filterBuilderSqm()}
          </div>

          <div className="filter-option">
            <h5>
              <i className="fas fa-utensils"></i> Type
            </h5>
            {this.filterBuilderType()}
          </div>
        </section>
      </div>
    );
  }
}


export default withRouter(Filter)