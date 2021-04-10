import React from "react";
import style from "../style/Items.module.scss";
import iconFacebook from "../media/icons/iconFacebook.svg";
import iconInstagram from "../media/icons/iconInstagram.svg";
import iconTwitter from "../media/icons/iconTwitter.svg";
import iconYoutube from "../media/icons/iconYoutube.svg";
import iconUp from "../media/icons/iconUp.svg";
import iconDown from "../media/icons/iconDown.svg";

class Items extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSwitch(param) {
    switch (param) {
      case "facebook":
        return <img src={iconFacebook} />;
        break;
      case "instagram":
        return <img src={iconInstagram} />;
        break;
      case "twitter":
        return <img src={iconTwitter} />;
        break;
      case "youtube":
        return <img src={iconYoutube} />;
        break;
      default:
      // code block
    }
  }

  render() {
    return (
      <div id="item" className={style.flexC}>
        <div className={style.flex}>
          <div>{this.renderSwitch(this.props.socialMedia)}</div>
          <div>
            <span className={style.usernameStyle}>{this.props.username}</span>
          </div>
        </div>
        <h1>{this.props.followers}</h1>
        <h3>FOLLOWERS</h3>
        {this.props.up ? (
          <div className={style.icon}>
            <img src={iconUp} />
            <span className={style.upRank}>{this.props.rank}</span>
          </div>
        ) : (
          <div className={style.icon}>
            <img src={iconDown} />
            <span className={style.downRank}>{this.props.rank}</span>
          </div>
        )}
      </div>
    );
  }
}

export default Items;
