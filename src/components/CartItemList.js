import React from "react";
import { Grid, Row, Col } from "rsuite";
import CartItem from "./cards/CartItem";

const CartItemList = () => {
	return (
		<div
			style={{
				maxHeight: 500,
				overflow: "auto",
				marginTop: 10,
			}}
		>
			<Grid fluid>
				<Row>
					<Col xs={24}>
						<CartItem counterBtn={true} removeBtn={true} wishListBtn={true} />
					</Col>
					<Col xs={24}>
						<CartItem counterBtn={true} removeBtn={true} wishListBtn={true} />
					</Col>
					<Col xs={24}>
						<CartItem counterBtn={true} removeBtn={true} wishListBtn={true} />
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default CartItemList;
