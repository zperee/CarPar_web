import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.scss";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import {ICity} from "./shared/schemas/Datamodels";
import {getCities} from "./services/city-service";
import CityOverview from "./pages/CityOverview";

function App() {
    const [cities, setCities] = useState<ICity[]>();
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        async function fetchCities() {
            getCities()
                .then((res: ICity[]) => setCities(res))
                .catch((ex: string) => console.warn("Could not load load Cities: " + ex))
                .finally(() => setLoading(false))
        }
        fetchCities();
    }, []);

  return (
    <div className="App">
        <Router>
            <Navigation cities={cities}/>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
              <Route exact path="/about" component={About}/>
              <Route exact path="/map" component={About}/>
              <Route exact path="/city/:cityId" component={CityOverview}/>
              <Route path="/" component={() => <Home cities={cities} />}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
