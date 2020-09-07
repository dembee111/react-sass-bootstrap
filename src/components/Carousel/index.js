import React from "react";
import Slider from "react-slick";
import imageUrlBackup1 from "../../assets/img/secondary-photo-backup.png";
import imageUrlBackup from "../../assets/img/Header-photo-backup.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "./Arrow";

export default function Carousel() {
  return (
    <div className="carrousel_wrapper">
      <Slider
        arrows={true}
        dots={true}
        pauseOnHover={false}
        infinite={true}
        speed={600}
        autoplaySpeed={4000}
        autoplay={true}
        fade={true}
        variableWidth={false}
        slidesToShow={1}
        slidesToScroll={1}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
      >
        <picture>
          <source media="(max-width: 799px)" srcset={imageUrlBackup} />
          <img srcset={imageUrlBackup} alt="slider-1" width="100%" />
        </picture>
        <picture>
          <source media="(max-width: 799px)" srcset={imageUrlBackup1} />
          <img srcset={imageUrlBackup1} alt="slider-2" width="100%" />
        </picture>
      </Slider>
    </div>
  );
}
