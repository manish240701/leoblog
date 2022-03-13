import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Home from "./Home.js";
import Add from "./Add.js";
import Edit from "./Edit.js";
import View from "./View.js";
import PageNotFound from "./PageNotFound.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/view/:id" component={View} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
