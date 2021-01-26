import axios from "axios";
import React, { useEffect, useState } from "react";
import EpisodeList from "../../components/EpisodesList/EpisodeList";
import SearchForm from "../../components/SearchForm/SearchForm";
import BodyLayout from "../BodyLayout/BodyLayout";
import PageFooter from "../PageFooter/PageFooter";
import Pageheader from "../Pageheader/Pageheader";

function Episodes() {
	const [episodes, setEpisodes] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchEpisoeds = async () => {
			const results = await axios(
				"https://www.breakingbadapi.com/api/episodes"
			);

			// console.log(results.data);
			setEpisodes(results.data);
			setLoading(false);
		};

		fetchEpisoeds();
	}, []);

	let EpisodeBody = (
		<div className="alert alert-primary w-50 mx-auto d-block" role="alert">
			Episodes Data is Still Loading...
		</div>
	);

	if (!loading) {
		EpisodeBody = <EpisodeList episodes={episodes} />;
	}

	return (
		<div>
			<Pageheader pageTitle="Episodes" />

			<BodyLayout>
				<SearchForm searchPlaceholder={"Search Episodes..."} />

				{EpisodeBody}
			</BodyLayout>

			<PageFooter />
		</div>
	);
}

export default Episodes;
