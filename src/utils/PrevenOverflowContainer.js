import React from "react";

const containerStyle = {
	overflow: "auto",
	position: "relative",
};
const contentStyle = {
	justifyContent: "center",
	alignItems: "center",
	display: "flex",
	flexWrap: "wrap",
};

class PreventOverflowContainer extends React.Component {
	componentDidMount() {
		if (!this.content) {
			return;
		}
		this.container.scrollTop = this.content.clientHeight / 2 - 60;
		this.container.scrollLeft =
			this.content.clientWidth / 2 - this.container.clientWidth / 2;
	}
	render() {
		const { children, height = 150 } = this.props;
		return (
			<div
				id="preventOverflowContainer"
				style={{ ...containerStyle, height, overflow: "hidden" }}
				ref={(ref) => {
					this.container = ref;
				}}
			>
				<div
					style={contentStyle}
					ref={(ref) => {
						this.content = ref;
					}}
				>
					{children(() => {
						return this.container;
					})}
				</div>
			</div>
		);
	}
}

export default PreventOverflowContainer;
