import About from "./components/About";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
