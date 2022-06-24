import React, { useState, useContext } from "react";
import ModalAdmin from "./ModalAdmin";
import classes from "./AddItemsForm.module.css";
import db from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import ShopContext from "../store/ShopContext";

const AddItemsForm = (props) => {
	const [name, setName] = useState("");
	const [id, setId] = useState("");
	const [img, setImg] = useState("");
	const [price, setPrice] = useState("");
	const [stoc, setStoc] = useState("");
	const [type, setType] = useState("");
	const [description, setDescription] = useState("");

	const shopCtx = useContext(ShopContext);

	async function addItemHandler(e) {
		e.preventDefault();
		await setDoc(doc(db, "products", id), {
			name: name,
			id: id,
			img: img,
			price: price,
			stoc: stoc,
			type: type,
			description: description,
		});
		shopCtx.updateList();
		props.onCLoseModalAdmin();
	}
	return (
		<ModalAdmin onCLoseModalAdmin={props.onCLoseModalAdmin}>
			<form onSubmit={addItemHandler}>
				<label className={classes.label}>
					Name :
					<br />
					<input type="text" onChange={(e) => setName(e.target.value)} />
				</label>
				<br />
				<label className={classes.label}>
					Id :
					<br />
					<input type="text" onChange={(e) => setId(e.target.value)} />
				</label>
				<br />
				<label className={classes.label}>
					Img URL :
					<br />
					<input type="text" onChange={(e) => setImg(e.target.value)} />
				</label>
				<br />
				<label className={classes.label}>
					Price :
					<br />
					<input
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
						name="type"
						id="type"
						onChange={(e) => setType(e.target.value)}
					>
						<option value="none" selected disabled hidden>
							Select an Option
						</option>
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
						name="w3review"
						rows="15"
						cols="90"
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>
				<br />

				<button className={classes.btnSubmit}>Submit</button>
			</form>
			<button className={classes.btnClose} onClick={props.onCLoseModalAdmin}>
				Close
			</button>
		</ModalAdmin>
	);
};
export default AddItemsForm;
