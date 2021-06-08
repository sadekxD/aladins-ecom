import React, { useState } from "react";
import { FlexboxGrid, Icon, Button, Avatar, Grid, Row, Col } from "rsuite";

const CartItem = ({ counterBtn, removeBtn, wishListBtn }) => {
	const [count, setCount] = useState(0);

	const inc = () => {
		setCount((pre) => pre + 1);
	};

	const dec = () => {
		if (count > 0) setCount((pre) => pre - 1);
	};

	return (
		<Grid fluid className="cart-item">
			<Row>
				<Col xs={10} sm={6} md={6}>
					<div>
						<img
							src="https://5.imimg.com/data5/MP/AL/MM/SELLER-3426132/cotton-drill-cloth-fabric-500x500.jpg"
							alt="s"
							className="cart-item-image"
						/>
					</div>
				</Col>
				<Col xs={14} sm={18} md={18}>
					<h5 className="cart-item-title">
						Round Collar T-Shirt For Every Mens and Kids
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
							<h4 className="price" style={{ color: "#000" }}>
								$400
							</h4>
						</FlexboxGrid.Item>
						<FlexboxGrid.Item>
							<h4
								className="pre-price"
								style={{
									textDecoration: "line-through",
									paddingLeft: 10,
									color: "rgba(0,0,0,.3)",
								}}
							>
								$400
							</h4>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</Col>
				<Col xs={24}>
					<FlexboxGrid align="middle" justify="end" className="cart-control">
						{counterBtn && (
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
											<div className="count">{count}</div>
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
						{wishListBtn && (
							<FlexboxGrid.Item>
								<Button
									className="btn"
									size="xs"
									appearance="ghost"
									style={{ marginLeft: 14 }}
								>
									<Icon icon="heart" />
								</Button>
							</FlexboxGrid.Item>
						)}
						{removeBtn && (
							<FlexboxGrid.Item style={{ marginLeft: 14 }}>
								<Button
									className="btn"
									size="xs"
									appearance="ghost"
									color="red"
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
