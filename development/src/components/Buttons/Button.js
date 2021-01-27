import React from "react";

function Button(props) {
	return (
		<a className={props.class} href={props.linkTo} target="_blank">
			{props.children}
		</a>
	);
}

export default Button;
