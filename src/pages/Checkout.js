import React, { useState } from "react";
import { Grid, Row, Col, FlexboxGrid, Button } from "rsuite";
import CartItem from "../components/cards/CartItem";
import EditCheckoutPopper from "../components/EditCheckoutPopper";

const Checkout = () => {
	const [show, setShow] = useState(false);
	const [checkoutInfo, setCheckoutInfo] = useState({
		username: "",
		addresss: "",
		mobile: "",
		email: "",
	});

	const open = () => {
		setShow(true);
	};

	console.log(checkoutInfo);

	return (
		<div>
			<div style={{ padding: "0 .5rem" }}>
				<EditCheckoutPopper
					show={show}
					setShow={setShow}
					checkoutInfo={checkoutInfo}
					setCheckoutInfo={setCheckoutInfo}
				/>
				<div
					className="container"
					style={{
						marginTop: 20,
						padding: "1.2rem .5rem",
					}}
				>
					<Grid fluid style={{ backgroundColor: "#fff" }}>
						<Row>
							<Col xs={24} sm={24} md={14} style={{ overflow: "auto" }}>
								<div>
									<CartItem />
									<CartItem />
								</div>
							</Col>
							<Col
								xs={24}
								sm={24}
								md={10}
								style={{ overflow: "auto", padding: ".5rem" }}
							>
								<Grid fluid>
									<Row>
										<Col xs={24}>
											<FlexboxGrid justify="space-between" align="middle">
												<FlexboxGrid.Item>
													<h5>Shipping Address</h5>
												</FlexboxGrid.Item>
												<FlexboxGrid.Item>
													<Button onClick={open} appearance="link">
														Edit
													</Button>
												</FlexboxGrid.Item>
											</FlexboxGrid>
										</Col>
										<Col xs={24} style={{ margin: "14px 0" }}>
											<h5
												style={{
													fontWeight: 400,
													color: "rgba(0,0,0,.6)",
													fontSize: 14,
												}}
											>
												Name:
											</h5>
											<p
												style={{
													fontWeight: 400,
													color: "rgba(0,0,0,.6)",
													fontSize: 17,
												}}
											>
												Ariful Islam
											</p>
										</Col>
										<Col xs={24} style={{ margin: "14px 0" }}>
											<h5
												style={{
													fontWeight: 400,
													color: "rgba(0,0,0,.6)",
													fontSize: 14,
												}}
											>
												Address:
											</h5>
											<p
												style={{
													fontWeight: 400,
													color: "rgba(0,0,0,.6)",
													fontSize: 17,
												}}
											>
												Moniapukur, Hathazari, Chittagong
											</p>
										</Col>
										<Col xs={24} style={{ margin: "14px 0" }}>
											<h5
												style={{
													fontWeight: 400,
													color: "rgba(0,0,0,.6)",
													fontSize: 14,
												}}
											>
												Mobile:
											</h5>
											<p
												style={{
													fontWeight: 400,
													color: "rgba(0,0,0,.6)",
													fontSize: 17,
												}}
											>
												+8801864530000
											</p>
										</Col>
										<Col xs={24} style={{ margin: "14px 0" }}>
											<h5
												style={{
													fontWeight: 400,
													color: "rgba(0,0,0,.6)",
													fontSize: 14,
												}}
											>
												E-mail:
											</h5>
											<p
												style={{
													fontWeight: 400,
													color: "rgba(0,0,0,.6)",
													fontSize: 17,
												}}
											>
												ariful@gmail.com
											</p>
										</Col>
									</Row>
								</Grid>
							</Col>
							<Col xs={24} style={{ padding: "10px .5rem" }}>
								<Grid fluid>
									<Row>
										<Col sm={10}>
											<Button
												size="lg"
												appearance="default"
												style={{ width: "100%", marginTop: 10 }}
											>
												Go Back
											</Button>
										</Col>
										<Col sm={14}>
											<Button
												size="lg"
												appearance="primary"
												style={{ width: "100%", marginTop: 10 }}
											>
												Proceed to Payment
											</Button>
										</Col>
									</Row>
								</Grid>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
