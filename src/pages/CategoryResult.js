import React from "react";
import { useLocation } from "react-router";
import { dummyData } from "../data/Products";
import ProductList from "../components/ProductList";
import NoResult from "../components/NoResult";

const CategoryResult = () => {
	const location = useLocation();

	const useQuery = () => {
		return new URLSearchParams(location.search);
	};

	const query = useQuery();

	const category = query.get("category"); // Category

	const categorizedResult = dummyData.filter(
		(item) => item.category.toLowerCase() === category.toLocaleLowerCase()
	);

	return (
		<div>
			{categorizedResult.length !== 0 ? (
				<ProductList
					header={`Category-"${category}"`}
					data={categorizedResult}
				/>
			) : (
				<NoResult header={`Category-"${category}"`} />
			)}
		</div>
	);
};

export default CategoryResult;
