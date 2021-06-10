import React from "react";
import { useLocation } from "react-router";
import { dummyData } from "../data/Products";
import ProductList from "../components/ProductList";
import NoResult from "../components/NoResult";

const FilterResult = () => {
	const location = useLocation();

	const useQuery = () => {
		return new URLSearchParams(location.search);
	};

	const query = useQuery();

	const loc = query.get("location").toLowerCase(); //location
	const min = parseInt(query.get("min")); // min_price
	const max = parseInt(query.get("max")); // max_price
	const condition = query.get("condition").toLowerCase(); // product_condition

	const filteredResult = dummyData.filter((item) => {
		return (
			item.location.toLowerCase() === loc &&
			parseInt(item.sell_price) >= min &&
			parseInt(item.sell_price) <= max &&
			item.product_condition.toLowerCase() === condition
		);
	});

	console.log(filteredResult);

	return (
		<div>
			{filteredResult.length !== 0 ? (
				<ProductList header="Filtered Result" data={filteredResult} />
			) : (
				<NoResult header="Filtered Result" />
			)}
		</div>
	);
};

export default FilterResult;
