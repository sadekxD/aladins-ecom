import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Grid,
	Row,
	Col,
	FlexboxGrid,
	Form,
	FormGroup,
	FormControl,
	Button,
} from "rsuite";
import { cartItems } from "../cache/caches";

const OrderSummary = ({ total }) => {
	const [totalItems, setTotalItems] = useState(0);
	useEffect(() => {
		let count = 0;
		for (var i = 0; i < cartItems().items.length; i++) {
			let item = cartItems().items[i];
			count += item.qty;
		}

		setTotalItems(count);
	}, [cartItems()]);

	return (
		<Grid fluid className="order-summary-container">
			<Row>
				<Col xs={24}>
					<h5 className="header">Order Summary</h5>
					<p>Subtotal ({totalItems} items)</p>
				</Col>
				<Col xs={24}>
					<Form
						fluid
						style={{
							marginTop: 10,
						}}
					>
						<FlexboxGrid>
							<FlexboxGrid.Item style={{ flex: 1, paddingRight: 10 }}>
								<FormGroup>
									<FormControl
										placeholder="Enter voucher code"
										name="username"
									/>
								</FormGroup>
							</FlexboxGrid.Item>
							<FlexboxGrid.Item>
								<Button appearance="primary">APPLY</Button>
							</FlexboxGrid.Item>
						</FlexboxGrid>
					</Form>
				</Col>
				<Col xs={24}>
					<FlexboxGrid className="row" justify="space-between" align="middle">
						<FlexboxGrid.Item className="sub-total">Subtotal</FlexboxGrid.Item>
						<FlexboxGrid.Item>${total}</FlexboxGrid.Item>
					</FlexboxGrid>
					{/* <FlexboxGrid className="row" justify="space-between" align="middle">
						<FlexboxGrid.Item className="new-user">newuser150</FlexboxGrid.Item>
						<FlexboxGrid.Item>-$150</FlexboxGrid.Item>
					</FlexboxGrid> */}
					<FlexboxGrid className="row" justify="space-between" align="middle">
						<FlexboxGrid.Item className="total">Grand Total</FlexboxGrid.Item>
						<FlexboxGrid.Item>${total}</FlexboxGrid.Item>
					</FlexboxGrid>
				</Col>
				<Col xs={24}>
					<Link to="/checkout">
						<Button
							appearance="primary"
							style={{ marginTop: 10, width: "100%" }}
						>
							Checkout
						</Button>
					</Link>
				</Col>
			</Row>
		</Grid>
	);
};

export default OrderSummary;
