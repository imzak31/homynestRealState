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

const SORT = [
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
      sorts: props.location.state ? [props.location.state.sort] : [],
      locations:
        props.location.state && props.location.state.sqm
          ? [props.location.state.sqm]
          : [],
      // name: props.location.state ? [props.location.state.name] : [],
    };

    this.handleChangeSqm = this.handleChangeSqm.bind(this);
    this.filterBuilderSqm = this.filterBuilderSqm.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.filterBuilderSort = this.filterBuilderSort.bind(this);
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
      Sorts: this.state.Sort,
      // name: this.state.name,
    });
  }

  filterBuilderSqm() {
    let sqmFilter = SQM.map((c, i) => (
      <div className="filter-item-div" key={i}>
        <input
          className="filter-checkbox"
          Sort="checkbox"
          value={c}
          onChange={this.handleChangeSqm}
          checked={this.state.locations.includes(c) ? "checked" : ""}
        />
        <label className="filter-label">{c}</label>
      </div>
    ));
    return sqmFilter;
  }

  filterBuilderSort() {
    let SortFilter = Sort.map((c, i) => (
      <div className="filter-item-div" key={i}>
        <input
          className="filter-checkbox"
          Sort="checkbox"
          value={c}
          onChange={this.handleChangeSort}
          checked={this.state.Sorts.includes(c) ? "checked" : ""}
        />
        <label className="filter-label">{c}</label>
      </div>
    ));
    return SortFilter;
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

  handleChangeSort(e) {
    e.preventDefault();
    let Sort = e.target.value;

    if (this.state.Sorts.indexOf(Sort) === -1) {
      this.setState(
        {
          Sorts: [...this.state.Sorts, Sort],
        },
        () => this.sendSearch()
      );
    } else {
      this.setState(
        { Sorts: this.state.Sorts.filter((p) => p != Sort) },
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
              <i className="fas fa-utensils"></i> Sort
            </h5>
            {this.filterBuilderSort()}
          </div>
        </section>
      </div>
    );
  }
}


export default withRouter(Filter)