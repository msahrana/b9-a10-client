import {useEffect, useState} from "react";
import CountriesSectionCard from "./CountriesSectionCard";
import {Typewriter} from "react-simple-typewriter";

const CountriesSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/country")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div>
      {/* TypeWriter start */}
      <div className="App">
        <h1
          className="text-5xl font-bold text-center uppercase mb-16"
          style={{paddingTop: "5rem", margin: "auto 8", fontWeight: "normal"}}
        >
          <span style={{color: "red", fontWeight: "bold"}}>
            <Typewriter
              words={["All Over South Asia"]}
              loop={""}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
            />
          </span>
        </h1>
      </div>
      {/* TypeWriter end */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {items.map((item) => (
          <CountriesSectionCard
            key={item._id}
            item={item}
          ></CountriesSectionCard>
        ))}
      </div>
    </div>
  );
};

export default CountriesSection;
