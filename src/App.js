import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import User from "./pages/User";
import SideMenu from "./components/sidebar/SideMenu";
import Header from "./components/header/Header";
import Manager from "./pages/Manager";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div style={{ display: "flex" }} >
          <div>
            <SideMenu />
          </div>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/admin">
                <Admin />
              </Route>
              <Route exact path="/manager">
                <Manager />
              </Route>
              <Route exact path="/user">
                <User />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
