import styles from "./style.module.css";
import "../../../styles/globalStyles.css";
export const RegisteredCard = ({
  description,
  value,
  category,
  index,
  deleteAction,
}) => {
  if (category == "-") {
    return (
      <li className={[styles.expense, styles.registeredCard].join(" ")}>
        <h2 className="title3">{description}</h2>
        <p className="text2">Despesa</p>
        <p className={`${styles.registeredCardValue} text2`}>
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          id={index}
          className={[styles.deleteButton, "text3"].join(" ")}
          onClick={deleteAction}
        >
          Excluir
        </button>
      </li>
    );
  } else {
    return (
      <li className={[styles.income, styles.registeredCard].join(" ")}>
        <h2 className="title3">{description}</h2>
        <p className="text2">Entrada</p>
        <p className={`${styles.registeredCardValue} text2`}>
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          id={index}
          className={[styles.deleteButton, "text3"].join(" ")}
          onClick={deleteAction}
        >
          Excluir
        </button>
      </li>
    );
  }
};
