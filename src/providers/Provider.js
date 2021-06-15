import React from "react";

// Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { cartItems, wishlist } from "../cache/caches";

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				wishlist: {
					read() {
						return wishlist();
					},
				},
				cart: {
					read() {
						return cartItems();
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	cache: cache,
});

export const Provider = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
