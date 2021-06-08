import React from "react";
import { Grid, Row, Col } from "rsuite";
import CartItem from "../components/cards/CartItem";

const WishList = () => {
	return (
		<div>
			<h4 style={{ textAlign: "center", marginTop: 20 }}>My Wishlist</h4>
			<Grid
				fluid
				className="container"
				style={{ maxWidth: 600, marginTop: 20 }}
			>
				<Row>
					<Col
						xs={24}
						sm={24}
						md={24}
						style={{ borderRadius: 8, overflow: "hidden" }}
					>
						<CartItem removeBtn={true} />
						<CartItem removeBtn={true} />
						<CartItem removeBtn={true} />
						<CartItem removeBtn={true} />
						<CartItem removeBtn={true} />
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default WishList;
