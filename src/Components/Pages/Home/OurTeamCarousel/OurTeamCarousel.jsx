import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../../../../Assets/Img/our-team.png"
import carousel2 from "../../../../Assets/Img/our-team1.png"
import slickStyle from "./OurTeamCarousel.module.scss";

const OurTeamCarousel = () => {
    const images = [carousel1, carousel2, carousel1, carousel2]
    return (
        <div className={slickStyle.carousel}>

            {/* <Carousel
            showArrows={true}
            //   renderArrowPrev={(onClickHandler, hasPrev) =>
            //     hasPrev && (
            //       <button className={slickStyle.carouselButton} onClick={onClickHandler}>
            //         &lt;
            //       </button>
            //     )
            //   }
            //   renderArrowNext={(onClickHandler, hasNext) =>
            //     hasNext && (
            //       <button className={slickStyle.carouselButton} onClick={onClickHandler}>
            //         &gt;
            //       </button>
            //     )
            //   }
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            centerMode={true}
            // centerSlidePercentage={34}
            centerSlidePercentage={34}
            autoPlay={true}
            className={slickStyle.carousel}
            slidesToShow={2}
            responsive={[
                {
                    breakpoint: 78,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]}
        >
            {images.map((image, index) => (
                <div key={index}>
                    <img className={slickStyle.carouselImage} src={image} alt={`Image ${index}`} />
                </div>
            ))}
        </Carousel> */}
            <Slider
                slidesToShow={3}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={2000}
                draggable={true}

                // arrows={true}
                dots={true}
                infinite={true}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img className={slickStyle.carouselImage} src={image} alt={`Image ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default OurTeamCarousel;