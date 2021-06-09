import React from "react";
import { Link } from "react-router-dom";
import { FlexboxGrid } from "rsuite";

const CategoryCard = ({ category }) => {
	return (
		<Link to={`category?category=${category}`}>
			<div style={{ position: "relative", overflow: "hidden" }}>
				<div
					className="overlay"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(0,0,0,.2)",
						borderRadius: 6,
					}}
				></div>
				<img
					src="https://catseye.com.bd/pub/media/catalog/product/cache/2e798b99da20144a36d61e294757db83/c/e/ce_pant_j_08d_5422_6_tk_1900_vat-_3_.jpg"
					alt="s"
					style={{
						height: 60,
						width: "100%",
						objectFit: "cover",
						borderRadius: 6,
					}}
				/>
				<FlexboxGrid
					justify="center"
					align="middle"
					style={{
						position: "absolute",
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
						width: "100%",
						padding: ".3rem 1rem",
					}}
				>
					<FlexboxGrid.Item
						style={{ fontSize: 16, color: "#fff", fontWeight: 600 }}
					>
						{category}
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</div>
		</Link>
	);
};

export default CategoryCard;
