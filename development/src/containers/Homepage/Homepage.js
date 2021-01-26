import React from "react";
import Button from "../../components/Buttons/Button";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";

function Homepage(props) {
	const onLinkCardClick = (e) => {
		if (e.target.id === "LinkCard-01") {
			props.history.push("/characters");
		}
		if (e.target.id === "LinkCard-02") {
			props.history.push("/episodes");
		}
		if (e.target.id === "LinkCard-03") {
			props.history.push("/quotes");
		}
	};

	return (
		<div className="LandingPage sectionInnerPadding d-flex flex-column justify-content-between">
			<HeaderNavigation />

			<section className="LandingContent w-50 lightColor">
				<h1 className="primaryHeading">BREAKING BAD</h1>
				<p>
					Walter White, a chemistry teacher, discovers that he has cancer and
					decides to get into the meth-making business to repay his medical
					debts. His priorities begin to change when he partners with Jesse.
				</p>

				<Button
					class={"PrimaryButton PrimaryButton-active"}
					linkTo={"https://www.netflix.com/lk/title/70143836?source=35"}
				>
					Watch on Netflix
				</Button>
				<Button
					class={"PrimaryButton"}
					linkTo={"https://www.imdb.com/title/tt0903747/"}
				>
					More Details
				</Button>
			</section>

			<section className="LandingRouterContainer d-flex align-items-center justify-content-between">
				<div
					className="LinkCard LinkCard-01"
					id="LinkCard-01"
					onClick={(e) => onLinkCardClick(e)}
				>
					<p
						className="LinkText d-block text-center w-100 lightColor"
						id="LinkCard-01"
					>
						Cast and characters
					</p>
				</div>

				<div
					className="LinkCard LinkCard-02"
					id="LinkCard-02"
					onClick={(e) => onLinkCardClick(e)}
				>
					<p
						className="LinkText d-block text-center w-100 lightColor"
						id="LinkCard-02"
					>
						Episodes
					</p>
				</div>

				<div
					className="LinkCard LinkCard-03"
					id="LinkCard-03"
					onClick={(e) => onLinkCardClick(e)}
				>
					<p
						className="LinkText d-block text-center w-100 lightColor"
						id="LinkCard-03"
					>
						Quotes
					</p>
				</div>
			</section>
		</div>
	);
}

export default Homepage;
