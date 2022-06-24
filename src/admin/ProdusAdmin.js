import React, { useContext } from "react";

import "../Components/Produs/Produs.css";
import "../assets/grid.css";
import db from "../firebase";
import {
	collection,
	doc,
	getDocs,
	deleteDoc,
	query,
	where,
} from "firebase/firestore";
import ShopContext from "../store/ShopContext";

const ProdusAdmin = (props) => {
	const shopCtx = useContext(ShopContext);

	async function delItem() {
		if (window.confirm("Are you sure you wish to delete this item?")) {
			const products = collection(db, "products");

			const q = query(products, where("id", "==", props.id));
			const querySnapshot = await getDocs(q);
			let id = "";
			querySnapshot.forEach((doc) => {
				id = doc.id;
			});
			///////////////Update////////////
			// const item = doc(db, "products", id);
			// await updateDoc(item, {
			// 	stoc: "3",
			// });
			//////////////Delete////////////////
			await deleteDoc(doc(db, "products", id));
			shopCtx.updateList();
		}
	}
	const curentItemHandler = () => {
		shopCtx.currentItemHandler(
			props.name,
			props.id,
			props.img,
			props.price,
			props.stoc,
			props.type,
			props.description
		);

		props.onShowModalModify();
	};
	return (
		<div className="produs col-xs-12 col-sm-6 col-md-4 col-lg-3">
			<div className="poza">
				<img src={props.img} alt="" />
			</div>
			<div className="nume">{props.name}</div>
			<div className="pret">{`${props.price} lei`}</div>
			<div className="adminBtns">
				<button onClick={curentItemHandler} className="modify">
					Modify
				</button>
				<button onClick={delItem} className="del">
					Delete
				</button>
			</div>
		</div>
	);
};
export default ProdusAdmin;
