import React from "react";
import CharactersList from "../../components/CharactersList/CharactersList";
import SearchForm from "../../components/SearchForm/SearchForm";
import BodyLayout from "../BodyLayout/BodyLayout";
import PageFooter from "../PageFooter/PageFooter";
import Pageheader from "../Pageheader/Pageheader";
import axios from "axiox";

function Characters() {
	return (
		<div>
			<Pageheader pageTitle="CAST & CHARACTERS" />

			<BodyLayout>
				<SearchForm searchPlaceholder={"Search Cast & Characters..."} />

				<CharactersList />
			</BodyLayout>

			<PageFooter />
		</div>
	);
}

export default Characters;
