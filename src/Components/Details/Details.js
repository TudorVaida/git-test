import { useState, useContext } from "react";

import ModalDetails from "../UI/ModalDetails";
import classes from "./Details.module.css";
import ProdusForm from "../Produs/ProdusFrom";
import CartContext from "../../store/CartContext";
import ShopContext from "../../store/ShopContext";

const Details = () => {
	const [hasStock, setHasStock] = useState(true);
	const [tooMuchStock, setTooMuchStock] = useState(true);
	const cartCtx = useContext(CartContext);
	const shopCtx = useContext(ShopContext);
	const hideDetailsHandler = () => {
		shopCtx.hideDetails();
	};
	const addToCartHandler = (amount) => {
		const [currentItem] = shopCtx.items.filter(
			(item) => item.id === shopCtx.details.id
		);

		if (currentItem.stoc <= 0) {
			setHasStock(false);
			return;
		} else if (currentItem.stoc < amount) {
			setTooMuchStock(false);
			return;
		} else {
			currentItem.stoc -= amount;
			cartCtx.addItem(
				{
					id: shopCtx.details.id,
					img: shopCtx.details.img,
					name: shopCtx.details.name,
					amount: amount,
					price: shopCtx.details.price,
				},
				amount
			);
			setHasStock(true);
			setTooMuchStock(true);
		}
	};

	return (
		<ModalDetails>
			<div className={classes.container}>
				<div className={classes.title}>
					<div className={classes.info}>
						<h2>{shopCtx.details.name}</h2>
						<div className={classes.price}>
							<span className={classes.span}>price</span>{" "}
							{shopCtx.details.price} lei
						</div>
						<ProdusForm onAddToCart={addToCartHandler} />
						{!hasStock && <p className="outOfStock">Out of Stock!</p>}
						{!tooMuchStock && <p className="outOfStock">Not enought Stock!</p>}
					</div>
					<img className={classes.img} src={shopCtx.details.img} alt="" />
				</div>

				<div className={classes.description}>{shopCtx.details.description}</div>
				<button className={classes["button--alt"]} onClick={hideDetailsHandler}>
					Close
				</button>
			</div>
		</ModalDetails>
	);
};
export default Details;
