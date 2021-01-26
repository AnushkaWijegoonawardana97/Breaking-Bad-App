import React, { useEffect, useState } from "react";
import CharactersList from "../../components/CharactersList/CharactersList";
import SearchForm from "../../components/SearchForm/SearchForm";
import BodyLayout from "../BodyLayout/BodyLayout";
import PageFooter from "../PageFooter/PageFooter";
import Pageheader from "../Pageheader/Pageheader";
import axios from "axios";

function Characters(props) {
	const [characters, setCharacters] = useState();
	const [loading, setLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const fetchCharacters = async () => {
			const results = await axios(
				`https://www.breakingbadapi.com/api/characters?name=${searchQuery}`
			);

			// console.log(results.data.length);
			setCharacters(results.data);
			setLoading(false);
		};

		fetchCharacters();
	}, [searchQuery]);

	let CharaterBody = (
		<div className="alert alert-primary w-50 mx-auto d-block" role="alert">
			Charater Data is Still Loading...
		</div>
	);

	if (!loading) {
		CharaterBody = <CharactersList characters={characters} />;
	}

	return (
		<div>
			<Pageheader
				pageTitle="CAST & CHARACTERS"
				onClickHandler={props.onClickHandler}
			/>

			<BodyLayout>
				<SearchForm
					searchPlaceholder={"Search Cast & Characters..."}
					getSearchQuery={(q) => setSearchQuery(q)}
				/>

				{CharaterBody}
			</BodyLayout>

			<PageFooter />
		</div>
	);
}

export default Characters;
