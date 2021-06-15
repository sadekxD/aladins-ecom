import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import {
	Grid,
	Row,
	Col,
	FlexboxGrid,
	Avatar,
	TagGroup,
	Tag,
	Button,
	Icon,
	SelectPicker,
	Rate,
} from "rsuite";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ShareModal from "./modals/ShareModal";
import { MUTATION_ADD_ITEM_TO_CART } from "../mutaions/cartMutations";
import { cartItems, wishlist } from "../cache/caches";

const ProductDetail = ({ productData }) => {
	const [addItemToCart] = useMutation(MUTATION_ADD_ITEM_TO_CART);
	const [variants, setVariants] = useState({ color: "", size: "" });
	const [show, setShow] = useState(false);
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	useEffect(() => {
		let total = 0;

		for (var i = 0; i < cartItems().items.length; i++) {
			let item = cartItems().items[i];
			total += item.sell_price * item.qty;
		}

		cartItems({ ...cartItems(), total: total });
	}, [cartItems()]);

	const addToCart = (product) => {
		const { colors, sizes } = product;

		addItemToCart({
			variables: {
				title: product.title,
			},
		});

		let newItem = {
			...product,
			variants: {
				color: variants.color,
				size: variants.size,
			},
			qty: 1,
		};

		if (colors.length !== 0 && sizes.length !== 0) {
			if (!variants.color || !variants.size) {
				alert("Please choose a variant!");
			} else {
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
			}
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

	const addToWishlist = (product) => {
		let checkExistedItem = wishlist().filter((item) => item.id === product.id);

		if (checkExistedItem.length) {
			alert("Item already exists!!");
			return;
		}

		wishlist([...wishlist(), product]);
	};

	const open = () => {
		setShow(true);
	};

	return (
		<div className="product-detail">
			<ShareModal show={show} setShow={setShow} />
			<div className="container">
				<Grid fluid className="detail-wrapper">
					{productData.map((product) => (
						<Row key={product.id}>
							<Col xs={24} sm={24} md={12}>
								<div className="carousel-wrapper">
									<Carousel
										showIndicators={false}
										showArrows={false}
										showStatus={false}
									>
										{product.images.map((image, i) => (
											<div key={i}>
												<img src={image} alt={`image-${i}`} />
											</div>
										))}
									</Carousel>
								</div>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<div className="product-info">
									<h4 className="info-title">{product.title}</h4>

									<div className="info-detail-wrapper">
										<h5 className="info-header">Details: </h5>
										<p className="info-detail">{product.product_detail}</p>
									</div>

									<FlexboxGrid
										className="product-variant"
										justify="space-between"
									>
										{product.colors.length !== 0 ? (
											<FlexboxGrid.Item>
												<h6>Colors:</h6>
												<SelectPicker
													className="picker"
													searchable={false}
													onChange={(val) =>
														setVariants({ ...variants, color: val })
													}
													data={product.colors.map((color) => {
														return { label: color, value: color };
													})}
												/>
											</FlexboxGrid.Item>
										) : (
											""
										)}
										{product.sizes.length !== 0 ? (
											<FlexboxGrid.Item>
												<h6>Sizes:</h6>
												<SelectPicker
													className="picker"
													searchable={false}
													onChange={(val) =>
														setVariants({ ...variants, size: val })
													}
													data={product.sizes.map((size) => {
														return { label: size, value: size };
													})}
												/>
											</FlexboxGrid.Item>
										) : (
											""
										)}
									</FlexboxGrid>

									<div className="seller-info">
										<h5 className="info-header">Seller Information: </h5>
										<FlexboxGrid>
											<FlexboxGrid.Item className="avatar-wrapper">
												<Avatar
													size="lg"
													src="https://cdn1.vectorstock.com/i/1000x1000/45/55/celebrity-men-actor-in-suit-flat-style-avatar-vector-11784555.jpg"
												/>
											</FlexboxGrid.Item>
											<FlexboxGrid.Item>
												<h6 className="name">Rasel Chowdhury</h6>
												<FlexboxGrid align="middle" className="rating-wrapper">
													<FlexboxGrid.Item>Seller Rating:</FlexboxGrid.Item>
													<FlexboxGrid.Item className="rating-wrapper">
														<Rate
															className="rate"
															defaultValue={4.5}
															size="sm"
															allowHalf
															readOnly
															color="blue"
														/>
													</FlexboxGrid.Item>
												</FlexboxGrid>
											</FlexboxGrid.Item>
										</FlexboxGrid>
									</div>

									<FlexboxGrid align="middle" className="price-info">
										<FlexboxGrid.Item className="price">
											<span>$</span>
											{product.sell_price}
										</FlexboxGrid.Item>
										<FlexboxGrid.Item className="pre-price">
											{product.regular_price}
										</FlexboxGrid.Item>
									</FlexboxGrid>

									<TagGroup className="tag-list">
										{product.tags.map((tag) => (
											<Tag key={tag} className="tag">
												{tag}
											</Tag>
										))}
									</TagGroup>

									<FlexboxGrid>
										<FlexboxGrid.Item className="btn-group">
											<FlexboxGrid>
												<FlexboxGrid.Item>
													<Button appearance="ghost">Message Seller</Button>
												</FlexboxGrid.Item>

												<FlexboxGrid.Item className="btn-wrapper">
													<Button
														onClick={() => addToCart(product)}
														appearance="primary"
													>
														Add to Cart
													</Button>
												</FlexboxGrid.Item>
											</FlexboxGrid>
										</FlexboxGrid.Item>
										<FlexboxGrid.Item className="btn-group">
											<FlexboxGrid>
												<FlexboxGrid.Item>
													<Button
														onClick={() => addToWishlist(product)}
														appearance="primary"
													>
														<Icon icon="heart-o" size="lg" />
													</Button>
												</FlexboxGrid.Item>
												<FlexboxGrid.Item className="btn-wrapper">
													<Button appearance="primary" onClick={open}>
														<Icon icon="share" size="lg" />
													</Button>
												</FlexboxGrid.Item>
											</FlexboxGrid>
										</FlexboxGrid.Item>
									</FlexboxGrid>
									<p className="date-info">
										Listed two weeks ago in dhaka Bangladesh
									</p>
								</div>
							</Col>
						</Row>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default ProductDetail;
