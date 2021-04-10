import style from "../../style/SingleItem.module.scss";
const SingleItem = ({ data }) => {
  console.log(data);
  return (
    <div className={style.dFlex}>
      <img src={data.flag} width={500} />
      <div className={style.rightSide}>
        <h1>{data.name}</h1>
        <div className={style.mainData}>
          <div className={style.leftSideData}>
            <p>Native Name: <b>{data.nativeName}</b></p>
            <p>Population: <b>{data.population}</b></p>
            <p>Region: <b>{data.region}</b></p>
            <p>Sub Region: <b>{data.subregion}</b></p>
            <p>Capital: <b>{data.capital}</b></p>
          </div>
          <div className={style.rightSideData}>
            <p>
              Top level domain: 
              <b>{data.topLevelDomain[0]}</b>
            </p>
            <p>Currencies: <b>{data.currencies[0].code}</b></p>
            <p>Languages: <b>{data.languages[0].name}</b></p>
          </div>
        </div>
        <div className={style.neighborhood}>
          <p>Border Countries:</p>
          <div>
            {data.borders.map((el, index) => (
              <span key={index}>{el}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleItem;
