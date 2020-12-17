import React from "react";
import NavigationBar from "../../Layouts/NavigationBar";
import HeroBanner from "./HeroBanner";

function Homepage() {
	return (
		<div className="homeHeroBanner d-flex flex-column justify-content-between">
			<NavigationBar />
			<HeroBanner />
		</div>
	);
}

export default Homepage;
