import React from "react";
import Episode from "./Episode/Episode";

function EpisodeList({ episodes }) {
	return (
		<div className="sectionInnerPadding sectionInnerPadding-topOnly EpisodesList">
			{episodes.map((episode) => (
				<Episode key={episode.episode_id} episode={episode} />
			))}
		</div>
	);
}

export default EpisodeList;
