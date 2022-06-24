import React, { useContext } from "react";
import Produs from "../Produs/Produs";
import classes from "./ProductsContainer.module.css";
import ShopContext from "../../store/ShopContext";

const ProductsContainer = (props) => {
	const shopCtx = useContext(ShopContext);

	return (
		<div className={classes.produse}>
			{shopCtx.items
				.filter((item) => item.name.includes(shopCtx.input))
				.filter(
					(item) => item.type === shopCtx.filter || shopCtx.filter === "0"
				)
				.map((elem) => (
					<Produs
						key={elem.id}
						id={elem.id}
						img={elem.img}
						description={elem.description}
						name={elem.name}
						price={elem.price}
						type={elem.type}
					/>
				))}
		</div>
	);
};
export default ProductsContainer;
