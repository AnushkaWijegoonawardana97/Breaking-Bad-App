import axios from "axios";
import React, { useEffect, useState } from "react";
import QuotesList from "../../components/QuotesList/QuotesList";
import SearchForm from "../../components/SearchForm/SearchForm";
import BodyLayout from "../BodyLayout/BodyLayout";
import PageFooter from "../PageFooter/PageFooter";
import Pageheader from "../Pageheader/Pageheader";

function Quotes() {
	const [quotes, setQuotes] = useState();
	const [loading, setloading] = useState(true);

	useEffect(() => {
		const fetchQuotes = async () => {
			const results = await axios("https://www.breakingbadapi.com/api/quotes");

			// console.log(results.data);
			setQuotes(results.data);
			setloading(false);
		};

		fetchQuotes();
	}, []);

	let QuotesBody = (
		<div className="alert alert-primary w-50 mx-auto d-block" role="alert">
			Quotes Data is Still Loading...
		</div>
	);

	if (!loading) {
		QuotesBody = <QuotesList quotes={quotes} />;
	}

	return (
		<div>
			<Pageheader pageTitle="Quotes" />

			<BodyLayout>
				<SearchForm searchPlaceholder={"Search Quotes..."} />

				{QuotesBody}
			</BodyLayout>

			<PageFooter />
		</div>
	);
}

export default Quotes;
