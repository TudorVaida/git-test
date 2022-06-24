import React, { useContext } from "react";
import ProdusAdmin from "./ProdusAdmin";
import classes from "../Components/Shop/ProductsContainer.module.css";
import ShopContext from "../store/ShopContext";

const ProductsContainerAdmin = (props) => {
	const shopCtx = useContext(ShopContext);

	return (
		<div>
			<div className={classes.addBtnContainer}>
				<button onClick={props.onShowModalAdmin} className={classes.addBtn}>
					Add Items
				</button>
			</div>

			<div className={classes.produse}>
				{shopCtx.items
					.filter((item) => item.name.includes(shopCtx.input))
					.filter(
						(item) => item.type === shopCtx.filter || shopCtx.filter === "0"
					)
					.map((elem) => (
						<ProdusAdmin
							key={elem.id}
							id={elem.id}
							img={elem.img}
							description={elem.description}
							name={elem.name}
							price={elem.price}
							type={elem.type}
							stoc={elem.stoc}
							onShowModalModify={props.onShowModalModify}
						/>
					))}
			</div>
		</div>
	);
};
export default ProductsContainerAdmin;
