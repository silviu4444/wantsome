import style from "../style/Header.module.scss";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={style.flex}>
        <div className={style.leftSide}>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers:23,004</p>
        </div>
        <div className={style.rightSide}>
          <h3>
            Dark Mode
            <label className={style.switch}>
              <input type='checkbox'/>
              <span onClick={darkMode} className={`${style.slider} ${style.round}`}></span>
            </label>
          </h3>
        </div>
      </section>
    );
  }
}
const darkMode = () => {
  const main = document.querySelector('#main');
  main.classList.toggle(style.light)
  console.log(main)
};
export default Header;