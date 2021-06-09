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

const ProductSlider = ({ data = [] }) => {
	return (
		<div style={{ marginTop: 30 }}>
			<div className="container product-slider">
				<h4>Similar Products</h4>
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
					sliderClass="lsdfadsfadsf"
					slidesToSlide={2}
					swipeable
					responsive={responsive}
				>
					{data.map((item) => (
						<div key={item.id} className="slider-item-wrapper">
							<ProductCard
								id={item.id}
								title={item.title}
								image={item.images[Math.floor(Math.random() * 3)]}
								price={item.sell_price}
								pre_price={item.regular_price}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default ProductSlider;
