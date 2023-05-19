import styles from "./style.module.css";
export const AmountSummary = ({ cards }) => {
  if (cards.length != 0) {
    let totalAmount = 0;
    cards.forEach((card) => {
      if (card.category == "+") {
        totalAmount += card.value;
      } else {
        totalAmount -= card.value;
      }
    });
    return (
      <section className={styles.totalAmount}>
        <div>
          <h2 className="title3">Valor total:</h2>
          <h2 className={`${"title3"} ${styles.pink}`}>
            {totalAmount.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
        </div>
        <small className="text2">O valor se refere ao saldo</small>
      </section>
    );
  }
};
