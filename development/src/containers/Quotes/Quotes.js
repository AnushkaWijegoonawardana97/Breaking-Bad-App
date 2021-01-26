import axios from "axios";
import React, { useEffect, useState } from "react";
import QuotesList from "../../components/QuotesList/QuotesList";
import SearchForm from "../../components/SearchForm/SearchForm";
import BodyLayout from "../BodyLayout/BodyLayout";
import PageFooter from "../PageFooter/PageFooter";
import Pageheader from "../Pageheader/Pageheader";

function Quotes(props) {
	const [quotes, setQuotes] = useState();
	const [loading, setloading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const fetchQuotes = async () => {
			const results = await axios(
				`https://www.breakingbadapi.com/api/quotes?author=${searchQuery}`
			);

			// console.log(results.data);
			setQuotes(results.data);
			setloading(false);
		};

		fetchQuotes();
	}, [searchQuery]);

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
			<Pageheader pageTitle="Quotes" onClickHandler={props.onClickHandler} />

			<BodyLayout>
				<SearchForm
					searchPlaceholder={"Search Quotes By Author..."}
					getSearchQuery={(q) => setSearchQuery(q)}
				/>

				{QuotesBody}
			</BodyLayout>

			<PageFooter />
		</div>
	);
}

export default Quotes;
