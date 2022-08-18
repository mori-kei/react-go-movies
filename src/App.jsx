import React,{Component,Fragment} from "react";
import {HashRouter as Router, Switch,Route,Link} from 'react-router-dom'

export default function App() {
  return (
    <Router>
    <div className="container">
      <div className="row">
        <h1 className="mt-3">Go watch a Movie!</h1>
        <hr className="mb-3" />
      </div>
      <div className="row">
        <div className="col-md-2">
          <ul className="list-group">
            <li className="list-group-item">
           
              <Link to="/">Home</Link>
            </li>
            <li className="list-group-item">
            
              <Link to="/movies">Movies</Link>
            </li>
            <li className="list-group-item">
         
            <Link to="/admin">Manage Catalogue</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

function Home () {
  return(
    <h2>home</h2>
  )

}
function Movies()  {
  return(
    <h2>Movies</h2>
  )
}
function Admin(){
  return(
    <h2>Manage Catalog</h2>
  )
}

