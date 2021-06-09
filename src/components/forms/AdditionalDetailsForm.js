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
	Schema,
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
];

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
	regular_price: NumberType().isInteger("It can only be an integer"),
	sell_price: NumberType()
		.isInteger("It can only be an integer")
		.isRequired("This field is required."),
	availability: StringType().isRequired("This field is required."),
});

const AdditionalDetailsForm = ({ formdata, setFormdata }) => {
	return (
		<Form
			fluid
			style={{ padding: "2rem 0" }}
			model={model}
			formValue={formdata}
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
								name="availability"
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
