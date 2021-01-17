import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Characters from "./containers/Characters/Characters";
import Episodes from "./containers/Episodes/Episodes";
import Homepage from "./containers/Homepage/Homepage";
import Quotes from "./containers/Quotes/Quotes";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/characters" component={Characters} />
				<Route exact path="/episodes" component={Episodes} />
				<Route exact path="/quotes" component={Quotes} />
			</Switch>
		</Router>
	);
}

export default App;
