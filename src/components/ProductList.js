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

				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{data.map((item) => {
						return (
							<div key={item.id} className="product-wrapper">
								<ProductCard
									id={item.id}
									title={item.title}
									image={item.images[0]}
									price={item.sell_price}
									pre_price={item.regular_price}
								/>
							</div>
						);
					})}
				</Masonry>
			</div>
		</div>
	);
};

export default ProductList;
