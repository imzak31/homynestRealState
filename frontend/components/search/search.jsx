import React from 'react';
import {withRouter} from 'react-router-dom'

import Autosuggest from "react-autosuggest";


const searches = [
  {
    title: "Sizes",
    searches: [
      {
        name: "50sqm",
      },
      {
        name: "100sqm",
      },
      {
        name: "150sqm",
      },
      {
        name: "200sqm",
      },
      {
        name: "250sqm",
      },
      {
        name: "300sqm",
      },
    ],
  },
  {
    title: "Sorts",
    searches: [
      {
        name: "Houses",
      },
      {
        name: "Apartments",
      },
      {
        name: "Hotels",
      },
      {
        name: "Chalets",
      },
      {
        name: "Motels",
      },
      {
        name: "Shipyards",
      },
      {
        name: "Hangars",
      },
      {
        name: "Depots",
      },
      {
        name: "Rooms",
      },
      {
        name: "Basements",
      },
    ],
  },

];


const SQM = [
  "50sqm",
  "100sqm",
  "150sqm",
  "200sqm",
  "250sqm",
  "300sqm",
];

const SORT = [
  "House",
  "Apartments",
  "Hotels",
  "Chalets",
  "Motels",
  "Shipyards",
  "Hangars",
  "Depots",
  "Rooms",
  "Basements",
];

const escapeRegexCharacters = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


const getSuggestions = (value) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return searches
    .map((section) => {
      return {
        title: section.title,
        searches: section.searches.filter((search) =>
          regex.test(search.name)
        ),
      };
    })
    .filter((section) => section.searches.length > 0);
}

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;


const renderSectionTitle = (section) => {
  return <strong>{section.title}</strong>;
}

const getSectionSuggestions = (section) => {
  return section.searches;
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }



  onChange (event, { newValue }) {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    
    let nextState;
    if (SQM.includes(this.state.value)) {
      nextState = { sqm: this.state.value };
    } else if (CUISINE.includes(this.state.value)) {
      nextState = { cuisine: this.state.value };
    } 
    
    // else {
    //   nextState = { name: this.state.value };
    // }
    
    this.props.history.push({
      pathname: "/houses",
      state: nextState,
    });
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Search Location or Cuisine",
      value,
      onChange: this.onChange,
      className: "search-input"
    };

    return (
      <div>
        <form className="search-form-container">
          <div className="search-field">
            <Autosuggest
              multiSection={true}
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              renderSectionTitle={renderSectionTitle}
              getSectionSuggestions={getSectionSuggestions}
              inputProps={inputProps}
            />
          </div>
          <div>
            <input
              type="submit"
              className="search-submit-button"
              onClick={this.handleSubmit}
              value="Let's Go"
            />
          </div>
        </form>
      </div>
    );
  }
}


export default withRouter(Search);


 