import classes from "./HeaderBtnAdmin.module.css";
import { useNavigate } from "react-router-dom";

const HeaderBtnAdmin = (props) => {
	let navigate = useNavigate();
	return (
		<button
			className={classes.button}
			onClick={() => {
				navigate("/admin");
			}}
		>
			Admin
		</button>
	);
};
export default HeaderBtnAdmin;
