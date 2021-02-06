import React from "react";
import {Route, Switch} from 'react-router-dom';


import UserContainer from './user/user_container'
import HouseShowContainer from './houses/house_show_container'
import HomeContainer from './home/home_container'
import HouseIndexContainer from "./houses/house_index_container"
import MapSearchContainer from './map/map_search_container'
import NewRatingContainer from './rating/rating_form_container'
import EditRatingContainer from './rating/edit_rating_container'
import Modal from "./modal/modal";
import NavBar from './nav_bar/nav_bar_container'

import {AuthRoute, ProtectedRoute} from '../util/route_util'

const App = () => (
  <div>
    <Modal />
    <NavBar />
    <Switch>
      <Route exact path="/Houses" component={HouseIndexContainer} />
      <Route exact path="/Houses/:HouseId" component={HouseShowContainer} />
      <Route exact path="/maps" component={MapSearchContainer}/>
      <ProtectedRoute exact path="/users/:id" component={UserContainer} />
      <ProtectedRoute exact path="/houses/:id/ratings/new" component={NewRatingContainer} />
      <ProtectedRoute exact path="/houses/:id/ratings/:ratingId/edit" component={EditRatingContainer} />
      <Route exact path="/" component={HomeContainer} />
    </Switch>

  </div>
);

export default App;

     