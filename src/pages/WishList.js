import { useQuery } from "@apollo/client";
import React from "react";
import { Grid, Row, Col } from "rsuite";
import { QUERY_WISHLIST_INFO } from "../queries/wishlistQueries";
import Empty from "../components/Empty";
import WishlistCard from "../components/cards/WishlistCard";

const WishList = () => {
	const { data } = useQuery(QUERY_WISHLIST_INFO);

	return (
		<div className="wishlist">
			{data?.wishlist.length !== 0 ? <h4>My Wishlist</h4> : ""}
			<Grid fluid className="container">
				<Row>
					<Col xs={24} sm={24} md={24} className="row">
						{data?.wishlist.length === 0 ? (
							<Empty message="Wislist is empty" />
						) : (
							data?.wishlist.map((item) => (
								<WishlistCard key={item.id} {...item} />
							))
						)}
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default WishList;
