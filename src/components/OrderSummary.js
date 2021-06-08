import React from "react";
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

const OrderSummary = () => {
	return (
		<Grid
			fluid
			className="order-summary-container"
			style={{
				backgroundColor: "#fff",
				padding: 10,
				borderRadius: 6,
				marginTop: 10,
			}}
		>
			<Row>
				<Col xs={24}>
					<h5 className="header">Order Summary</h5>
					<p>Subtotal (0 items)</p>
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
						<FlexboxGrid.Item>$600</FlexboxGrid.Item>
					</FlexboxGrid>
					<FlexboxGrid className="row" justify="space-between" align="middle">
						<FlexboxGrid.Item className="new-user">newuser150</FlexboxGrid.Item>
						<FlexboxGrid.Item>-$150</FlexboxGrid.Item>
					</FlexboxGrid>
					<FlexboxGrid className="row" justify="space-between" align="middle">
						<FlexboxGrid.Item className="total">Grand Total</FlexboxGrid.Item>
						<FlexboxGrid.Item>$450</FlexboxGrid.Item>
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
