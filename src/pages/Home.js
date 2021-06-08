import React from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

const data1 = [1, 2, 3, 4];
const data2 = [1, 2, 3, 4, 5, 6, 7, 8];
const data3 = [1, 2, 3, 4];
const data4 = [1, 2, 3, 4, 5, 6, 7, 8];

const Home = () => {
	return (
		<div>
			<ProductList header="Top Deal" data={data1} />
			<ProductList header="Today's Pick For You" data={data2} />
			<CategoryList />
			<ProductList header="Sponsored Product" data={data3} />
			<ProductList header="Suggested Product" data={data4} />
		</div>
	);
};

export default Home;
