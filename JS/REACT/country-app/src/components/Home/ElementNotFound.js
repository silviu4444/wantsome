import style from "../../style/ElementNotFound.module.scss";
const ElementNotFound = ({ msg }) => {
  return <h1 className={style.notFound}>{msg}</h1>;
};
export default ElementNotFound;
