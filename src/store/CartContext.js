import React from "react";

const CartContext = React.createContext({
	items: [],
	img: "",
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (item) => {},
});
export default CartContext;
