import React from "react";
import { FlexboxGrid } from "rsuite";

const CategoryCard = () => {
	return (
		<div>
			<img src="" alt="" srcset="" />
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
					// backgroundColor: "rgba(0,0,0,.4)",
				}}
			>
				<FlexboxGrid.Item
					style={{ fontSize: 20, color: "#fff", fontWeight: 600 }}
				>
					$200
				</FlexboxGrid.Item>
			</FlexboxGrid>
		</div>
	);
};

export default CategoryCard;
