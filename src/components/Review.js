import React from "react";
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

const Review = ({ formdata }) => {
	return (
		<div>
			<div
				className="product-detail"
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
									{formdata.images.map((image, i) => {
										const src = URL.createObjectURL(image.blobFile);
										return (
											<div key={i}>
												<img src={src} alt={`image-${i}`} />
											</div>
										);
									})}
								</Carousel>
							</div>
						</Col>
						<Col xs={24} sm={24} md={12}>
							<div className="product-info">
								<h4 className="info-title">{formdata.title}</h4>

								<div className="info-detail-wrapper">
									<h5 className="info-header">Details: </h5>
									<p className="info-detail">{formdata.product_detail}</p>
								</div>

								<FlexboxGrid
									className="product-variant"
									justify="space-between"
								>
									{formdata.colors.length !== 0 ? (
										<FlexboxGrid.Item>
											<h6>Colors:</h6>
											<SelectPicker
												className="picker"
												searchable={false}
												data={formdata.colors.map((color) => {
													return { label: color, value: color };
												})}
											/>
										</FlexboxGrid.Item>
									) : (
										""
									)}
									{formdata.sizes.length !== 0 ? (
										<FlexboxGrid.Item>
											<h6>Sizes:</h6>
											<SelectPicker
												className="picker"
												searchable={false}
												data={formdata.sizes.map((size) => {
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
										{formdata.sell_price}
									</FlexboxGrid.Item>
									<FlexboxGrid.Item className="pre-price">
										{formdata.regular_price}
									</FlexboxGrid.Item>
								</FlexboxGrid>

								<TagGroup className="tag-list">
									{formdata.tags.map((tag) => (
										<Tag key={tag} className="tag">
											{tag}
										</Tag>
									))}
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

export default Review;