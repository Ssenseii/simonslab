import { useState, useEffect } from "react";

/// Pages
import Main from "./pages/Main";
import About from "./pages/About";

function App() {
  /// useState Area
  const [screen, setScreen] = useState(true); /// switch between about and main (should consider route option)

  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(); /// keep track of id and checks clicked element
  const [data, setData] = useState({
    bgColor: "#141414",
    elementColor: "#bac4b8",
    completed: " ",
    type: " ",
    role: " ",
    client: " ",
    description: " ",

    title: " ",
    timespan: " ",
    tools: " ",
    livesite: " ",
    ideas: [],
    goals: [],
    execution: [],
    functionality: [],
    performance: [],
    concepts: [],
    graphic: " ",
  });

  const handleAbout = () => {
    setScreen((prev) => !prev);
    setActive();
    setIsVisible(false);
    setData({
      elementColor: "#bac4b8",
      bgColor: "#141414",
      completed: " ",
      type: " ",
      role: " ",
      client: " ",
      description: " ",
    });
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--color", data.elementColor);
    return () => {};
  }, [data]);

  return (
    <div
      className="app"
      style={{ color: data.elementColor, backgroundColor: data.bgColor }}
    >
      {screen ? (
        <Main
          active={active}
          setActive={setActive}
          data={data}
          setData={setData}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          handleAbout={handleAbout}
        ></Main>
      ) : (
        <About handleAbout={handleAbout}></About>
      )}
    </div>
  );
}

export default App;

// const newShade = (hexColor, magnitude) => {
//   hexColor = hexColor.replace(`#`, ``);
//   if (hexColor.length === 6) {
//     const decimalColor = parseInt(hexColor, 16);
//     let r = (decimalColor >> 16) - magnitude;
//     r > 255 && (r = 255);
//     r < 0 && (r = 0);
//     let g = (decimalColor & 0x0000ff) - magnitude;
//     g > 255 && (g = 255);
//     g < 0 && (g = 0);
//     let b = ((decimalColor >> 8) & 0x00ff) - magnitude;
//     b > 255 && (b = 255);
//     b < 0 && (b = 0);
//     return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
//   } else {
//     return hexColor;
//   }
// };
