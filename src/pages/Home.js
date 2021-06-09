import React from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

// Dummy Data
import { dummyData } from "../data/Products";

const Home = () => {
	return (
		<div>
			<ProductList header="Top Deal" data={dummyData} />
			<ProductList header="Today's Pick For You" data={dummyData} />
			<CategoryList />
			<ProductList header="Sponsored Product" data={dummyData} />
			<ProductList header="Suggested Product" data={dummyData} />
		</div>
	);
};

export default Home;
