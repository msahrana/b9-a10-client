import Img from "../../../public/chooseMe.jpg";
import {IoEarth, IoLocationSharp} from "react-icons/io5";
import {FaPersonWalkingLuggage} from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <div className="bg-blue-100">
      <h1 className="text-4xl font-bold text-center py-10 uppercase">
        Why Us?
      </h1>
      <div className="flex flex-col md:flex-col lg:flex-row gap-6 p-2">
        <div className="lg:w-1/2">
          <img className="rounded-md" src={Img} alt="" />
        </div>
        <div className="w-1/2">
          {/* 1st */}
          <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4 mt-8">
            <div>
              <IoEarth className="text-green-600 size-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">All Around the World Tours</h2>
              <p>
                A premier travel agency offering curated tours spanning the
                globe. From iconic landmarks to hidden gems, their expertly
                crafted itineraries cater to every traveler`s wanderlust,
                ensuring unforgettable experiences with a blend of adventure,
                culture, and luxury.
              </p>
            </div>
          </div>
          {/* 2nd */}
          <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4 my-10">
            <div>
              <IoLocationSharp className="text-green-600 size-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Private & Customized Tours</h2>
              <p>
                A premier travel agency offering curated tours spanning the
                globe. From iconic landmarks to hidden gems, their expertly
                crafted itineraries cater to every traveler`s wanderlust,
                ensuring unforgettable experiences with a blend of adventure,
                culture, and luxury.
              </p>
            </div>
          </div>
          {/* 3rd */}
          <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4">
            <div>
              <FaPersonWalkingLuggage className="text-green-600 size-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Immigration & Passport Help</h2>
              <p>
                A premier travel agency offering curated tours spanning the
                globe. From iconic landmarks to hidden gems, their expertly
                crafted itineraries cater to every traveler`s wanderlust,
                ensuring unforgettable experiences with a blend of adventure,
                culture, and luxury.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
