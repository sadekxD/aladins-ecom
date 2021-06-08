import React, { useEffect } from "react";
import { useLocation } from "react-router";

const FilterResult = () => {
	const location = useLocation();

	const useQuery = () => {
		return new URLSearchParams(location.search);
	};

	let query = useQuery();

	console.log(
		query.get("location"),
		query.get("min"),
		query.get("max"),
		query.get("condition")
	);

	return <div></div>;
};

export default FilterResult;
