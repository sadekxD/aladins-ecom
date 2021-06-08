import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./cards/ProductCard";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 4,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const ProductSlider = () => {
	return (
		<div style={{ marginTop: 30 }}>
			<div
				className="container"
				style={{ padding: 16, borderRadius: 6, backgroundColor: "#F5F5F5" }}
			>
				<h4 style={{ marginLeft: 8 }}>Similar Products</h4>
				<Carousel
					additionalTransfrom={0}
					arrows
					autoPlaySpeed={3000}
					centerMode={false}
					className=""
					containerClass="container"
					dotListClass=""
					draggable
					focusOnSelect={false}
					infinite
					itemClass=""
					keyBoardControl
					minimumTouchDrag={80}
					renderButtonGroupOutside={false}
					renderDotsOutside={false}
					showDots={false}
					sliderClass=""
					slidesToSlide={2}
					swipeable
					responsive={responsive}
				>
					<div className="" style={{ padding: "0px 4px" }}>
						<ProductCard price={200} />
					</div>
					<div className="" style={{ padding: "0px 4px" }}>
						<ProductCard price={200} />
					</div>
					<div className="" style={{ padding: "0px 4px" }}>
						<ProductCard price={200} />
					</div>
					<div className="" style={{ padding: "0px 4px" }}>
						<ProductCard price={200} />
					</div>
					<div className="" style={{ padding: "0px 4px" }}>
						<ProductCard price={200} />
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default ProductSlider;
