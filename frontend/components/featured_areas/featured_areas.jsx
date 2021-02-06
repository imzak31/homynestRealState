import React from 'react';
import { Redirect, withRouter } from "react-router-dom";
import HouseIndexContainer from "../houses/house_index_container";


class FeaturedAreas extends React.Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     search: ""
        // }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e){
        e.preventDefault();

        let sqmValue = e.target.id.split("_").map(i => i[0].toUpperCase() + i.slice(1)).join(' ');
        this.props.history.push({
          pathname: "/houses",
          state: { sqm: sqmValue },
        });
    }

    render( ) {

    }
}

export default withRouter(FeaturedAreas);