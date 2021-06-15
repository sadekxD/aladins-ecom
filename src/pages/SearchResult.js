import React from "react";
import { useLocation } from "react-router";
import { dummyData } from "../data/Products";
import ProductList from "../components/ProductList";
import NoResult from "../components/NoResult";

const SearchResult = () => {
	const location = useLocation();
	const useQuery = () => {
		return new URLSearchParams(location.search);
	};

	const query = useQuery();

	const searchedResult = dummyData.filter(
		(item) =>
			item.title.toLowerCase().search(query.get("search").toLowerCase()) !== -1
	);

	return (
		<div>
			{searchedResult.length !== 0 ? (
				<ProductList
					header={`Search result for "${query.get("search")}"`}
					data={searchedResult}
				/>
			) : (
				<NoResult header={`Search result for "${query.get("search")}"`} />
			)}
		</div>
	);
};

export default SearchResult;
