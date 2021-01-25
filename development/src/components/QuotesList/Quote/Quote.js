import React from "react";

function Quote({ quote }) {
	// console.log(quote);
	return (
		<div className="QuoteCard d-flex flex-column align-items-center justify-content-center">
			<div className="QuoteText">{quote.quote}</div>
			<div className="QuoteBy">- {quote.author} -</div>
		</div>
	);
}

export default Quote;
