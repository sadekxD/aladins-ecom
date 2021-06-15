import React from "react";
import { Grid, Row, Col } from "rsuite";
import CartItem from "./cards/CartItem";

const CartItemList = ({ cartData }) => {
	return (
		<div className="cart-items-container">
			<Grid fluid>
				<Row>
					{cartData.map((item) => (
						<Col
							key={item.id + item.variants.color + item.variants.size}
							xs={24}
						>
							<CartItem
								counterBtn={true}
								wishlistBtn={true}
								removeBtn={true}
								{...item}
							/>
						</Col>
					))}
				</Row>
			</Grid>
		</div>
	);
};

export default CartItemList;
