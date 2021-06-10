import React from "react";
import { FlexboxGrid } from "rsuite";
import { Link } from "react-router-dom";

const ProductCard = ({ id, pre_price, price, title, image }) => {
	console.log(price, pre_price);
	return (
		<div className="product-card">
			<Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
				<div>
					<img className="product-img" src={image} alt={title} />
					<h5 className="title">{title}</h5>
					{price && (
						<FlexboxGrid className="product-price-info" justify="end">
							{pre_price && (
								<FlexboxGrid.Item className="pre-price">
									$ {pre_price}
								</FlexboxGrid.Item>
							)}
							<FlexboxGrid.Item className="price">$ {price}</FlexboxGrid.Item>
						</FlexboxGrid>
					)}
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
