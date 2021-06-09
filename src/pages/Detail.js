import React from "react";
import { useParams } from "react-router-dom";

// Components
import ProductDetail from "../components/ProductDetail";
import ProductSlider from "../components/ProductSlider";
import ProductList from "../components/ProductList";

// Dummy Data
import { dummyData } from "../data/Products";

const Detail = () => {
	const { id } = useParams();

	const productData = dummyData.filter((item) => item.id === parseInt(id));

	return (
		<div className="detail-container">
			<ProductDetail productData={productData} />
			<ProductSlider data={dummyData} />
			<ProductList header="Suggested Product" data={dummyData} />
		</div>
	);
};

export default Detail;
