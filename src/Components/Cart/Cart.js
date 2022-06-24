import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import ShopContext from "../../store/ShopContext";

import CartItem from "./CartItem";

const Cart = (props) => {
	let hasStock = true;

	const cartCtx = useContext(CartContext);
	const shopCtx = useContext(ShopContext);

	const totalAmount =
		cartCtx.totalAmount > 0 ? `${cartCtx.totalAmount.toFixed(2)} lei` : "0 lei";

	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (item) => {
		const [currentItem] = shopCtx.items.filter((elem) => elem.id === item.id);
		const currentItemIndex = shopCtx.items.findIndex(
			(item) => item.id === currentItem.id
		);
		shopCtx.items[currentItemIndex].stoc++;
		cartCtx.removeItem(item);
	};
	const cartItemAddHandler = (item) => {
		const [currentItem] = shopCtx.items.filter((elem) => elem.id === item.id);
		if (currentItem.stoc <= 0) {
			hasStock = false;
			return;
		} else {
			currentItem.stoc--;
			cartCtx.addItem(item, 1);
		}
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					img={item.img}
					name={item.name}
					amount={item.amount}
					price={item.price}
					hasItems={hasStock}
					onRemove={() => cartItemRemoveHandler(item)}
					onAdd={() => cartItemAddHandler(item)}
				/>
			))}
		</ul>
	);
	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onClose}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};
export default Cart;
