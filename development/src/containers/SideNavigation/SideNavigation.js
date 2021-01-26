import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

function SideNavigation(props) {
	return (
		<React.Fragment>
			<div className="Overlayer" onClick={props.onClickHandler}></div>

			<div className="SideNavigation sectionInnerPadding-sm">
				<div className="NavHeader d-flex align-items-center justify-content-between">
					<Logo />

					<div
						className="MenuToggelButton d-flex align-items-center justify-content-center"
						onClick={props.onClickHandler}
					>
						<i className="fas fa-bars"></i>
					</div>
				</div>

				<div className="NavigationLinks sectionInnerPadding d-flex flex-column">
					<Link
						className="NavigationLink"
						to="/"
						onClick={props.onClickHandler}
					>
						Home
					</Link>
					<Link
						className="NavigationLink"
						to="/characters"
						onClick={props.onClickHandler}
					>
						Cast
					</Link>
					<Link
						className="NavigationLink"
						to="/episodes"
						onClick={props.onClickHandler}
					>
						Episodes
					</Link>
					<Link
						className="NavigationLink"
						to="/quotes"
						onClick={props.onClickHandler}
					>
						Quotes
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
}

export default SideNavigation;
