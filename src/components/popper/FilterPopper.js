import React, { useState } from "react";
import { useHistory } from "react-router";
import {
	Whisper,
	Popover,
	Button,
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	RangeSlider,
	Grid,
	Row,
	Col,
	Icon,
	InputNumber,
	InputGroup,
	SelectPicker,
} from "rsuite";
import PreventOverflowContainer from "../../utils/PrevenOverflowContainer";

const items = [
	{
		label: "Old",
		value: "Old",
		role: "Master",
	},
	{
		label: "New",
		value: "New",
		role: "Master",
	},
	{
		label: "Used",
		value: "Used",
		role: "Master",
	},
];

const FilterPopper = ({ ...rest }) => {
	const [filterValue, setFilterValue] = useState({
		location: "",
		range: [0, 10000],
		condition: "",
	});
	const history = useHistory();

	const handleFilter = () => {
		history.push({
			pathname: "/filter",
			search: `?location=${filterValue.location}&min=${filterValue.range[0]}&max=${filterValue.range[1]}&condition=${filterValue.condition}`,
		});
	};

	console.log(filterValue);

	return (
		<Popover {...rest} full>
			<div className="filter-popper">
				<Form
					className="filter-form"
					onChange={(val) => setFilterValue({ ...filterValue, ...val })}
					fluid
				>
					<FormGroup className="form-group">
						<ControlLabel>Location</ControlLabel>
						<FormControl
							value={filterValue.location}
							name="location"
							placeholder="Location"
						/>
					</FormGroup>
					<Grid fluid>
						<Row>
							<Col xs={24}>
								<RangeSlider
									min={100}
									max={10000}
									value={filterValue.range}
									onChange={(value) => {
										setFilterValue({ ...filterValue, range: value });
									}}
								/>
							</Col>
							<Col xs={24}>
								<InputGroup className="input-group">
									<InputNumber
										min={0}
										max={10000}
										value={filterValue.range[0]}
										onChange={(nextValue) => {
											const [start, end] = filterValue.range;
											if (nextValue > end) {
												return;
											}
											setFilterValue({
												...filterValue,
												range: [parseInt(nextValue), parseInt(end)],
											});
										}}
									/>
									<InputGroup.Addon>to</InputGroup.Addon>
									<InputNumber
										min={0}
										max={10000}
										value={filterValue.range[1]}
										onChange={(nextValue) => {
											const [start, end] = filterValue.range;
											if (start > nextValue) {
												return;
											}

											setFilterValue({
												...filterValue,
												range: [parseInt(start), parseInt(nextValue)],
											});
										}}
									/>
								</InputGroup>
							</Col>
						</Row>
					</Grid>
					<FormGroup className="form-group-2">
						<ControlLabel>Condition</ControlLabel>
						<PreventOverflowContainer>
							{(getContainer) => (
								<FormControl
									className="form-control"
									name="condition"
									accepter={SelectPicker}
									value={filterValue.condition}
									data={items}
									searchable={false}
									container={getContainer}
								/>
							)}
						</PreventOverflowContainer>
					</FormGroup>
					<Button
						onClick={handleFilter}
						className="filter-btn"
						appearance="ghost"
					>
						<Icon className="filter-icon" icon="filter" appearance="ghost" />
						Filter
					</Button>
				</Form>
			</div>
		</Popover>
	);
};

const FilterDropdown = () => {
	const triggerRef = React.createRef();

	return (
		<Whisper
			placement="bottomStart"
			trigger="click"
			triggerRef={triggerRef}
			speaker={<FilterPopper />}
		>
			<Button className="btn" size="xs" appearance="ghost">
				<Icon className="btn-icon" size="lg" icon="filter" />
				Filter
			</Button>
		</Whisper>
	);
};

export default FilterDropdown;
