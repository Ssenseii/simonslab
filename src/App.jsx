import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/// Pages
import Main from "./pages/Main";
import About from "./pages/About";

/// branches
import Blog from "./pages/Branches/Blog";
import Projects from "./pages/Branches/Projects";
import Docs from "./pages/Branches/Docs";

function App() {

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

  /// Change font color by changing the css variable (has to be on top level component 'app')
  useEffect(() => {
    document.documentElement.style.setProperty("--color", data.elementColor); /// to change element besides the font
    return () => {};
  }, [data]);

  return (
    <div
      className="app"
      style={{ color: data.elementColor, backgroundColor: data.bgColor }}
    >
      <BrowserRouter>
        <Routes>

          {/* Main Route */}
          <Route
            exact
            path="/"
            element={
              <Main
                active={active}
                setActive={setActive}
                data={data}
                setData={setData}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
              />
            }
          ></Route>

          {/* About Route */}
          <Route path="/about" element={<About />}></Route>
          {/* Branches Go Here */}
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/docs" element={<Docs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// Unused Cool Functions

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

