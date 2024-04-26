import CountriesSection from "../../components/CountriesSection/CountriesSection";
import Slider from "../../components/Slider/Slider";
import TouristsSpots from "../../components/TouristsSpots/TouristsSpots";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <CountriesSection></CountriesSection>
      <TouristsSpots></TouristsSpots>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
