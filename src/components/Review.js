import React from "react";
import {
	Grid,
	Row,
	Col,
	FlexboxGrid,
	Avatar,
	TagGroup,
	Tag,
	RadioGroup,
	Radio,
	Rate,
} from "rsuite";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Review = ({ formdata }) => {
	return (
		<div className="product-review">
			<Grid fluid style={{ minHeight: 500 }}>
				<Row>
					<Col xs={24} sm={24} md={12}>
						<div className="carousel-wrapper">
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

							<FlexboxGrid className="product-variant" justify="space-between">
								{formdata.colors.length !== 0 ? (
									<FlexboxGrid.Item className="color-variant">
										<h6>Colors:</h6>

										<RadioGroup
											name="radioList"
											inline
											appearance="picker"
											defaultValue="A"
											className="radio-group"
										>
											{formdata.colors.map((color) => {
												return (
													<Radio key={color} value={color}>
														<div
															className="v-option"
															style={{
																backgroundColor: color,
															}}
														></div>
													</Radio>
												);
											})}
										</RadioGroup>
									</FlexboxGrid.Item>
								) : (
									""
								)}
								{formdata.sizes.length !== 0 ? (
									<FlexboxGrid.Item className="size-variant">
										<h6>Sizes:</h6>
										<RadioGroup
											name="radioList"
											inline
											appearance="picker"
											defaultValue="A"
											className="radio-group"
										>
											{formdata.sizes.map((size) => {
												return (
													<Radio key={size} value={size}>
														<div className="v-option">{size}</div>
													</Radio>
												);
											})}
										</RadioGroup>
									</FlexboxGrid.Item>
								) : (
									""
								)}
							</FlexboxGrid>

							<div className="seller-info">
								<h5 className="info-header">Seller Information: </h5>
								<FlexboxGrid align="middle">
									<FlexboxGrid.Item className="avatar-wrapper">
										<Avatar
											size="sm"
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
													size="xs"
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
									${formdata.sell_price}
								</FlexboxGrid.Item>
								<FlexboxGrid.Item className="pre-price">
									{formdata.regular_price && `$${formdata.regular_price}`}
								</FlexboxGrid.Item>
							</FlexboxGrid>

							<TagGroup className="tag-list">
								{formdata.tags.map((tag) => (
									<Tag key={tag} className="tag">
										{tag}
									</Tag>
								))}
							</TagGroup>

							{/* <FlexboxGrid>
								<FlexboxGrid.Item className="btn-group-1">
									<FlexboxGrid>
										<FlexboxGrid.Item className="btn-1">
											<Button appearance="ghost" size="sm">
												Message Seller
											</Button>
										</FlexboxGrid.Item>

										<FlexboxGrid.Item className="btn-2">
											<Button appearance="primary" size="sm">
												Add to Cart
											</Button>
										</FlexboxGrid.Item>
									</FlexboxGrid>
								</FlexboxGrid.Item>
								<FlexboxGrid.Item className="btn-group-2">
									<FlexboxGrid>
										<FlexboxGrid.Item className="btn-1">
											<Button appearance="primary" size="sm">
												<Icon icon="heart-o" size="sm" />
											</Button>
										</FlexboxGrid.Item>
										<FlexboxGrid.Item className="btn-2">
											<Button appearance="primary" size="sm">
												<Icon icon="share" size="sm" />
											</Button>
										</FlexboxGrid.Item>
									</FlexboxGrid>
								</FlexboxGrid.Item>
							</FlexboxGrid>
							<p className="date-info">
								Listed two weeks ago in dhaka Bangladesh
							</p> */}
						</div>
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default Review;
