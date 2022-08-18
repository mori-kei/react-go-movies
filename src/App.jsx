import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Movies } from "./Components/Movies";
import { Home } from "./Components/Home";
import { Admin } from "./Components/Admin";
import { Categories } from "./Components/Categories";
import { OneMovie } from "./Components/OneMovie";
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
                <Link to="/by-category">Categories</Link>
              </li>
              <li className="list-group-item">
                <Link to="/admin">Manage Catalogue</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-10">
            <Switch>
              <Route path="/movies/:id" component={OneMovie} />
            
              <Route path="/movies">
                <Movies />
              </Route>
              <Route exact path ="/by-category">
                <CategoryPage />
              </Route>
              <Route exact path ="/by-category/drama"
              render={(props) => <Categories {...props} title={`Drama`}/>}
              ></Route>
              <Route exact path ="/by-category/comedy"
              render={(props) => <Categories {...props} title={`Comedy`}/>}
              ></Route>
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

function Movie() {
  let { id } = useParams();
  return (
    <>
      <h2>Movie id {id}</h2>
    </>
  );
}
function CategoryPage () {
  let {path,url} = useRouteMatch();

  return(
    <div className="">
      <h2>Categories</h2>
      <ul>
        <li><Link to={`${url}/comedy`}>Comedy</Link></li>
        <li><Link to={`${url}/Drama`}>Drama</Link></li>
      </ul>
    </div>
  )
}