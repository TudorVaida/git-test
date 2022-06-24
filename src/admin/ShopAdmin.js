import React from "react";
import Filter from "../Components/Shop/Filter";
import classes from "../Components/Shop/Shop.module.css";
import ProductsContainerAdmin from "./ProductsContainerAdmin";

const ShopAdmin = (props) => {
	return (
		<div className={classes.shopContainer}>
			<Filter />
			<ProductsContainerAdmin
				onShowModalAdmin={props.onShowModalAdmin}
				onShowModalModify={props.onShowModalModify}
			/>
		</div>
	);
};
export default ShopAdmin;
