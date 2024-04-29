import CountriesSection from "../../components/CountriesSection/CountriesSection";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";
import TouristsSpots from "../../components/TouristsSpots/TouristsSpots";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <CountriesSection></CountriesSection>
      <TouristsSpots></TouristsSpots>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
