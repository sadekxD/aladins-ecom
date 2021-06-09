import React, { useState } from "react";
import { Grid, Row, Col, Steps, ButtonGroup, Button } from "rsuite";
import DetailForm from "./DetailForm";
import ImageUploader from "./Uploader";
import AdditionalDetailsForm from "./AdditionalDetailsForm";
import Review from "../Review";

const CreateForm = () => {
	const [step, setStep] = useState(0);
	const [formdata, setFormdata] = useState({
		title: "",
		category: "",
		product_detail: "",
		colors: [],
		sizes: [],
		product_condition: "",
		tags: [],
		images: [],
		regular_price: "",
		sell_price: "",
		delivery_option: "",
		availability: "",
		location: "",
	});

	console.log(formdata);

	const handleStep = (nextStep) => {
		setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
	};

	const onNext = () => handleStep(step + 1);
	const onPrevious = () => handleStep(step - 1);

	return (
		<div
			style={{
				padding: "1.2rem .5rem",
				minHeight: 500,
				backgroundColor: "#fff",
				marginTop: 16,
				borderRadius: 6,
			}}
		>
			<Grid fluid>
				<Row>
					<Col xs={24}>
						<Steps current={step} small>
							<Steps.Item title="Product Details" />
							<Steps.Item title="Product Image" />
							<Steps.Item title="Additional Details" />
							<Steps.Item title="Review" />
						</Steps>
					</Col>
					<Col xs={24} style={{ marginTop: 16 }}>
						<ProductInfoForm
							formdata={formdata}
							setFormdata={setFormdata}
							step={step}
						/>
					</Col>
					<Col xs={24} style={{ padding: "1rem .6rem" }}>
						<ButtonGroup style={{ float: "right" }}>
							<Button onClick={onPrevious} disabled={step === 0}>
								Previous
							</Button>
							<Button
								onClick={onNext}
								appearance="primary"
								disabled={step === 3}
							>
								Next
							</Button>
						</ButtonGroup>
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

const ProductInfoForm = ({ step, formdata, setFormdata }) => {
	switch (step) {
		case 0:
			return <DetailForm formdata={formdata} setFormdata={setFormdata} />;
		case 1:
			return <ImageUploader formdata={formdata} setFormdata={setFormdata} />;
		case 2:
			return (
				<AdditionalDetailsForm formdata={formdata} setFormdata={setFormdata} />
			);
		default:
			return <Review formdata={formdata} />;
	}
};

export default CreateForm;
