import React, { Fragment, useEffect, useState } from "react";
import CharactersList from "../../components/CharactersList/CharactersList";
import SearchForm from "../../components/SearchForm/SearchForm";
import BodyLayout from "../BodyLayout/BodyLayout";
import PageFooter from "../PageFooter/PageFooter";
import Pageheader from "../Pageheader/Pageheader";
import axios from "axios";

function Characters() {
	const [characters, setCharacters] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCharacters = async () => {
			const results = await axios(
				"https://www.breakingbadapi.com/api/characters"
			);

			console.log(results.data);
			setCharacters(results.data);
			setLoading(false);
		};

		fetchCharacters();
	}, []);

	let CharaterBody = (
		<div className="alert alert-primary w-50 mx-auto" role="alert">
			Charater Data is Still Loading...
		</div>
	);

	if (!loading) {
		CharaterBody = (
			<Fragment>
				<SearchForm searchPlaceholder={"Search Cast & Characters..."} />

				<CharactersList characters={characters} />
			</Fragment>
		);
	}

	return (
		<div>
			<Pageheader pageTitle="CAST & CHARACTERS" />

			<BodyLayout>{CharaterBody}</BodyLayout>

			<PageFooter />
		</div>
	);
}

export default Characters;
