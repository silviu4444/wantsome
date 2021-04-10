import React, { Component } from "react";
import style from "../../style/Home.module.scss";
import Header from "./Header.js";
import MultipleItems from "./MultipleItems";
import SingleItem from "./SingleItem";
import ElementNotFound from './ElementNotFound';
import DarkMode from './DarkMode';
import { useState, useEffect } from "react";
import { Select } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Spin, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Switch } from "antd";

const Home = () => {
  const [country, setCountry] = useState();
  const [countryData, setCountryData] = useState([]);
  const [hideInputCountry, setHideInputCountry] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { Option } = Select;
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    console.log(theme);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const searchCountry = (event) => {
    if (event.target.value.length > 0) {
      setCountry(event.target.value);
      setIsLoading(true);
    }
  };

  const deleteSearchedCountry = () => {
    setCountry();
    setCountryData([]);
    setHideInputCountry(false);
  };

  const countrySelect = (country) => {
    setCountry(country.name);
  };

  useEffect(() => {
    const inputSearch = document.querySelector("#inputSearch");
    if (typeof country === "undefined" || country === "") {
      return;
    } else {
      const serverCall = async () => {
        try {
          const response = await fetch(
            `https://restcountries.eu/rest/v2/name/${country}`
          );
          const data = await response.json();
          if (inputSearch) inputSearch.value = "";
          if (response.ok) {
            setCountryData(data);
            if (data.length === 1) setHideInputCountry(true);
            setIsLoading(false);
            console.log(data);
          } else {
            setCountryData([{ name: data.message }]);
            setIsLoading(false);
          }
        } catch (err) {
          console.log(err);
        }
      };
      serverCall();
    }
  }, [country]);

  const handleChange = (value) => {
    setIsLoading(true);
    const serverCall = async () => {
      try {
        const response = await fetch(
          `https://restcountries.eu/rest/v2/region/${value}`
        );
        const data = await response.json();
        if (response.ok) {
          setCountryData(data);
          if (data.length === 1) setHideInputCountry(true);
          setIsLoading(false);
        } else {
          setCountryData([{ name: data.message }]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    serverCall();
  };

  return (
      <>

        <Header id="header">
          <p>
            Dark Mode <DarkMode />
          </p>
        </Header>

        <section id="backgroundMode" className={style.mainSection}>
          {isLoading ? (
            <Space className={style.loader} size="middle">
              <Spin size="large" />
            </Space>
          ) : (
            ""
          )}
          {hideInputCountry ? (
            ""
          ) : (
            <div className={style.dFlex}>
              <input
                id="inputSearch"
                name="search"
                placeholder="Search for a country"
                onChange={debounce(searchCountry, 500)}
              ></input>
              <Select
                id="select"
                defaultValue="Filter by Region"
                size="large"
                style={{ width: 200 }}
                onChange={handleChange}
              >
                <Option value="africa">Africa</Option>
                <Option value="americas">America</Option>
                <Option value="asia">Asia</Option>
                <Option value="europe">Europe</Option>
                <Option value="oceania">Oceania</Option>
              </Select>
            </div>
          )}
          <div className={style.dFlexItems}>
            {countryData.length === 1
              ? countryData.map((el, index) =>
                  el.name === "Not Found" ? (
                    <>
                    <ElementNotFound key={index} msg={el.name}/>
                    </>
                  ) : (
                    <div className={style.found} key={index}>
                      <Button
                        type="primary"
                        onClick={() => deleteSearchedCountry()}
                        size="large"
                      >
                        <ArrowLeftOutlined className={style.arrowIcon} />
                        <span>Back</span>
                      </Button>
                      <SingleItem data={el} />
                    </div>
                  )
                )
              : countryData.map((el, index) =>
                  el.name === "Not Found" ? (
                    <>
                    <ElementNotFound key={index} msg={el.name}/>
                    </>
                  ) : (
                    <div
                      className={style.hoverElement}
                      onClick={() => countrySelect(el)}
                      key={index}
                    >
                      <MultipleItems data={el} />
                    </div>
                  )
                )}
          </div>
        </section>
      </>
  );
};

export default Home;
