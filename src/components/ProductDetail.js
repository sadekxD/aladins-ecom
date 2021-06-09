import React, { useState } from "react";
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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ShareModal from "./modals/ShareModal";

const ProductDetail = ({ productData }) => {
	const [show, setShow] = useState(false);

	const open = () => {
		setShow(true);
	};

	return (
		<div>
			<ShareModal show={show} setShow={setShow} />
			<div
				className="container product-detail"
				style={{
					padding: "1.5rem 1rem",
					backgroundColor: "#fff",
					borderRadius: 16,
				}}
			>
				<Grid fluid style={{ minHeight: 500 }}>
					{productData.map((product) => (
						<Row key={product.id}>
							<Col xs={24} sm={24} md={12}>
								<div style={{ padding: "1rem 0rem" }}>
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
										<FlexboxGrid fluid>
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
													<FlexboxGrid.Item style={{ paddingLeft: 6 }}>
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
										<FlexboxGrid.Item
											style={{ marginTop: 20, marginRight: 16 }}
										>
											<FlexboxGrid>
												<FlexboxGrid.Item>
													<Button appearance="ghost">Message Seller</Button>
												</FlexboxGrid.Item>

												<FlexboxGrid.Item style={{ marginLeft: 16 }}>
													<Button appearance="primary">Add to Cart</Button>
												</FlexboxGrid.Item>
											</FlexboxGrid>
										</FlexboxGrid.Item>
										<FlexboxGrid.Item style={{ marginTop: 20 }}>
											<FlexboxGrid>
												<FlexboxGrid.Item>
													<Button
														appearance="primary"
														style={{ fontWeight: 600, letterSpacing: 1 }}
													>
														<Icon icon="heart-o" size="lg" />
													</Button>
												</FlexboxGrid.Item>
												<FlexboxGrid.Item style={{ marginLeft: 16 }}>
													<Button
														appearance="primary"
														onClick={open}
														style={{ fontWeight: 600, letterSpacing: 1 }}
													>
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

{
	/* <FlexboxGrid>
	<FlexboxGrid.Item>
		<Checkbox style={{ display: "none" }}></Checkbox>
		<div>
			<div
				style={{
					height: 36,
					width: 36,
					borderRadius: 6,
					marginRight: 10,
					fontWeight: 600,
					fontSize: 24,
					border: "2px solid rgba(0,0,0,.2)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				S
			</div>
		</div>
	</FlexboxGrid.Item>
	<FlexboxGrid.Item>
		<Checkbox style={{ display: "none" }}></Checkbox>
		<div>
			<div
				style={{
					height: 36,
					width: 36,
					borderRadius: 6,
					marginRight: 10,
					fontWeight: 600,
					fontSize: 24,
					border: "2px solid rgba(0,0,0,.2)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				M
			</div>
		</div>
	</FlexboxGrid.Item>
	<FlexboxGrid.Item>
		<Checkbox style={{ display: "none" }}></Checkbox>
		<div>
			<div
				style={{
					height: 36,
					width: 36,
					borderRadius: 6,
					marginRight: 10,
					fontWeight: 600,
					fontSize: 24,
					border: "2px solid rgba(0,0,0,.2)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				L
			</div>
		</div>
	</FlexboxGrid.Item>
</FlexboxGrid> */
}

{
	/* <RadioGroup
	className="variant-row"
	name="radioList"
	inline
	appearance="picker"
	defaultValue="A"
>
	<Radio value="A">
		<div
			style={{
				height: 36,
				width: 36,
				borderRadius: 6,
				backgroundColor: "#4FA2F5",
			}}
		></div>
	</Radio>
	<Radio value="B">
		<div
			style={{
				height: 36,
				width: 36,
				borderRadius: 6,
				backgroundColor: "#4FA2F5",
			}}
		></div>
	</Radio>
	<Radio value="C">
		<div
			style={{
				height: 36,
				width: 36,
				borderRadius: 6,
				backgroundColor: "#4FA2F5",
			}}
		></div>
	</Radio>
	<Radio value="D">
		<div
			style={{
				height: 36,
				width: 36,
				borderRadius: 6,
				backgroundColor: "#4FA2F5",
			}}
		></div>
	</Radio>
</RadioGroup> */
}

{
	/* <FlexboxGrid className="extra-info">
	<FlexboxGrid.Item style={{ marginRight: 10, fontSize: 16 }}>
		<span style={{ fontWeight: 600 }}>Brand</span>: Udemy
	</FlexboxGrid.Item>
	<FlexboxGrid.Item style={{ marginRight: 10, fontSize: 16 }}>
		<span style={{ fontWeight: 600 }}>Brand</span>: Udemy
	</FlexboxGrid.Item>
	<FlexboxGrid.Item style={{ marginRight: 10, fontSize: 16 }}>
		<span style={{ fontWeight: 600 }}>Brand</span>: Udemy
	</FlexboxGrid.Item>
</FlexboxGrid> */
}

export default ProductDetail;
