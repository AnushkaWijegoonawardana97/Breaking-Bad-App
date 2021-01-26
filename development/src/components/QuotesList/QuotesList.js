import React from "react";
import Quote from "./Quote/Quote";

function QuotesList({ quotes }) {
	// console.log(quotes);
	return (
		<div className="sectionInnerPadding sectionInnerPadding-topOnly QuotesList">
			{quotes.map((quote) => {
				return <Quote key={quote.quote_id} quote={quote} />;
			})}
		</div>
	);
}

export default QuotesList;
