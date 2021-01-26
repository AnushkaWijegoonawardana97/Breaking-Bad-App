import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Characters from "./containers/Characters/Characters";
import Episodes from "./containers/Episodes/Episodes";
import Homepage from "./containers/Homepage/Homepage";
import Quotes from "./containers/Quotes/Quotes";
import SideNavigation from "./containers/SideNavigation/SideNavigation";

function App(props) {
	const [toggel, setToggel] = useState(false);

	const onClickHandler = () => {
		setToggel(!toggel);
	};

	return (
		<Router>
			{toggel ? <SideNavigation onClickHandler={onClickHandler} /> : null}
			<Switch>
				<Route
					exact
					path="/"
					render={(props) => (
						<Homepage onClickHandler={onClickHandler} {...props} />
					)}
				/>
				<Route
					exact
					path="/characters"
					render={(props) => (
						<Characters onClickHandler={onClickHandler} {...props} />
					)}
				/>
				<Route
					exact
					path="/episodes"
					render={(props) => (
						<Episodes onClickHandler={onClickHandler} {...props} />
					)}
				/>
				<Route
					exact
					path="/quotes"
					render={(props) => (
						<Quotes onClickHandler={onClickHandler} {...props} />
					)}
				/>
			</Switch>
		</Router>
	);
}

export default App;
