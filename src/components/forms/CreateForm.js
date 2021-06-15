import React, { useState } from "react";
import { Grid, Row, Col, Steps, ButtonGroup, Button } from "rsuite";
import DetailForm from "./DetailForm";
import ImageUploader from "./Uploader";
import AdditionalDetailsForm from "./AdditionalDetailsForm";
import Review from "../Review";
import SuccessModal from "../modals/SuccessModal";

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
	const [show, setShow] = useState(false);

	const handleStep = (nextStep) => {
		setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
	};

	const onNext = () => handleStep(step + 1);
	const onPrevious = () => handleStep(step - 1);

	const open = () => {
		setShow(true);
	};

	return (
		<div className="create-container">
			<SuccessModal show={show} setShow={setShow} />
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
					<Col xs={24} className="btn-group-wrapper">
						<ButtonGroup className="btn-group">
							<Button onClick={onPrevious} disabled={step === 0}>
								Previous
							</Button>
							{step < 3 ? (
								<Button
									onClick={onNext}
									appearance="primary"
									disabled={step === 3}
								>
									Next
								</Button>
							) : (
								<Button onClick={open} appearance="primary">
									Confirm
								</Button>
							)}
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
