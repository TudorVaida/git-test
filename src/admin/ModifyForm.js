import React, { useState, useContext } from "react";
import ModalModify from "./ModalModify";
import classes from "./AddItemsForm.module.css";
import db from "../firebase";
import {
	collection,
	doc,
	getDocs,
	updateDoc,
	query,
	where,
} from "firebase/firestore";
import ShopContext from "../store/ShopContext";

const ModifyForm = (props) => {
	const shopCtx = useContext(ShopContext);
	const [name, setName] = useState(shopCtx.currentItemEdited.name);
	const [id, setId] = useState(shopCtx.currentItemEdited.id);
	const [img, setImg] = useState(shopCtx.currentItemEdited.img);
	const [price, setPrice] = useState(shopCtx.currentItemEdited.price);
	const [stoc, setStoc] = useState(shopCtx.currentItemEdited.stoc);
	const [type, setType] = useState(shopCtx.currentItemEdited.type);
	const [description, setDescription] = useState(
		shopCtx.currentItemEdited.description
	);

	async function modifyItemHandler(e) {
		e.preventDefault();
		const products = collection(db, "products");

		const q = query(products, where("id", "==", shopCtx.currentItemEdited.id));
		const querySnapshot = await getDocs(q);
		let idx = "";
		querySnapshot.forEach((doc) => {
			idx = doc.id;
		});

		const item = doc(db, "products", idx);

		await updateDoc(item, {
			name: name,
			id: id,
			img: img,
			price: price,
			stoc: stoc,
			type: type,
			description: description,
		});

		shopCtx.updateList();
		props.onCLoseModalModify();
	}

	return (
		<ModalModify onCLoseModalModify={props.onCLoseModalModify}>
			<form onSubmit={modifyItemHandler}>
				<label className={classes.label}>
					Name :
					<br />
					<input
						defaultValue={shopCtx.currentItemEdited.name}
						type="text"
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<br />
				<label className={classes.label}>
					Id :
					<br />
					<input
						defaultValue={shopCtx.currentItemEdited.id}
						type="text"
						onChange={(e) => setId(e.target.value)}
					/>
				</label>
				<br />
				<label className={classes.label}>
					Img URL :
					<br />
					<input
						defaultValue={shopCtx.currentItemEdited.img}
						type="text"
						onChange={(e) => setImg(e.target.value)}
					/>
				</label>
				<br />
				<label className={classes.label}>
					Price :
					<br />
					<input
						defaultValue={shopCtx.currentItemEdited.price}
						type="number"
						min="0"
						onChange={(e) => setPrice(e.target.value)}
					/>
				</label>
				<br />
				<label className={classes.label}>
					Stock :
					<br />
					<input
						defaultValue={shopCtx.currentItemEdited.stoc}
						type="number"
						min="0"
						onChange={(e) => setStoc(e.target.value)}
					/>
				</label>
				<br />
				<label className={classes.label}>
					Type :
					<br />
					<select
						defaultValue={shopCtx.currentItemEdited.type}
						name="type"
						id="type"
						onChange={(e) => setType(e.target.value)}
					>
						<option value="1">Lansete</option>
						<option value="2">Mulinete</option>
						<option value="3">Fire</option>
						<option value="4">Nade</option>
						<option value="5">Bagajerie</option>
					</select>
				</label>
				<br />
				<label className={classes.label}>
					Description :
					<br />
					<textarea
						defaultValue={shopCtx.currentItemEdited.description}
						name="w3review"
						rows="15"
						cols="90"
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<br />

				<button className={classes.btnSubmit}>Submit</button>
			</form>
			<button className={classes.btnClose} onClick={props.onCLoseModalModify}>
				Close
			</button>
		</ModalModify>
	);
};
export default ModifyForm;
