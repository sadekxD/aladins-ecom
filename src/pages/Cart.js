import React from "react";
import { Grid, Row, Col } from "rsuite";
import CartItemList from "../components/CartItemList";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
	return (
		<div>
			<div style={{ padding: "0 .5rem" }}>
				<div
					className="container"
					style={{
						marginTop: 20,
						padding: "1.2rem .5rem",
					}}
				>
					<Grid fluid>
						<Row>
							<Col
								xs={24}
								sm={24}
								md={14}
								style={{ borderRadius: 8, overflow: "hidden" }}
							>
								<CartItemList />
							</Col>
							<Col xs={24} sm={24} md={10}>
								<OrderSummary />
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default Cart;
