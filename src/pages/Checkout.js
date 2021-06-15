import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { Grid, Row, Col, FlexboxGrid, Button } from "rsuite";

// Cache
import { cartItems } from "../cache/caches";
import { QUERY_CART_INFO } from "../queries/cartQueries";

// Components
import CartItem from "../components/cards/CartItem";
import EditCheckoutModal from "../components/modals/EditCheckoutModal";

const Checkout = () => {
	const [show, setShow] = useState(false);
	const [checkoutInfo, setCheckoutInfo] = useState({
		username: "",
		address: "",
		phone_number: "",
		email: "",
	});
	const history = useHistory();
	const { data } = useQuery(QUERY_CART_INFO);

	useEffect(() => {
		if (!cartItems().items.length) {
			history.push("/");
		}
	}, [history]);

	const open = () => {
		setShow(true);
	};

	return (
		<div>
			<div className="checkout-container" style={{ padding: "0 .5rem" }}>
				<EditCheckoutModal
					show={show}
					setShow={setShow}
					checkoutInfo={checkoutInfo}
					setCheckoutInfo={setCheckoutInfo}
				/>
				<div className="container checkout">
					<Grid fluid>
						<Row className="row">
							<Col className="col-1" xs={24} sm={24} md={14}>
								<div>
									{data?.cart.items.map((item) => (
										<CartItem {...item} />
									))}
								</div>
							</Col>
							<Col xs={24} sm={24} md={10} className="col-2">
								<Grid fluid>
									<Row className="shipping-info-row">
										<Col xs={24} className="col-1">
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
										<Col className="col-2" xs={24}>
											<h5>Name:</h5>
											<p>{checkoutInfo.username}</p>
										</Col>
										<Col className="col-3" xs={24}>
											<h5>Address:</h5>
											<p>{checkoutInfo.address}</p>
										</Col>
										<Col className="col-4" xs={24}>
											<h5>Mobile:</h5>
											<p>{checkoutInfo.phone_number}</p>
										</Col>
										<Col className="col-5" xs={24}>
											<h5>E-mail:</h5>
											<p>{checkoutInfo.email}</p>
										</Col>
									</Row>
								</Grid>
							</Col>
							<Col xs={24} className="col-3">
								<Grid fluid>
									<Row>
										<Col sm={10}>
											<Button size="lg" appearance="default" className="btn">
												Go Back
											</Button>
										</Col>
										<Col sm={14}>
											<Button size="lg" appearance="primary" className="btn">
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
