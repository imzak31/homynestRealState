import React from 'react';
import SearchForm from '../search/search_container'
import FeaturedAreas from '../featured_areas/featured_areas_container'


class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
      
        return (
          <div className="home-page">
            <header className="cover">
              <div className="cover-wrapper">
                <div className="cover-content">
                  <h3 className="search-title">
                    Find your home!
                  </h3>
                  <SearchForm />
                </div>
              </div>
            </header>
          </div>
        );
    }
}

export default HomePage