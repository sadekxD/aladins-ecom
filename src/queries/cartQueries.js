import { gql } from "@apollo/client";

export const QUERY_CART_INFO = gql`
	query CartItems {
		cart @client
	}
`;
