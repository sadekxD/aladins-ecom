import { makeVar } from "@apollo/client";

export const wishlist = makeVar([]);
export const cartItems = makeVar({ items: [], total: 0 });
