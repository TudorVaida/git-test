import React from "react";

const ShopContext = React.createContext({
	items: [],
	filter: 0,
	input: "",
	details: {
		name: "",
		price: "",
		description: "",
		img: "",
		id: "",
	},
	detailsIsShown: false,
	currentItemEdited: {},
	currentItemHandler: () => {},
	updateList: () => {},
	showDetails: () => {},
	hideDetails: () => {},
	changeFilter: () => {},
	changeInput: () => {},
	fetchData: () => {},
});
export default ShopContext;
