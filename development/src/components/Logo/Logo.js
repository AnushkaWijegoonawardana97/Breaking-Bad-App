import React from "react";
import LogoImage from "../../assets/Logo.png";

function Logo() {
	return (
		<div>
			<img src={LogoImage} alt="Breaking Bad Logo" className="img-fluid" />
		</div>
	);
}

export default Logo;
