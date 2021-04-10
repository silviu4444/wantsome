import style from "../style/GeneralList.module.scss";
import React from "react";
import Header from "./Header";
import Items from "./Items";
import Overview from "./Overview";

class GeneralList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.flexC}>
        <Header totalFollowers={this.props.totalFollowers} />
        <section className={style.flex}>
          {this.props.data.map((el, index) => {
            return (
              <Items
                key={index}
                username={el.username}
                followers={el.followers}
                rank={el.rank}
                socialMedia={el.socialMedia}
                up={el.up}
              />
            );
          })}
        </section>
        <section className={style.overview}>
          <h1 className={style.title}>Overview - Today</h1>
          <div className={style.flex}>
            {this.props.overviewData.map((el, index) => {
              return (
                <Overview
                  key={index}
                  action={el.action}
                  grade={el.grade}
                  number={el.number}
                  socialMedia={el.socialMedia}
                />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default GeneralList;
