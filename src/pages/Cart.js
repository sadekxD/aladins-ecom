import { useQuery } from "@apollo/client";
import React from "react";
import { Grid, Row, Col } from "rsuite";
import CartItemList from "../components/CartItemList";
import OrderSummary from "../components/OrderSummary";
import Empty from "../components/Empty";
import { QUERY_CART_INFO } from "../queries/cartQueries";

const Cart = () => {
	const { data } = useQuery(QUERY_CART_INFO);
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
							{data?.cart.items.length === 0 ? (
								<Empty message="Cart is empty." />
							) : (
								<>
									<Col
										xs={24}
										sm={24}
										md={14}
										style={{ borderRadius: 8, overflow: "hidden" }}
									>
										<CartItemList cartData={data?.cart.items} />
									</Col>
									<Col xs={24} sm={24} md={10}>
										<OrderSummary total={data?.cart.total} />
									</Col>
								</>
							)}
						</Row>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default Cart;
