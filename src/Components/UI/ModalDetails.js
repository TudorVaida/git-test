import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./ModalDetails.module.css";
import ShopContext from "../../store/ShopContext";


const BackDrop = (props) => {
	const shopCtx = useContext(ShopContext);
	const hideDetailsHandler=()=>{
		shopCtx.hideDetails();
	}
	return <div className={classes.backdrop} onClick={hideDetailsHandler}></div>;
};
const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};
const portalElement = document.getElementById("overlaysDetails");
const ModalDetails = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<BackDrop onClose={props.onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
			{}
		</Fragment>
	);
};
export default ModalDetails;
