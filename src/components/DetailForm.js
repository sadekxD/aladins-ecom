import React, { useState } from "react";
import {
	Grid,
	Row,
	Col,
	Form,
	FormControl,
	ControlLabel,
	FormGroup,
	HelpBlock,
	SelectPicker,
	TagPicker,
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

const DetailForm = ({ formdata, setFormdata }) => {
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
							<ControlLabel>Product Title</ControlLabel>
							<FormControl name="title" />
							<HelpBlock>Required</HelpBlock>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12}>
						<FormGroup>
							<ControlLabel>Products Category</ControlLabel>
							<FormControl
								name="category"
								accepter={SelectPicker}
								data={[
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
								]}
								searchable={false}
								style={{ width: "100%" }}
							/>
							<HelpBlock>Required</HelpBlock>
						</FormGroup>
					</Col>
					<Col xs={24} style={style}>
						<FormGroup>
							<ControlLabel>
								Product Detail
								<span style={{ fontSize: 10 }}>(optional)</span>
							</ControlLabel>
							<FormControl
								name="product_detail"
								rows={5}
								componentClass="textarea"
							/>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>Colors</ControlLabel>
							<FormControl
								name="colors"
								placeholder="Colors"
								creatable
								accepter={TagPicker}
								data={items}
								style={{ width: "100%" }}
							/>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>Sizes</ControlLabel>
							<FormControl
								name="sizes"
								placeholder="Sizes"
								creatable
								accepter={TagPicker}
								data={items}
								style={{ width: "100%" }}
							/>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>Products Condition</ControlLabel>
							<FormControl
								name="product_condition"
								accepter={SelectPicker}
								data={[
									{
										label: "new",
										value: "new",
										role: "Master",
									},
									{
										label: "old",
										value: "old",
										role: "Master",
									},
								]}
								searchable={false}
								style={{ width: "100%" }}
							/>
							<HelpBlock>Required</HelpBlock>
						</FormGroup>
					</Col>
					<Col xs={24} sm={12} style={style}>
						<FormGroup>
							<ControlLabel>Products Tag</ControlLabel>
							<FormControl
								name="tags"
								placeholder="Tag"
								creatable
								accepter={TagPicker}
								data={items}
								style={{ width: "100%" }}
							/>
							<HelpBlock>Required</HelpBlock>
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

export default DetailForm;
