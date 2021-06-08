import React, { useState } from "react";
import { Form, Uploader, Icon } from "rsuite";

const ImageUploader = () => {
	const [file, setFile] = useState([]);

	return (
		<Form fluid>
			<Uploader
				action="//jsonplaceholder.typicode.com/posts/"
				draggable
				maxPreviewFileSize={343535463464646}
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
