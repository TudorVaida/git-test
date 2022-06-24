import { useState, useContext } from "react";
import "./Produs.css";
import "../../assets/grid.css";
import ProdusForm from "./ProdusFrom";
import CartContext from "../../store/CartContext";
import ShopContext from "../../store/ShopContext";

const Produs = (props) => {
	const [hasStock, setHasStock] = useState(true);
	const [tooMuchStock, setTooMuchStock] = useState(true);
	const cartCtx = useContext(CartContext);
	const shopCtx = useContext(ShopContext);
	const addToCartHandler = (amount) => {
		const [currentItem] = shopCtx.items.filter((item) => item.id === props.id);

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
					id: props.id,
					img: props.img,
					name: props.name,
					amount: amount,
					price: props.price,
				},
				amount
			);
			setHasStock(true);
			setTooMuchStock(true);
		}
	};
	const showDetailsHandler = () => {
		shopCtx.showDetails(
			props.name,
			props.price,
			props.description,
			props.img,
			props.id
		);
	};
	// const clasa = "produs col-xs-12 col-sm-6 col-md-4 col-lg-3";
	return (
		<div className="produs col-xs-12 col-sm-6 col-md-4 col-lg-3">
			<div onClick={showDetailsHandler} className="poza">
				<img src={props.img} alt="" />
			</div>
			<div onClick={showDetailsHandler} className="nume">
				{props.name}
			</div>
			<div
				onClick={showDetailsHandler}
				className="pret"
			>{`${props.price} lei`}</div>
			<ProdusForm onAddToCart={addToCartHandler} />
			{!hasStock && <p className="outOfStock">Out of Stock!</p>}
			{!tooMuchStock && <p className="outOfStock">Not enought Stock!</p>}
		</div>
	);
};
export default Produs;
