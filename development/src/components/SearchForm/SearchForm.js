import React from "react";

function SearchForm(props) {
	return (
		<form className="SearchForm w-75 mx-auto mb-3">
			<div className="form-group">
				<input
					type="text"
					name="searchText"
					className="form-control"
					placeholder={props.searchPlaceholder}
				/>
			</div>
		</form>
	);
}

export default SearchForm;
