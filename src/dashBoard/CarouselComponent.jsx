import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'

function CarouselComponent({ slides }) {
  const sliderRef = useRef(null);
function isMobileView() {
  return window.innerWidth <= 768;
}
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobileView()?1: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  const visibleSlides = slides?.slice(0, 5);

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();
  const goToSlide = (index) => sliderRef.current?.slickGoTo(index);

  return (
    <div style={{ padding: "20px", maxWidth: "100%" }}>
      <Slider ref={sliderRef} {...settings}>
        {visibleSlides?.map((itm, index) => (
          <div key={index} style={{ padding: "10px", boxSizing: "border-box" }}>
            <div className="imgalign">
              <img
                src={itm.flag}
                alt={`Slide ${index}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="prevbutton">
        <button onClick={goToPrev} style={navButtonStyle}>❮</button>

        <div style={{ display: "flex", gap: "10px" }}>
          {visibleSlides?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#666",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <button onClick={goToNext} style={navButtonStyle}>❯</button>
      </div>
    </div>
  );
}

const navButtonStyle = {
  background: "transparent",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
  color: "#000",
};

export default CarouselComponent;
