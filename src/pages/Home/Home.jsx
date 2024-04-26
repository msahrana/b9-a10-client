import CountriesSection from "../../components/CountriesSection/CountriesSection";
import Slider from "../../components/Slider/Slider";
import TouristsSpots from "../../components/TouristsSpots/TouristsSpots";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <h2>home page here </h2>
      <Slider></Slider>
      <TouristsSpots></TouristsSpots>
      <CountriesSection></CountriesSection>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
