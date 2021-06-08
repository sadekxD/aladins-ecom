import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
	Navbar,
	FlexboxGrid,
	Button,
	Icon,
	Form,
	IconButton,
	FormControl,
	Grid,
	Row,
	Col,
} from "rsuite";
import FilterDropdown from "./FilterPopper";

const NavbarC = () => {
	const [searchValue, setSearchValue] = useState({ search: "" });
	const history = useHistory();

	const handleSearch = (e) => {
		history.push({
			pathname: "/search",
			search: `?search=${searchValue.search}`,
		});
	};

	return (
		<div className="nav-container">
			<Navbar className="nav">
				<Navbar.Body>
					<Grid fluid>
						<Row>
							<Col xs={24}>
								<FlexboxGrid align="middle">
									<FlexboxGrid.Item>
										<FlexboxGrid.Item className="search-form-md">
											<Form
												className="search-form"
												onChange={(val) => setSearchValue(val)}
												onSubmit={handleSearch}
											>
												<FlexboxGrid align="middle">
													<FlexboxGrid.Item>
														<FormControl
															placeholder="Search..."
															value={searchValue.search}
															name="search"
														/>
													</FlexboxGrid.Item>
													<FlexboxGrid.Item>
														<IconButton
															className="btn"
															appearance="ghost"
															icon={<Icon icon="search" />}
														/>
													</FlexboxGrid.Item>
												</FlexboxGrid>
											</Form>
										</FlexboxGrid.Item>
									</FlexboxGrid.Item>
									<FlexboxGrid.Item style={{ flex: 1 }}>
										<FlexboxGrid className="nav-links" align="middle">
											<FlexboxGrid.Item>
												<FilterDropdown />
											</FlexboxGrid.Item>
											<FlexboxGrid.Item>
												<Link to="/wishlist">
													<Button className="btn" size="xs" appearance="ghost">
														<Icon
															className="btn-icon"
															size="lg"
															icon="heart-o"
														/>
														Wishlist
													</Button>
												</Link>
											</FlexboxGrid.Item>
											<FlexboxGrid.Item>
												<Link to="/create">
													<Button className="btn" size="xs" appearance="ghost">
														<Icon className="btn-icon" size="lg" icon="plus" />
														Sell
													</Button>
												</Link>
											</FlexboxGrid.Item>
											<FlexboxGrid.Item>
												<Link to="/cart">
													<Button className="btn" size="xs" appearance="ghost">
														<Icon
															className="btn-icon"
															size="lg"
															icon="cart-plus"
														/>
														Cart
													</Button>
												</Link>
											</FlexboxGrid.Item>
											<FlexboxGrid.Item>
												<Link to="/profile">
													<Button className="btn" size="xs" appearance="ghost">
														<Icon
															className="btn-icon"
															size="lg"
															icon="user-o"
														/>
														Profile
													</Button>
												</Link>
											</FlexboxGrid.Item>
										</FlexboxGrid>
									</FlexboxGrid.Item>
								</FlexboxGrid>
							</Col>
							<Col xs={24} className="search-form-sm">
								<Form
									className="search-form"
									onChange={(val) => setSearchValue(val)}
									onSubmit={handleSearch}
									fluid
								>
									<FlexboxGrid align="middle">
										<FlexboxGrid.Item style={{ flex: 1 }}>
											<FormControl
												placeholder="Search..."
												value={searchValue.search}
												name="search"
											/>
										</FlexboxGrid.Item>
										<FlexboxGrid.Item>
											<IconButton
												className="btn"
												appearance="ghost"
												icon={<Icon icon="search" />}
											/>
										</FlexboxGrid.Item>
									</FlexboxGrid>
								</Form>
							</Col>
						</Row>
					</Grid>
				</Navbar.Body>
			</Navbar>
		</div>
	);
};

export default NavbarC;
