import React from "react";

function Episode({ episode }) {
	let caharactersDom = "";
	for (var i = 0; i < episode.characters.length; i++) {
		// console.log(episode.characters[i]);
		caharactersDom += `${episode.characters[i]}, `;
	}

	// console.log(caharactersDom);

	return (
		<div className="EpisodeCard text-center">
			<h1 className="EpisodeName text-capitalize">{episode.title}</h1>
			<div className="EpisodeNumber">
				Season {episode.season} - Episode {episode.episode}
			</div>
			<div className="AirDate">
				Air Date : <span>{episode.air_date}</span>
			</div>
			<div className="Characters">{caharactersDom}</div>
		</div>
	);
}

export default Episode;
