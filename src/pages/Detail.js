import React from "react";
import ProductDetail from "../components/ProductDetail";
import ProductSlider from "../components/ProductSlider";
import ProductList from "../components/ProductList";

const data = [1, 2, 3, 4, 5, 6, 7, 8];

const Detail = () => {
	return (
		<div className="detail-container">
			<ProductDetail />
			<ProductSlider />
			<ProductList header="Suggested Product" data={data} />
		</div>
	);
};

export default Detail;
