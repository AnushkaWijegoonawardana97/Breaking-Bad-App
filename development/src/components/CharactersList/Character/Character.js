import React from "react";
import CharacterImage from "../../../assets/Character.jpg";

function Character() {
	return (
		<div className="Character">
			<img className="img-fluid" src={CharacterImage} alt="Character Name" />

			<div className="Character-Overlayer text-center d-flex flex-column align-itmes-center justify-content-center sectionInnerPadding">
				<h3 className="Character-Overlayer-Header text-capitalize">
					Walter White
				</h3>

				<div className="Character-Overlayer-Details">
					<p>
						<span>Actor :</span> Bryan Cranston
					</p>
					<p>
						<span>Nickname :</span> Heisenberg
					</p>
					<p>
						<span>Born :</span> 09-07-1958
					</p>
					<p>
						<span>Occupations :</span> High School Chemistry Teacher / Meth King
						Pin
					</p>
					<p>
						<span>Status :</span> Presumed dead
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
