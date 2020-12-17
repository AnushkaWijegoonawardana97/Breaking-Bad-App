import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png";

function NavigationBar() {
	return (
		<div className="sectionInnerPadding-sm d-flex align-items-center justify-content-between" id="navigationBar">
			<Link to="/">
				<img src={Logo} alt="" className="img-fluid" />
			</Link>

			<div className="openOverlayerMenu">
				<i className="fas fa-bars"></i>
			</div>
		</div>
	);
}

export default NavigationBar;
