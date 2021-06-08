import React from "react";
import { FlexboxGrid } from "rsuite";
import { Link } from "react-router-dom";

const imgLinks = [
	"https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2020/10/Masthead-Mobile@2x-3.jpg",
	"https://www.hautetime.com/wp-content/uploads/2015/08/Breguet-7077-La-Tradition-Chronograph-Inde--pendant.jpg",
	"https://i.insider.com/5cbf5a3efa99af28517a2af2?width=1024&format=jpeg",
];

const ProductCard = ({ price, pre_price, id }) => {
	return (
		<div className="product-card">
			<Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
				<div>
					<img
						className="product-img"
						src={imgLinks[Math.floor(Math.random() * imgLinks.length)]}
						alt="p"
					/>
					<h5 className="title">Mens Wrist Watch - 55mm and 6mm Tall</h5>
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
