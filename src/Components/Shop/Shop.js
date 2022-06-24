import React, { useContext } from "react";
import Filter from "./Filter";
import classes from "./Shop.module.css";
import ProductsContainer from "./ProductsContainer";
import Details from "../Details/Details";
import ShopContext from "../../store/ShopContext";
const Shop = () => {
	const shopCtx = useContext(ShopContext);

	return (
		<div className={classes.shopContainer}>
			{shopCtx.detailsIsShown && <Details />}

			<Filter />
			<ProductsContainer />
		</div>
	);
};
export default Shop;
