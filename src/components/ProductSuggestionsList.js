import React from "react";
import { Grid, Row, Col } from "rsuite";
import ProductCard from "./cards/ProductCard";

const ProductSuggestionList = ({ header, data = [], showPrice }) => {
	return (
		<div style={{ padding: 16 }}>
			<div
				className="container"
				style={{
					backgroundColor: "#F5F5F5",
					borderRadius: 6,
					padding: 16,
				}}
			>
				<h4 style={{ marginLeft: 8 }}>Similar Products</h4>
				<Grid style={{ margin: "0 auto" }} fluid>
					<Row>
						{data.map((item, i) => (
							<Col
								key={i}
								xs={24}
								sm={12}
								md={8}
								lg={6}
								style={{ padding: 16 }}
							>
								<ProductCard price={200} pre_price={220} id={item} />
							</Col>
						))}
					</Row>
				</Grid>
			</div>
		</div>
	);
};

export default ProductSuggestionList;
