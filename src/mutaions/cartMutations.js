import { gql } from "@apollo/client";

export const MUTATION_ADD_ITEM_TO_CART = gql`
	mutation addToCart($title: String!) {
		addItemToCart(title: $title) @client {
			title
		}
	}
`;
