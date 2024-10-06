import React from "react";
import { Carousel } from "react-responsive-carousel";
import { dress } from "./img/data";
import classes from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div className={classes.container}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false} // To remove status dots below
        className={classes.carousel}
      >
        {dress.map((imgItemLink) => {
          return <img src={imgItemLink} key={imgItemLink} alt="Dress" />;
        })}
      </Carousel>

      {/* Landing text over the carousel */}
      <div className={classes.hero}>
        <h2>Discover Your Style</h2>
        <p>Explore our latest collection of trendy and comfortable clothing</p>
        <button className={classes.shop_btn}>Shop Now</button>
      </div>
    </div>
  );
}

export default CarouselEffect;
