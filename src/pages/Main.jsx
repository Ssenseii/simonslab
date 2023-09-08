import { useState } from "react";
import { motion } from "framer-motion";

import Header from "../layout/main/Header";
import Footer from "../layout/main/Footer";
import Details from "../layout/main/Details";

import { ElementsData } from "../data";

const Main = ({
  active,
  data,
  isVisible,
  setActive,
  setData,
  setIsVisible,
}) => {
  const [details, setDetails] = useState(false);



  const MainElement = (id) => {
    return (
      <div
        key={id}
        className={
          active === id
            ? `main__track-element-active animation-${id}-active`
            : `main__track-element animation-${id}`
        }
        onClick={() => {
          handleData(id);
        }}
      >
        <img src={`assets/graphics/thumbnails/${id}.png`} alt="" />
      </div>
    );
  };


  
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
          description: " ",
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

  const handleActive = () => {
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
      description: " ",
    });
  }

  return (
    <>
      <Header logo={"SIMONSLAB"} EngageSlider={true} LinkTo={"about"} handleSlider={handleData} active={active} handleActive={handleActive} />

      <motion.section
        initial={{ opacity: 0, translateX: 500 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -500 }}
        transition={{ duration: 1.5, ease: "easeOut", type: "tween" }}
        className="main"
      >
        <div className="main__track">
          {ElementsData.map((_, i) => {
            return MainElement(i);
          })}
        </div>
      </motion.section>

      <Footer data={data} isVisible={isVisible} />

      {details ? <Details data={data} /> : ""}
    </>
  );
};

export default Main;
