import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/Logo.png";

function Logo() {
	return (
		<Link to="/">
			<img src={LogoImage} alt="Breaking Bad Logo" className="img-fluid" />
		</Link>
	);
}

export default Logo;
