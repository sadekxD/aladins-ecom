import React from "react";
import { Grid, Row, Col, FlexboxGrid, Rate } from "rsuite";
import ProductList from "../components/ProductList";

const data = [1, 2, 3, 4, 5, 6, 7, 8];

const Profile = () => {
	return (
		<div>
			<div className="container">
				<Grid className="profile-container" fluid>
					<Row>
						<Col xs={24} className="col-1">
							<div className="cover">
								<img
									src="https://images.unsplash.com/photo-1618588507085-c79565432917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
									alt="p"
								/>
							</div>
						</Col>
						<Col xs={24} className="col-2">
							<FlexboxGrid>
								<FlexboxGrid.Item sm={24} md={6} className="img-wrapper">
									<img
										src="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe-21/johndoeyork2.jpg"
										alt="p"
									/>
								</FlexboxGrid.Item>
								<FlexboxGrid.Item sm={24} md={18} style={{ flex: 1 }}>
									<FlexboxGrid
										className="user-info"
										justify="space-between"
										align="middle"
									>
										<FlexboxGrid.Item>
											<h5>John Doe</h5>
											<p>@johnDoe</p>
										</FlexboxGrid.Item>
										<FlexboxGrid.Item>
											<FlexboxGrid align="middle">
												<FlexboxGrid.Item className="mr-2 font-sm">
													Seller Rating:
												</FlexboxGrid.Item>
												<FlexboxGrid.Item className="font-sm">
													<Rate
														className="rate"
														defaultValue={4.5}
														size="xs"
														allowHalfp
														readOnly
														color="blue"
													/>
												</FlexboxGrid.Item>
											</FlexboxGrid>
											<FlexboxGrid align="middle">
												<FlexboxGrid.Item className="mr-2 font-sm">
													Lives on:
												</FlexboxGrid.Item>
												<FlexboxGrid.Item>
													<a href="#" className="font-sm" color="blue">
														Hathazari, Chittagong
													</a>
												</FlexboxGrid.Item>
											</FlexboxGrid>
										</FlexboxGrid.Item>
									</FlexboxGrid>
								</FlexboxGrid.Item>
							</FlexboxGrid>
						</Col>
					</Row>
				</Grid>
				<div className="product-container">
					<ProductList header="Products" data={data} />
				</div>
			</div>
		</div>
	);
};

export default Profile;
