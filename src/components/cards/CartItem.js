import React, { useEffect, useState } from "react";
import { FlexboxGrid, Icon, Button, Avatar, Grid, Row, Col } from "rsuite";

// cache
import { cartItems, wishlist } from "../../cache/caches";

const CartItem = (props) => {
	const [quantity, setQuantity] = useState(props.qty);

	useEffect(() => {
		if (quantity <= 0) {
			removeFromCart();
		} else {
			const cart = JSON.parse(JSON.stringify(cartItems()));
			const items = cart.items.map((item) => {
				if (
					item.id === props.id &&
					item.variants.color === props.variants.color &&
					item.variants.size === props.variants.size
				) {
					item.qty = quantity;
				}
				return item;
			});
			cartItems({ ...cartItems(), items: [...items] });
		}
	}, [quantity]);

	useEffect(() => {
		let total = 0;

		for (var i = 0; i < cartItems().items.length; i++) {
			let item = cartItems().items[i];
			total += item.sell_price * item.qty;
		}

		cartItems({ ...cartItems(), total: total });
	}, [quantity]);

	const inc = () => {
		setQuantity((pre) => pre + 1);
	};

	const dec = () => {
		if (quantity > 0) setQuantity((pre) => pre - 1);
	};

	const removeFromCart = () => {
		const newCartItems = cartItems().items.filter((item) => {
			if (item.id === props.id) {
				return (
					item.variants.color !== props.variants.color ||
					item.variants.size !== props.variants.size
				);
			}
			return item.id !== props.id;
		});

		let total = 0;

		for (var i = 0; i < newCartItems.length; i++) {
			let item = newCartItems[i];
			total += item.sell_price * item.qty;
		}

		cartItems({ items: [...newCartItems], total: total });
	};

	const addToWishlist = () => {
		const newItem = cartItems().items.find((item) => item.id === props.id);

		const checkExistedItem = wishlist().filter(
			(item) => item.id === newItem.id
		);

		if (checkExistedItem.length) {
			alert("Item already exists!!");
			return;
		}

		wishlist([...wishlist(), { ...newItem }]);
	};

	return (
		<Grid fluid className="cart-item">
			<Row>
				<Col xs={10} sm={6} md={6}>
					<div>
						<img src={props.images[0]} alt="s" className="cart-item-image" />
					</div>
				</Col>
				<Col xs={14} sm={18} md={18}>
					<h5 className="cart-item-title">
						{props.title}{" "}
						{props.variants.color &&
							props.variants.size &&
							`-${props.variants.color}, ${props.variants.size}`}
					</h5>
					<FlexboxGrid align="middle" className="user-info">
						<FlexboxGrid.Item>
							<Avatar
								src="https://www.pngarts.com/files/11/Avatar-PNG-Picture.png"
								size="sm"
							/>
						</FlexboxGrid.Item>
						<FlexboxGrid.Item>
							<h5 className="user-info-name">Rasel Chowdhury</h5>
						</FlexboxGrid.Item>
					</FlexboxGrid>
					<FlexboxGrid className="price-info">
						<FlexboxGrid.Item>
							<h4 className="price">${props.sell_price}</h4>
						</FlexboxGrid.Item>
						<FlexboxGrid.Item>
							<h4 className="pre-price">${props.regular_price}</h4>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</Col>
				<Col xs={24}>
					<FlexboxGrid align="middle" justify="end" className="cart-control">
						{props.counterBtn && (
							<>
								<FlexboxGrid.Item>
									<FlexboxGrid>
										<FlexboxGrid.Item>
											<Button
												className="btn minus"
												size="xs"
												appearance="ghost"
												onClick={dec}
											>
												<Icon icon="minus" />
											</Button>
										</FlexboxGrid.Item>
										<FlexboxGrid.Item>
											<div className="count">{quantity}</div>
										</FlexboxGrid.Item>
										<FlexboxGrid.Item>
											<Button
												className="btn"
												size="xs"
												appearance="ghost"
												onClick={inc}
											>
												<Icon icon="plus" />
											</Button>
										</FlexboxGrid.Item>
									</FlexboxGrid>
								</FlexboxGrid.Item>
							</>
						)}
						{props.wishlistBtn && (
							<FlexboxGrid.Item>
								<Button
									className="btn wishlist"
									size="xs"
									appearance="ghost"
									onClick={addToWishlist}
								>
									<Icon icon="heart" />
								</Button>
							</FlexboxGrid.Item>
						)}
						{props.removeBtn && (
							<FlexboxGrid.Item>
								<Button
									className="btn remove"
									size="xs"
									appearance="ghost"
									color="red"
									onClick={removeFromCart}
								>
									<Icon icon="trash" />
								</Button>
							</FlexboxGrid.Item>
						)}
					</FlexboxGrid>
				</Col>
			</Row>
		</Grid>
	);
};

export default CartItem;
