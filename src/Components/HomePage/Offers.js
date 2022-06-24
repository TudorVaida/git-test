import offer1 from "../../assets/genti-pescuit.png";
import offer2 from "../../assets/lanterne-felinare.png";
import offer3 from "../../assets/scaune-de-pescuit.png";
import offer4 from "../../assets/umbrele-corturi.png";

import classes from "./Offers.module.css";

const Offers = () => {
	return (
		<div className={classes.img}>
			<img src={offer1} alt="" />

			<img src={offer2} alt="" />

			<img src={offer3} alt="" />

			<img src={offer4} alt="" />
		</div>
	);
};
export default Offers;
