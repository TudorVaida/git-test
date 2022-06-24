import { useState, useEffect } from "react/";

import ShopContext from "./ShopContext";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ShopProvider = (props) => {
	const [shopItems, setShopItems] = useState([]);
	const [shopFilter, setShopFilter] = useState("0");
	const [shopInput, setShopInput] = useState("");
	const [detailsInfo, setDetailsInfo] = useState({});
	const [detailsIsShown, setDetailsIsShown] = useState(false);
	const [listModified, setlistModified] = useState("");
	const [currentItemEdited, setCurrentItemEdited] = useState("");

	async function fetchDatabaseHandler() {
		const products = collection(db, "products");
		/////////// SET////////////////////
		// DUMMY_DATABASE.map(async (elem) => {
		// 	await setDoc(doc(products), elem, elem.id);
		// });
		////////////GET ////////////////
		const response = await getDocs(products);
		const responseList = response.docs.map((doc) => doc.data());
		setShopItems(responseList);
	}
	useEffect(() => {
		fetchDatabaseHandler();
	}, [listModified]);
	const changeFilterShop = (type) => {
		setShopFilter(type);
	};
	const changeInputShop = (input) => {
		setShopInput(input.toUpperCase());
	};
	const updateListHandler = () => {
		setlistModified(!listModified);
	};
	const showDetailsHandler = (name, price, description, img, id) => {
		setDetailsInfo({
			name: name,
			price: price,
			description: description,
			img: img,
			id: id,
		});

		setDetailsIsShown(true);
	};
	const hideDetailsHandler = () => {
		setDetailsIsShown(false);
	};
	const updateCurrentItem = (name, id, img, price, stoc, type, description) => {
		setCurrentItemEdited({
			name: name,
			id: id,
			img: img,
			price: price,
			stoc: stoc,
			type: type,
			description: description,
		});
	};

	const shopContext = {
		items: shopItems,
		filter: shopFilter,
		input: shopInput,
		details: detailsInfo,
		detailsIsShown: detailsIsShown,
		currentItemEdited: currentItemEdited,
		currentItemHandler: updateCurrentItem,
		updateList: updateListHandler,
		showDetails: showDetailsHandler,
		hideDetails: hideDetailsHandler,
		changeFilter: changeFilterShop,
		changeInput: changeInputShop,
		fetchData: fetchDatabaseHandler,
	};

	return (
		<ShopContext.Provider value={shopContext}>
			{props.children}
		</ShopContext.Provider>
	);
};
export default ShopProvider;
