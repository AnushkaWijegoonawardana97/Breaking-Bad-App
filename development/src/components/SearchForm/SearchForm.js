import React, { useState } from "react";

function SearchForm(props) {
	const [searchText, setSearchText] = useState();

	const onChangeHandler = (q) => {
		setSearchText(q);
		props.getSearchQuery(q);
	};

	return (
		<form className="SearchForm w-75 mx-auto mb-4">
			<div className="form-group">
				<input
					type="text"
					name="searchText"
					className="form-control"
					value={searchText}
					onChange={(e) => onChangeHandler(e.target.value)}
					placeholder={props.searchPlaceholder}
				/>
			</div>
		</form>
	);
}

export default SearchForm;
