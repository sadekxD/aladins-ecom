import React from "react";
import { Link } from "react-router-dom";
import { FlexboxGrid, Icon, Button, Avatar, Grid, Row, Col } from "rsuite";

// cache
import { cartItems, wishlist } from "../../cache/caches";

const WishlistCard = (props) => {
	const removeFromWishlist = () => {
		const newWishlist = wishlist().filter((item) => item.id !== props.id);

		wishlist([...newWishlist]);
	};

	const addToCart = () => {
		const product = wishlist().find((item) => item.id === props.id);
		const { colors, sizes } = product;

		let newItem = {
			...product,
			variants: {
				color: colors.length !== 0 ? colors[0] : "",
				size: sizes.length !== 0 ? sizes[0] : "",
			},
			qty: 1,
		};

		if (colors.length !== 0 && sizes.length !== 0) {
			let checkExistedItem = cartItems().items.filter((item) => {
				return item.id === product.id;
			});

			if (checkExistedItem.length) {
				let checkVariants = checkExistedItem.filter((item) => {
					return (
						item.variants.color === newItem.variants.color &&
						item.variants.size === newItem.variants.size
					);
				});
				if (checkVariants.length) {
					alert("Please choose another variant.");
					return;
				}
				cartItems({
					...cartItems(),
					items: [...cartItems().items, newItem],
				});
				alert("Item added in the cart");
				return;
			}

			cartItems({
				...cartItems(),
				items: [...cartItems().items, newItem],
			});
			alert("Item added in the cart");
		} else {
			let checkExistedItem = cartItems().items.filter(
				(item) => item.id === product.id
			);

			if (checkExistedItem.length) {
				alert("Item already exists!!");
				return;
			}

			cartItems({ ...cartItems(), items: [...cartItems().items, newItem] });
			alert("Item added in the cart");
		}
	};

	return (
		<Grid fluid className="wishlist-item">
			<Row>
				<Col xs={10} sm={6} md={6}>
					<div>
						<img
							src={props.images[0]}
							alt="s"
							className="wishlist-item-image"
						/>
					</div>
				</Col>
				<Col xs={14} sm={18} md={18}>
					<Link to={`/product/${props.id}`}>
						<h5 className="wishlist-item-title">{props.title}</h5>
					</Link>
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
					<FlexboxGrid
						align="middle"
						justify="end"
						className="wishlist-control"
					>
						<FlexboxGrid.Item style={{ marginLeft: 14 }}>
							<Button onClick={addToCart} size="xs" appearance="primary">
								Add to Cart
							</Button>
						</FlexboxGrid.Item>
						<FlexboxGrid.Item style={{ marginLeft: 14 }}>
							<Button
								onClick={removeFromWishlist}
								className="btn"
								size="xs"
								appearance="ghost"
								color="red"
							>
								<Icon icon="trash" />
							</Button>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</Col>
			</Row>
		</Grid>
	);
};

export default WishlistCard;
