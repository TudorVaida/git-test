import { useRef, useState } from "react";
import classes from "./ProdusForm.module.css";
import InputProdus from "./InputProdus";
const ProdusForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = parseInt(enteredAmount);

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
			setAmountIsValid(false);
			return;
		}
		props.onAddToCart(enteredAmountNumber);
		amountInputRef.current.value = "1";
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<InputProdus
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount",
					type: "number",
					min: " 1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button className={classes.btnAdauga}>Add to cart</button>
			{!amountIsValid && <p>Please enter a valid amount!</p>}
		</form>
	);
};
export default ProdusForm;
