import { useReducer, useEffect } from "react/";
import CartContext from "./CartContext";

const defaultCartState = JSON.parse(localStorage.getItem("cartState")) || {
	items: [],
	img: "",
	stoc: 0,
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedTotalAmount =
			state.totalAmount +
			parseFloat(action.item.price) * parseInt(action.item.amount);

		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems;
		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	if (action.type === "REMOVE") {
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);

		const existingItem = state.items[existingCartItemIndex];
		const updatedTotalAmount =
			state.totalAmount - parseFloat(existingItem.price);

		let updatedItems;
		if (existingItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.item.id);
		} else {
			const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};
const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCartHandler = (item, amount) => {
		dispatchCartAction({ type: "ADD", item: item, amount: amount });
	};

	const removeItemToCartHandler = (item) => {
		dispatchCartAction({ type: "REMOVE", item: item });
	};

	useEffect(() => {
		localStorage.setItem("cartState", JSON.stringify(cartState));
	}, [cartState]);
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};
export default CartProvider;
