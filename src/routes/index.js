import React from 'react'

import Home from '../pages/Home'
import MovieDetail from '../pages/MovieDetail'

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
// import Header from '../pages/Header/Header'

export default function AppRoute() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path="/search/:title" component={Home} />
          <Route exact path="/detail/:id" component={MovieDetail} />
          <Route exact path="/" component={Home} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </>
  )
}
