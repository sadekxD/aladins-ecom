import React, { useState } from "react";
import {
	Grid,
	Row,
	Col,
	Form,
	FormControl,
	ControlLabel,
	FormGroup,
	SelectPicker,
} from "rsuite";

const items = [
	{
		label: "Eugenia",
		value: "Eugenia",
		role: "Master",
	},
	{
		label: "Kariane",
		value: "Kariane",
		role: "Master",
	},
	{
		label: "Louisa",
		value: "Louisa",
		role: "Master",
	},
	{
		label: "Marty",
		value: "Marty",
		role: "Master",
	},
	{
		label: "Kenya",
		value: "Kenya",
		role: "Master",
	},
	{
		label: "Hal",
		value: "Hal",
		role: "Developer",
	},
	{
		label: "Julius",
		value: "Julius",
		role: "Developer",
	},
	{
		label: "Travon",
		value: "Travon",
		role: "Developer",
	},
	{
		label: "Vincenza",
		value: "Vincenza",
		role: "Developer",
	},
	{
		label: "Dominic",
		value: "Dominic",
		role: "Developer",
	},
	{
		label: "Pearlie",
		value: "Pearlie",
		role: "Guest",
	},
	{
		label: "Tyrel",
		value: "Tyrel",
		role: "Guest",
	},
	{
		label: "Jaylen",
		value: "Jaylen",
		role: "Guest",
	},
	{
		label: "Rogelio",
		value: "Rogelio",
		role: "Guest",
	},
];

const AdditionalDetailsForm = ({ formdata, setFormdata }) => {
	return (
		<Form
			fluid
			style={{ padding: "2rem 0" }}
			onChange={(formValue) => {
				setFormdata({ ...formdata, ...formValue });
			}}
		>
			<Grid fluid>
				<Row>
					<Col xs={24} sm={12}>
						<FormGroup>
							<ControlLabel>
								Regular Price <span style={{ fontSize: 10 }}>(optional)</span>
							</ControlLabel>
							<FormControl name="regular_price" />
						</FormGroup>
					</Col>
					<Col xs={24} sm={12}>
						<FormGroup>
							<ControlLabel>Sell Price</ControlLabel>
							<FormControl name="sell_price" />
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>
								Delivery Option <span style={{ fontSize: 10 }}>(optional)</span>
							</ControlLabel>
							<FormControl
								name="delivery_option"
								accepter={SelectPicker}
								searchable={false}
								style={{ width: "100%" }}
							/>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>Availability</ControlLabel>
							<FormControl
								name="avalability"
								accepter={SelectPicker}
								searchable={false}
								style={{ width: "100%" }}
							/>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>Location</ControlLabel>
							<FormControl
								name="location"
								placeholder="eg. Hathazari, Chittagong"
							/>
						</FormGroup>
					</Col>
				</Row>
			</Grid>
		</Form>
	);
};

const style = {
	marginTop: 16,
};

export default AdditionalDetailsForm;
