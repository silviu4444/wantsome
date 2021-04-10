import style from "../../style/MultipleItems.module.scss";
const MultipleItems = ({ data }) => {
  return (
    <div className={style.dFlex}>
      <div className={style.itemsData}>
      <img src={data.flag} alt={data.name}/>
        <div className={style.infoData}>
        <h1>{data.name}</h1>
        <p>Population: {data.population}</p>
        <p>Region: {data.region}</p>
        <p>Capital: {data.capital}</p>
        </div>
      </div>
    </div>
  );
};
export default MultipleItems;
