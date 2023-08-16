import React, { useEffect, useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { ElementsData, Icon, GithubIcon, TwitterIcon, InstagramIcon, MeIcon} from "./data";

const About = ({ handleAbout }) => {
  
  const handleToggleAbout = () => {
    handleAbout();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      className="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="about__header"
      >
        <div className="about__header-card">
          <h1>SAAD ABOUSSABR</h1>
          <p>
            A.K.A SIMON REINHARDT, FRONTEND DEVELOPER AND CREATOR OF SIMONSLAB.
            AGENCY, SOFTWARE, AND ILLUSTRATIVE WORK
          </p>
        </div>
        <div className="about__header-close">
          <p onClick={handleToggleAbout}>CLOSE</p>
          <div className="about__header-close-underline"></div>
        </div>
      </motion.div>

      <div className="about__lists">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="about__lists-table"
        >
          <ul>
            <p># INTERESTS</p>
            <li>BOOKS</li>
            <li>2000s MOVIES</li>
            <li>TRADITIONAL INK ART</li>
            <li>TV SHOWS</li>
          </ul>
          <ul>
            <p># BRANCHES</p>
            <li>SIMONSALGORITHMS</li>
            <li>SIMONSBLOG</li>
            <li>SIMONSGALLERY</li>
            <li>SIMONSTOOLS</li>
          </ul>
          <ul>
            <p># CLIENTS</p>
            <li>ARCHIDESK</li>
            <li>HISUCCESS</li>
            <li>LAPIN</li>
            <li>HYUGA. INC</li>
          </ul>
          <ul>
            <p># OTHER</p>
            <li>+3 YEARS EXPERIENCE</li>
            <li>CSS EXPERIMENTALIST</li>
            <li>QUIET ENVIRONEMENTS ONLY</li>
            <li>SLEEP OPTIONAL</li>
          </ul>
        </motion.div>
        <ul className="about__lists-links">

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/__ssensseiii/"
            >
              INSTAGRAM
            </a>
            {Icon}
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=pjSkbjMLuf4"
            >
              TWITTER
            </a>
            {Icon}
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/saad-aboussabr-647a6a22a/"
            >
              LINKEDIN
            </a>
            {Icon}
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ssenseii"
            >
              GITHUB
            </a>
            {Icon}
          </li>
        </ul>
      </div>

      <div className="about__tags">
        <div className="about__tags-available">
          <p>
            INDEPENDANT FRONTEND DEVELOPER <br /> AVAILABLE OCTOBER '23
          </p>
        </div>
        <div className="about__tags-design">
          <p>SIMONSLAB - 2ND ITERATION</p>
        </div>
        <div className="about__tags-rights">
          <p>
            ALL RIGHTS RESERVED <br /> SIMONSLAB 2023®
          </p>
        </div>
      </div>
    </motion.section>
  );
};

const Explore = ({ completed, type, role, client }) => {
  const listItem = (word, p) => {
    let delayCount = p / 10;

    return (
      <motion.li
        /// figure this key thing later using pure css
        initial={{ opacity: 0, rotateX: 90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        exit={{ opacity: 0, rotateX: -90 }}
        transition={{ delay: delayCount, duration: 1 }}
      >
        {word}
      </motion.li>
    );
  };

  return (
    <div className="explore">
      <div className="explore__list">
        <ul className="explore__list-order">
          {listItem("A", 1)}
          {listItem("B", 2)}
          {listItem("C", 3)}
          {listItem("D", 4)}
        </ul>
        <ul className="explore__list-title">
          {listItem("COMPLETED", 1)}
          {listItem("TYPE", 2)}
          {listItem("ROLE", 3)}
          {listItem("CLIENT", 4)}
        </ul>
        <ul className="explore__list-data">
          {listItem(completed, 1)}
          {listItem(type, 2)}
          {listItem(role, 3)}
          {listItem(client, 4)}
        </ul>
      </div>

      <div className="explore__action">
        <motion.a
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -90 }}
          transition={{ duration: 0.5 }}
          href="/"
        >
          EXPLORE
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="explore__action-hline"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="explore__action-vline"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, rotateZ: 360 }}
          animate={{ opacity: 1, rotateZ: 0 }}
          exit={{ opacity: 0, rotateZ: 360 }}
          transition={{ duration: 1 }}
          className="explore__action-icon"
        >
          <div className="explore__action-icon-v"></div>
          <div className="explore__action-icon-h"></div>
        </motion.div>
      </div>

      <div className="explore__description">
        <motion.p
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -90 }}
          transition={{ duration: 1 }}
        >
          CLIENT WORK FOR PAUL DISPLAYING THE NEWEST MENU FOLLOWING THEIR
          INTUITIVE BRAND RE-DESIGN
        </motion.p>
      </div>
    </div>
  );
};

