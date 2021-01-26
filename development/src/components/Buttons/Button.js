import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
	return (
		<a className={props.class} href={props.linkTo} target="_blank">
			{props.children}
		</a>
	);
}

export default Button;
