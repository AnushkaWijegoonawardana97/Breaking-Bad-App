import React from "react";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import PageHeadline from "../../components/PageHeadline/PageHeadline";

function Pageheader(props) {
	return (
		<div className="Pageheader sectionInnerPadding">
			<HeaderNavigation />
			<PageHeadline>{props.pageTitle}</PageHeadline>
		</div>
	);
}

export default Pageheader;
