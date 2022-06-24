import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import NavBar from "./Components/Layout/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import ShopProvider from "./store/ShopProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./admin/Admin";

import AddItemsForm from "./admin/AddItemsForm";
import ModifyForm from "./admin/ModifyForm";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const [modalAdminIsShown, setModalAdminIsShown] = useState(false);
	const [modalModifyIsShown, setModalModifyIsShown] = useState(false);

	const [searchInput, setSearchInput] = useState();

	const showCartHandler = () => {
		setCartIsShown(true);
	};
	const hideCartHandler = () => {
		setCartIsShown(false);
	};
	const showModalAdminHandler = () => {
		setModalAdminIsShown(true);
	};
	const hideModalAdminHandler = () => {
		setModalAdminIsShown(false);
	};
	const showModalModifyHandler = () => {
		setModalModifyIsShown(true);
	};
	const hideModalModifyHandler = () => {
		setModalModifyIsShown(false);
	};

	const searchHandler = (input) => {
		setSearchInput(input);
	};

	return (
		<CartProvider>
			<ShopProvider>
				<Router>
					{modalAdminIsShown && (
						<AddItemsForm onCLoseModalAdmin={hideModalAdminHandler} />
					)}
					{modalModifyIsShown && (
						<ModifyForm onCLoseModalModify={hideModalModifyHandler} />
					)}
					{cartIsShown && <Cart onClose={hideCartHandler} />}
					<Header onSearch={searchHandler} onShowCart={showCartHandler} />
					<NavBar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={<Shop input={searchInput} />} />
						<Route
							path="/admin"
							element={
								<Admin
									input={searchInput}
									onShowModalAdmin={showModalAdminHandler}
									onShowModalModify={showModalModifyHandler}
								/>
							}
						/>
					</Routes>
				</Router>
			</ShopProvider>
		</CartProvider>
	);
}

export default App;
