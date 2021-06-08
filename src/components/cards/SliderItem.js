import React from "react";
import { Grid, Row, Col, FlexboxGrid } from "rsuite";

const SliderItem = () => {
	return (
		<div style={{ position: "relative" }}>
			<img
				src="https://catseye.com.bd/pub/media/catalog/product/cache/2e798b99da20144a36d61e294757db83/c/e/ce_pant_j_08d_5422_6_tk_1900_vat-_3_.jpg"
				alt="s"
				style={{
					height: 150,
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
					transform: "translateY(-100%)",
					width: "100%",
					padding: ".3rem 1rem",
					backgroundColor: "rgba(0,0,0,.4)",
				}}
			>
				<FlexboxGrid.Item
					style={{ fontSize: 20, color: "#fff", fontWeight: 600 }}
				>
					$200
				</FlexboxGrid.Item>
			</FlexboxGrid>
			<h5 style={{ fontSize: 16 }}>Round Collar T-Shirt For Men</h5>
		</div>
	);
};

export default SliderItem;
