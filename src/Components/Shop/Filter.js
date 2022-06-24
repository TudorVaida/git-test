import React, { useContext } from "react";
import classes from "./Filter.module.css";
import ShopContext from "../../store/ShopContext";
const Filter = (props) => {
	const shopCtx = useContext(ShopContext);
	const filterAll = () => {
		shopCtx.changeFilter("0");
	};
	const filterLansete = () => {
		shopCtx.changeFilter("1");
	};
	const filterMulinete = () => {
		shopCtx.changeFilter("2");
	};
	const filterFiree = () => {
		shopCtx.changeFilter("3");
	};
	const filterNade = () => {
		shopCtx.changeFilter("4");
	};
	const filterBagajerie = () => {
		shopCtx.changeFilter("5");
	};
	const fetchData = () => {
		shopCtx.fetchData();
	};

	return (
		<div className={classes.filtrare}>
			<div onClick={fetchData} className={classes.title}>
				Filters
			</div>
			<div onClick={filterAll} className={classes.filtru}>
				All Items
			</div>
			<div onClick={filterLansete} className={classes.filtru}>
				Lansete
			</div>
			<div onClick={filterMulinete} className={classes.filtru}>
				Mulinete
			</div>
			<div onClick={filterFiree} className={classes.filtru}>
				Fire
			</div>
			<div onClick={filterNade} className={classes.filtru}>
				Nade
			</div>
			<div onClick={filterBagajerie} className={classes.filtru}>
				Bagajerie
			</div>
		</div>
	);
};
export default Filter;
