import logo from "./logo.svg";
import style from "./style/App.module.scss";
import GeneralList from "./home/GeneralList";
import React from "react";

const data = [
  {
    socialMedia: "facebook",
    username: "@nathanf",
    followers: 1987,
    rank: "12 Today",
    up: true,
  },
  {
    socialMedia: "twitter",
    username: "@nathanf",
    followers: 1044,
    rank: "99 Today",
    up: true,
  },
  {
    socialMedia: "instagram",
    username: "@realnathanf",
    followers: "11k",
    rank: "1099 Today",
    up: true,
  },
  {
    socialMedia: "youtube",
    username: "Nathan F.",
    followers: 8239,
    rank: "144 Today",
    up: false,
  },
];

const overviewData = [
  {
    action: "Page Views",
    number: 87,
    socialMedia: "facebook",
    grade: {
      percent: "3%",
      up: true,
    },
  },
  {
    action: "Likes",
    number: 52,
    socialMedia: "facebook",
    grade: {
      percent: "2%",
      up: false,
    },
  },
  {
    action: "Likes",
    number: 5642,
    socialMedia: "instagram",
    grade: {
      percent: "2257%",
      up: true,
    },
  },
  {
    action: "Profile Views",
    number: "52k",
    socialMedia: "instagram",
    grade: {
      percent: "1375%",
      up: true,
    },
  },
  {
    action: "Retweets",
    number: 117,
    socialMedia: "twitter",
    grade: {
      percent: "303%",
      up: true,
    },
  },
  {
    action: "Likes",
    number: 507,
    socialMedia: "twitter",
    grade: {
      percent: "553%",
      up: true,
    },
  },
  {
    action: "Likes",
    number: 107,
    socialMedia: "youtube",
    grade: {
      percent: "19%",
      up: false,
    },
  },
  {
    action: "Total Views",
    number: 1407,
    socialMedia: "youtube",
    grade: {
      percent: "12%",
      up: false,
    },
  },
];

function App() {
  return (
    <div id='main' className={style.main}>
      <GeneralList data={data} overviewData={overviewData} />
    </div>
  );
}

export default App;
