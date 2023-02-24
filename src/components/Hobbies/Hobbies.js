import * as React from "react";
import starsIcon from "./img/swim.png";
import frogIcon from "./img/frog.png";
import treesIcon from "./img/trees.png";
import { hobbiesContainer, hobbyCard } from "./Hobbies.module.scss";

const Hobbies = () => {
	return (
		<div className={`section ${hobbiesContainer}`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className={hobbyCard}>
							<img
								src={starsIcon}
								alt="Astrophotography icon"
								height={48}
								width={48}
							></img>
							<div>Swimming</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className={hobbyCard}>
							<img
								src={frogIcon}
								alt="Macro Photography icon"
								height={48}
								width={48}
							></img>
							<div>Cricket</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className={hobbyCard}>
							<img
								src={treesIcon}
								alt="Apple orchard icon"
								height={48}
								width={48}
							></img>
							<div>Trekking</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hobbies;
