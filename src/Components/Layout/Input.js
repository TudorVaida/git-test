import React, { useContext } from "react";
import searchImg from "../../assets/search.jpg";
import classes from "./Input.module.css";
import ShopContext from "../../store/ShopContext";

const Input = (props) => {
	const shopCtx = useContext(ShopContext);
	const searchHandler = (event) => {
		shopCtx.changeInput(event.target.value);
	};
	return (
		<div className={classes.search}>
			<input type="text" onKeyUp={searchHandler} />
			<img src={searchImg} alt="" />
		</div>
	);
};
export default Input;
