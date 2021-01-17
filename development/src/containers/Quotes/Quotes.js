import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import BodyLayout from "../BodyLayout/BodyLayout";
import PageFooter from "../PageFooter/PageFooter";
import Pageheader from "../Pageheader/Pageheader";

function Quotes() {
	return (
		<div>
			<Pageheader pageTitle="Quotes" />

			<BodyLayout>
				<SearchForm searchPlaceholder={"Search Quotes..."} />
			</BodyLayout>

			<PageFooter />
		</div>
	);
}

export default Quotes;
