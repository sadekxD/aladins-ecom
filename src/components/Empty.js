import React from "react";
import { Link } from "react-router-dom";
import { Button, Col } from "rsuite";

const Empty = ({ message }) => {
	return (
		<Col className="empty">
			<h4>{message}</h4>
			<Link to="/">
				<Button appearance="primary" className="btn">
					Back To Shopping
				</Button>
			</Link>
		</Col>
	);
};

export default Empty;
