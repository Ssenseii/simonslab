import {motion} from 'framer-motion'
import { MeIcon, ElementsData, HomeIcon } from '../../data';
import {Link} from 'react-router-dom'

const Header = ({ handleSlider, active, handleActive, logo, EngageSlider, LinkTo }) => {

  const handleSliderData = (index) => {
    handleSlider(index);
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
          {logo}
        </motion.h1>
      </div>
      {EngageSlider && (
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
      )}

      {/* Its creative atleast */}

      <div className="header__link">
        <Link onClick={handleActive} to={`/${LinkTo === "about"? LinkTo : "" }`}>
          <p>{LinkTo}</p>
          <div className="meIcon">{(LinkTo === "about")? MeIcon : HomeIcon}</div>
        </Link>
        <div className="header__link-underline"></div>
      </div>
    </motion.nav>
  );
};


export default Header