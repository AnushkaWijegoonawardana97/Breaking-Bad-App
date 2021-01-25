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

			console.log(results.data);
		};

		fetchQuotes();
	}, []);

	return (
		<div>
			<Pageheader pageTitle="Quotes" />

			<BodyLayout>
				<SearchForm searchPlaceholder={"Search Quotes..."} />

				<QuotesList />
			</BodyLayout>

			<PageFooter />
		</div>
	);
}

export default Quotes;
