import React from "react";
import Character from "./Character/Character";

function CharactersList({ characters }) {
	return (
		<div className="sectionInnerPadding sectionInnerPadding-topOnly CharactersList">
			{characters.map((character) => {
				return <Character key={character.char_id} character={character} />;
			})}
		</div>
	);
}
export default CharactersList;