const Header = ({ handleSlider, active, handleAbout }) => {
  const handleSliderData = (index) => {
    handleSlider(index);
  };

  const handleToggleAbout = () => {
    handleAbout();
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="header"
    >
      <div className="header__logo">
        <motion.h1
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -90 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          SIMONSLAB
        </motion.h1>
      </div>
      <div className="header__slider">
        <motion.ul
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.2, delay: 1, ease: "easeOut" }}
        >
          {ElementsData.map((item, i) => {
            return (
              <li
                className={
                  active === i
                    ? "header__slider-segment-active"
                    : "header__slider-segment"
                }
                key={i}
                onClick={() => {
                  handleSliderData(i);
                }}
              ></li>
            );
          })}
        </motion.ul>
      </div>
      <div className="header__about">
        <p onClick={handleToggleAbout}>ABOUT</p>
        <div className="meIcon" onClick={handleToggleAbout}>{MeIcon}</div>
        <div className="header__about-underline"></div>
      </div>
    </motion.nav>
  );
};

const Footer = ({ completed, type, role, client, isVisible }) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="footer"
    >
      <div className="footer__email">
        <a href="mailto: saadabou.study@gmail.com">EMAIL ME</a>
        {Icon}
      </div>

      <AnimatePresence>
        {isVisible && (
          <Explore
            completed={completed}
            type={type}
            role={role}
            client={client}
          />
        )}
      </AnimatePresence>

      <div className="footer__social">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ssenseii"
            >
              GITHUB
            </a>
            {Icon}
          </li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ssenseii"
          >
            {GithubIcon}
          </a>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/__ssensseiii/"
            >
              INSTAGRAM
            </a>
            {Icon}
          </li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/__ssensseiii/"
          >
            {InstagramIcon}
          </a>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=tvkxupwbFLk"
            >
              TWITTER
            </a>
            {Icon}
          </li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=tvkxupwbFLk"
          >
            {TwitterIcon}
          </a>
        </ul>
      </div>
    </motion.footer>
  );
};

function App() {
  /// local constants area

  /// useState Area
  const [active, setActive] = useState(); /// keep track of id and checks clicked element
  const [data, setData] = useState({
    bgColor: "#141414",
    elementColor: "#bac4b8",
    completed: " ",
    type: " ",
    role: " ",
    client: " ",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);

  /// useEffect Area
  useEffect(() => {
    document.documentElement.style.setProperty("--color", data.elementColor);
    return () => {};
  }, [data.elementColor]);

  /// Constants Area

  const MainElement = (id) => {
    return (
      <div
        key={id}
        className={
          active === id ? "main__track-element-active" : "main__track-element"
        }
        onClick={() => {
          handleData(id);
        }}
      ></div>
    );
  };

  /// handleFunction Area
  const handleData = (id) => {
    switch (true) {
      case active === id:
        setActive();
        setIsVisible(false);
        setData({
          elementColor: "#bac4b8",
          bgColor: "#141414",
          completed: " ",
          type: " ",
          role: " ",
          client: " ",
        });
        break;

      case active !== id:
        setActive(id);
        setIsVisible(true);
        setData({
          elementColor: ElementsData[id].elementColor,
          bgColor: ElementsData[id].bgColor,
          completed: ElementsData[id].completed,
          type: ElementsData[id].type,
          role: ElementsData[id].role,
          client: ElementsData[id].client,
        });
        break;

      default:
        console.log("something else is happening");
    }
  };

  const handleToggleAbout = () => {
    setToggleAbout((prev) => !prev);
    setIsVisible(false);
    setActive();
    setData({
      elementColor: "#bac4b8",
      bgColor: "#141414",
      completed: " ",
      type: " ",
      role: " ",
      client: " ",
    });
  };

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

  return (
    <div
      className="app"
      style={{ color: data.elementColor, backgroundColor: data.bgColor }}
    >
      <AnimatePresence>
        {!toggleAbout && (
          <Header
            handleSlider={handleData}
            active={active}
            handleAbout={handleToggleAbout}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!toggleAbout && (
          <motion.section
            initial={{ opacity: 0, translateX: 500 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -500 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="main"
          >
            <div className="main__track">
              {ElementsData.map((element, i) => {
                return MainElement(i);
              })}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!toggleAbout && (
          <Footer
            completed={data.completed}
            type={data.type}
            role={data.role}
            client={data.client}
            isVisible={isVisible}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toggleAbout && <About handleAbout={handleToggleAbout}></About>}
      </AnimatePresence>
    </div>
  );
}

export default App;
