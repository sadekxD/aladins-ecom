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
	RadioGroup,
	Radio,
	Rate,
} from "rsuite";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SharePopper from "./SharePopper";

const ProductDetail = () => {
	const [show, setShow] = useState(false);

	const open = () => {
		setShow(true);
	};

	return (
		<div>
			<SharePopper show={show} setShow={setShow} />
			<div
				className="container product-detail"
				style={{
					padding: "1.5rem 1rem",
					backgroundColor: "#fff",
					borderRadius: 16,
				}}
			>
				<Grid fluid style={{ minHeight: 500 }}>
					<Row>
						<Col xs={24} sm={24} md={12}>
							<div style={{ padding: "1rem 0rem" }}>
								<Carousel
									showIndicators={false}
									showArrows={false}
									showStatus={false}
								>
									<div>
										<img
											src="https://www.hautetime.com/wp-content/uploads/2015/08/Breguet-7077-La-Tradition-Chronograph-Inde--pendant.jpg"
											alt="p"
										/>
									</div>
									<div>
										<img
											src="https://www.hautetime.com/wp-content/uploads/2015/08/Breguet-7077-La-Tradition-Chronograph-Inde--pendant.jpg"
											alt="p"
										/>
									</div>
									<div>
										<img
											src="https://www.hautetime.com/wp-content/uploads/2015/08/Breguet-7077-La-Tradition-Chronograph-Inde--pendant.jpg"
											alt="p"
										/>
									</div>
								</Carousel>
							</div>
						</Col>
						<Col xs={24} sm={24} md={12}>
							<div className="product-info">
								<h4 className="info-title">Round Collar T-Shirt For Men</h4>

								<div className="info-detail-wrapper">
									<h5 className="info-header">Details: </h5>
									<p className="info-detail">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</p>
								</div>

								<FlexboxGrid className="extra-info">
									<FlexboxGrid.Item style={{ marginRight: 10, fontSize: 16 }}>
										<span style={{ fontWeight: 600 }}>Brand</span>: Udemy
									</FlexboxGrid.Item>
									<FlexboxGrid.Item style={{ marginRight: 10, fontSize: 16 }}>
										<span style={{ fontWeight: 600 }}>Brand</span>: Udemy
									</FlexboxGrid.Item>
									<FlexboxGrid.Item style={{ marginRight: 10, fontSize: 16 }}>
										<span style={{ fontWeight: 600 }}>Brand</span>: Udemy
									</FlexboxGrid.Item>
								</FlexboxGrid>

								<FlexboxGrid
									className="product-variant"
									justify="space-between"
								>
									<FlexboxGrid.Item>
										<h6>Colors:</h6>
										<SelectPicker className="picker" searchable={false} />
									</FlexboxGrid.Item>
									<FlexboxGrid.Item>
										<h6>Sizes:</h6>
										<SelectPicker className="picker" searchable={false} />
									</FlexboxGrid.Item>
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
										<span>$</span>200
									</FlexboxGrid.Item>
									<FlexboxGrid.Item className="pre-price">
										$230
									</FlexboxGrid.Item>
								</FlexboxGrid>

								<TagGroup className="tag-list">
									<Tag className="tag">Men</Tag>
									<Tag className="tag">Kids</Tag>
									<Tag className="tag">Shirt</Tag>
								</TagGroup>

								<FlexboxGrid>
									<FlexboxGrid.Item style={{ marginTop: 20, marginRight: 16 }}>
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

export default ProductDetail;
