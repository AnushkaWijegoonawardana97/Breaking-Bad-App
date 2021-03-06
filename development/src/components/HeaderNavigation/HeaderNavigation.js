import React from "react";
import Logo from "../Logo/Logo";

function HeaderNavigation(props) {
	return (
		<div className="d-flex align-itmes-center justify-content-between sectionseperator sectionseperator-bottom">
			<Logo />
			<div
				className="MenuToggelButton d-flex align-items-center justify-content-center"
				onClick={props.onClickHandler}
			>
				<i className="fas fa-bars"></i>
			</div>
		</div>
	);
}

export default HeaderNavigation;
