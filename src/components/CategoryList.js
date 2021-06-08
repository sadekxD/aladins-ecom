import React from "react";
import { Grid, Row, Col } from "rsuite";
import CategoryCard from "./cards/CategoryCard";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const CategoryList = () => {
	return (
		<div style={{ padding: 16 }}>
			<div
				className="container"
				style={{
					backgroundColor: "#fff",
					borderRadius: 10,
					padding: "20px 0 12px 0",
				}}
			>
				<h5 style={{ marginLeft: 16 }}>Categories</h5>
				<Grid style={{ margin: "0 auto" }} fluid>
					<Row>
						{data.map((item, i) => (
							<Col
								key={i}
								xs={12}
								sm={8}
								md={6}
								style={{ padding: ".6rem 1rem" }}
							>
								<CategoryCard />
							</Col>
						))}
					</Row>
				</Grid>
			</div>
		</div>
	);
};

export default CategoryList;
