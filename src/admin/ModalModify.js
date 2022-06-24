import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./ModalAdmin.module.css";

const BackDrop = (props) => {
	return (
		<div className={classes.backdrop} onClick={props.onCLoseModalModify}></div>
	);
};
const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};
const portalElement = document.getElementById("overlaysModify");
const ModalModify = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<BackDrop onCLoseModalModify={props.onCLoseModalModify} />,
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
export default ModalModify;
