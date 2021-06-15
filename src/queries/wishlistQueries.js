import { gql } from "@apollo/client";

export const QUERY_WISHLIST_INFO = gql`
	query Wishlist {
		wishlist @client
	}
`;
