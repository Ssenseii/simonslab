import { useState, } from "react";
import { motion } from "framer-motion";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Details from '../layout/Details'

import { ElementsData } from "../data";

const Main = ({
  active,
  data,
  isVisible,
  setActive,
  setData,
  setIsVisible,
  handleAbout,
}) => {

  const [details, setDetails] = useState(false);


  /// useEffect Area


  /// Constants Area

  const MainElement = (id) => {

    // ways to work around background 
      // #1 style={{ backgroundImage: "url(" + image0 + ")" }}
      // img tag 
  
    return (
      <div
        
        key={id}
        className={
          active === id ? "main__track-element-active" : "main__track-element"
        }
        onClick={() => {
          handleData(id);
        }}
      >
        <img src={`thumbnails/${id}.png`} alt="" />
      </div>
    );
  };

  /// handleFunction Area
  const handleData = (id) => {
    switch (true) {
      case active === id:
        setActive();
        setIsVisible(false);
        setDetails(false);
        setData({
          elementColor: "#bac4b8",
          bgColor: "#141414",
          completed: " ",
          type: " ",
          role: " ",
          client: " ",
          description: ' ',
        });
        break;

      case active !== id:
        setActive(id);
        setIsVisible(true);
        setDetails(true);
        setData({
          elementColor: ElementsData[id].elementColor,
          bgColor: ElementsData[id].bgColor,
          completed: ElementsData[id].completed,
          type: ElementsData[id].type,
          role: ElementsData[id].role,
          client: ElementsData[id].client,
          description: ElementsData[id].description,
          title: ElementsData[id].title,
          timespan: ElementsData[id].timespan,
          tools: ElementsData[id].tools,
          livesite: ElementsData[id].livesite,
          ideas: ElementsData[id].ideas,
          goals: ElementsData[id].goals,
          execution: ElementsData[id].execution,
          functionality: ElementsData[id].functionality,
          concepts: ElementsData[id].concepts,
          performance: ElementsData[id].performance,
          graphic: ElementsData[id].graphic,
        });
        break;

      default:
        console.log("something else is happening");
    }
  };

  

  return (
    <>
      <Header
        handleSlider={handleData}
        active={active}
        handleAbout={handleAbout}
      />

      <motion.section
        initial={{ opacity: 0, translateX: 500 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -500 }}
        transition={{ duration: 1.5, ease: "easeOut", type: "tween" }}
        className="main"
      >
        <div className="main__track">
          {ElementsData.map((element, i) => {
            return MainElement(i);
          })}
        </div>
      </motion.section>

      <Footer
        completed={data.completed}
        type={data.type}
        role={data.role}
        client={data.client}
        isVisible={isVisible}
        description={data.description}
      />

      {details ? (
        <Details
          title={data.title}
          description={data.description}
          timespan={data.timespan}
          tools={data.tools}
          livesite={data.livesite}
          ideas={data.ideas}
          goals={data.goals}
          execution={data.execution}
          functionality={data.functionality}
          concepts={data.concepts}
          performance={data.performance}
          graphic={data.graphic}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Main;
