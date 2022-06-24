import classes from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	let navigate = useNavigate();

	return (
		<nav className={classes.nav}>
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				Home
			</button>
			<button
				onClick={() => {
					navigate("/shop");
				}}
			>
				Shop
			</button>
		</nav>
	);
};
export default NavBar;
