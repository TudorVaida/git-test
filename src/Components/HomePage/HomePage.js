import React from "react";
import classes from "./HomePage.module.css";
import CaruselOffers from "./CatuselOffers";
import Offers from "./Offers";

const HomePage = (props) => {
	return (
		<div className={classes.homePage}>
			<CaruselOffers />
			<Offers />
		</div>
	);
};
export default HomePage;
