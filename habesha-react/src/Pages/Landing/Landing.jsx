import React from "react";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Layout from "../../Components/Layout/Layout";
import ProductGrid from "../../Components/Products/ProductGrid";
// import Footer from "../../Components/Footer/Footer";

const Landing = () => {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <ProductGrid />
      {/* <Footer /> */}
    </Layout>
  );
};

export default Landing;
