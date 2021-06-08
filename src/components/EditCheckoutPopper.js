import React from "react";
import {
	Modal,
	Grid,
	Row,
	Col,
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	HelpBlock,
	Button,
} from "rsuite";

const EditCheckoutPopper = ({
	show,
	setShow,
	checkoutInfo,
	setCheckoutInfo,
}) => {
	const close = () => {
		setShow(false);
	};

	return (
		<div>
			<Modal
				style={{ width: "95%", maxWidth: 800, margin: "0 auto", marginTop: 30 }}
				show={show}
				onHide={close}
			>
				<Modal.Header>
					<Modal.Title>Shipping Address</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form
						fluid
						onChange={(val) => setCheckoutInfo({ ...checkoutInfo, ...val })}
					>
						<Grid fluid>
							<Row>
								<Col sm={24} md={12}>
									<FormGroup>
										<ControlLabel>Username</ControlLabel>
										<FormControl name="username" />
										<HelpBlock>Required</HelpBlock>
									</FormGroup>
								</Col>
								<Col sm={24} md={12}>
									<FormGroup>
										<ControlLabel>Phone number</ControlLabel>
										<FormControl name="phone_number" />
										<HelpBlock>Required</HelpBlock>
									</FormGroup>
								</Col>
								<Col sm={24} md={12}>
									<FormGroup>
										<ControlLabel>Address</ControlLabel>
										<FormControl
											name="address"
											rows={5}
											name="textarea"
											componentClass="textarea"
										/>
										<HelpBlock>Required</HelpBlock>
									</FormGroup>
								</Col>
								<Col sm={24} md={12}>
									<FormGroup>
										<ControlLabel>Email</ControlLabel>
										<FormControl name="email" />
										<HelpBlock>Required</HelpBlock>
									</FormGroup>
								</Col>
							</Row>
						</Grid>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={close} appearance="ghost">
						Done
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default EditCheckoutPopper;
