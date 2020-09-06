import React from "react";
import Slider from "react-slick";
import imageUrlBackup1 from "../../assets/img/secondary-photo-backup.png";
import imageForBigSize1 from "../../assets/img/secondary-photo.webp";
import imageForSmallSize1 from "../../assets/img/secondary-photo-1x.webp";
import imageUrlBackup from "../../assets/img/Header-photo-backup.png";
import imageForBigSize from "../../assets/img/Header-photo.webp";
import imageForSmallSize from "../../assets/img/Header-photo-1x.webp";
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
          <source media="(max-width: 799px)" srcset={imageForSmallSize} />
          <source media="(min-width: 1600px)" srcset={imageForBigSize} />
          <img srcset={imageUrlBackup} alt="header photo 1" width="100%" />
        </picture>
        <picture>
          <source media="(max-width: 799px)" srcset={imageForSmallSize1} />
          <source media="(min-width: 1600px)" srcset={imageForBigSize1} />
          <img srcset={imageUrlBackup1} alt="header photo 1" width="100%" />
        </picture>
        {/* <img src={imageUrl2} width="100%" alt="sliderImg" /> */}
      </Slider>
    </div>
  );
}
