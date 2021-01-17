import React from "react";

function Character({ character }) {
	return (
		<div className="Character">
			<img className="img-fluid" src={character.img} alt="Character Name" />

			<div className="Character-Overlayer text-center d-flex flex-column align-itmes-center justify-content-center sectionInnerPadding">
				<h3 className="Character-Overlayer-Header text-capitalize">
					{character.name}
				</h3>

				<div className="Character-Overlayer-Details">
					<p>
						<span>Actor :</span> {character.portrayed}
					</p>
					<p>
						<span>Nickname :</span> {character.nickname}
					</p>
					<p>
						<span>Born :</span> {character.birthday}
					</p>
					<p>
						<span>Occupations :</span> High School Chemistry Teacher / Meth King
						Pin
					</p>
					<p>
						<span>Status :</span> {character.status}
					</p>
					<p>
						<span>Appearance :</span> Season 01, Season 02, Season 03, Season
						04, Season 05
					</p>
				</div>
			</div>
		</div>
	);
}

export default Character;
