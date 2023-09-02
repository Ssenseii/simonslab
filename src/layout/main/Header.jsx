import {motion} from 'framer-motion'
import { MeIcon, ElementsData } from '../../data';

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
          initial={{ opacity: 0, translateX: 500 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: -500 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: "easeOut",
            type: "tween",
          }}
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
        <div className="meIcon" onClick={handleToggleAbout}>
          {MeIcon}
        </div>
        <div className="header__about-underline"></div>
      </div>
    </motion.nav>
  );
};


export default Header