import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import BodyLayout from "../BodyLayout/BodyLayout";
import PageFooter from "../PageFooter/PageFooter";
import Pageheader from "../Pageheader/Pageheader";

function Episodes() {
	return (
		<div>
			<Pageheader pageTitle="Episodes" />

			<BodyLayout>
				<SearchForm searchPlaceholder={"Search Episodes..."} />
			</BodyLayout>

			<PageFooter />
		</div>
	);
}

export default Episodes;
