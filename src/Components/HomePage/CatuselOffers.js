import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import caruselOffers1 from "../../assets/carusel1.jpg";
import caruselOffers2 from "../../assets/carusel2.jpg";
import caruselOffers3 from "../../assets/carusel3.jpg";
import caruselOffers4 from "../../assets/carusel4.jpg";
import "./CaruselOffers.css";

const CaruselOffers = () => {
	// return <img className={classes.img} src={caruselOffers} />;
	return (
		<div>
			<Carousel>
				<div>
					<img className="imgCorousel" src={caruselOffers1} alt="" />
				</div>
				<div>
					<img className="imgCorousel" src={caruselOffers2} alt="" />
				</div>
				<div>
					<img className="imgCorousel" src={caruselOffers3} alt="" />
				</div>
				<div>
					<img className="imgCorousel" src={caruselOffers4} alt="" />
				</div>
			</Carousel>
		</div>
	);
};
export default CaruselOffers;
