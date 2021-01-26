import React from "react";
import Logo from "../Logo/Logo";

function HeaderNavigation() {
	const onClickHandler = () => {
		console.log("Menu Button Clicked");
	};

	return (
		<div className="d-flex align-itmes-center justify-content-between sectionseperator sectionseperator-bottom">
			<Logo />
			<div
				className="MenuToggelButton d-flex align-items-center justify-content-center"
				onClick={onClickHandler}
			>
				<i class="fas fa-bars"></i>
			</div>
		</div>
	);
}

export default HeaderNavigation;
