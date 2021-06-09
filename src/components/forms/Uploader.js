import React from "react";
import { Form, Uploader, Icon } from "rsuite";

const ImageUploader = ({ formdata, setFormdata }) => {
	return (
		<Form fluid>
			<Uploader
				autoUpload={false}
				draggable
				removable={true}
				accept="Image/*"
				onChange={(file) =>
					setFormdata({
						...formdata,
						images: [...file],
					})
				}
			>
				<div
					style={{
						height: 280,
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<div>
						<Icon icon="plus" size="5x" />
					</div>
					<div style={{ fontSize: 16, marginTop: 10, textAlign: "center" }}>
						<div>Drag & Drop Your Image</div>
						<div>OR</div>
						<div>Upload Your Image</div>
					</div>
				</div>
			</Uploader>
		</Form>
	);
};

export default ImageUploader;
