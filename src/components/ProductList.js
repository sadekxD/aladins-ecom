import React from "react";
import Masonry from "react-masonry-css";

import ProductCard from "./cards/ProductCard";

const breakpointColumnsObj = {
	default: 4,
	1100: 4,
	700: 3,
	500: 2,
};

const ProductList = ({ header, data = [] }) => {
	return (
		<div>
			<div className="container product-list-container">
				<h5 className="header">{header}</h5>
				{/* <Grid style={{ margin: "0 auto" }} fluid>
					<Row>
						{data.map((item, i) => (
							<Col key={i} xs={12} sm={12} md={8} lg={6} style={{ padding: 4 }}>
								<div className="product-wrapper">
									<ProductCard price={200} pre_price={220} id={item} />
								</div>
							</Col>
						))}
					</Row>
				</Grid> */}
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{data.map((item, i) => (
						<div className="product-wrapper">
							<ProductCard price={200} pre_price={220} id={item} />
						</div>
					))}
				</Masonry>
			</div>
		</div>
	);
};

export default ProductList;
