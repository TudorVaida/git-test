import React from "react";
import HeaderBtnCart from "./HeaderBtnCart";
import HeaderBtnAdmin from "./HeaderBtnAdmin";
import Input from "./Input";
import logo from "../../assets/logo.png";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
	let navigate = useNavigate();

	return (
		<React.Fragment>
			<header className={classes.header}>
				<img
					onClick={() => {
						navigate("/");
					}}
					src={logo}
					className={classes.logo}
					alt=""
				/>

				<Input />
				<div className={classes.headerBtns}>
					<HeaderBtnCart onClick={props.onShowCart} />
					<HeaderBtnAdmin />
				</div>
			</header>
		</React.Fragment>
	);
};
export default Header;
