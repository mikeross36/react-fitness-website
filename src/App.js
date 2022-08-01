import React from "react"
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Offers from "./components/offers/Offers";
import Pricing from "./components/pricing/Pricing";
import Trainers from "./components/trainers/Trainers";
import Banner from "./components/banner/Banner";
import Testimonials from "./components/testimonials/Testimonials";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Offers />
      <Pricing />
      <Trainers />
      <Banner />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  )
}

export default App;