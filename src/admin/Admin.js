import React from "react";
import ShopAdmin from "./ShopAdmin";

const Admin = (props) => {
	return (
		<div>
			<ShopAdmin
				onShowModalAdmin={props.onShowModalAdmin}
				onShowModalModify={props.onShowModalModify}
			/>
		</div>
	);
};

export default Admin;
