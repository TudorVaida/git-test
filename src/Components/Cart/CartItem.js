import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
	const price = `${parseFloat(props.price).toFixed(2)} lei`;

	return (
		<li className={classes["cart-item"]}>
			<div className={classes.imgText}>
				<img className={classes.img} src={props.img} alt="" />

				<div>
					<div className={classes.title}>{props.name}</div>
					<div className={classes.summary}>
						<span className={classes.price}>{price}</span>
						<span className={classes.amount}>x {props.amount}</span>
					</div>
				</div>
			</div>
			<div className={classes.actions}>
				<button onClick={props.onAdd}>+</button>
				<button onClick={props.onRemove}>−</button>
			</div>
		</li>
	);
};

export default CartItem;
