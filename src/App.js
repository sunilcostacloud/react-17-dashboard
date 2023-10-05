import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Creator from "./pages/Creator";
import User from "./pages/User";
import SideMenu from "./components/sidebar/SideMenu";
import Header from "./components/header/Header";


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
                <Admin />
              </Route>
              <Route exact path="/creator">
                <Creator />
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
