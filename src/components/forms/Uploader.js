import React from "react";
import { Form, Uploader, Icon } from "rsuite";

const ImageUploader = ({ formdata, setFormdata }) => {
	return (
		<Form fluid className="uploader">
			<Uploader
				multiple
				listType="picture-text"
				autoUpload={false}
				draggable
				removable={true}
				accept="Image/*"
				fileList={formdata.images}
				onChange={(file) =>
					setFormdata({
						...formdata,
						images: [...file],
					})
				}
			>
				<div className="upload-box">
					<div>
						<Icon icon="plus" size="5x" />
					</div>
					<div className="upload-text">
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
