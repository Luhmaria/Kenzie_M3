import styles from "./style.module.css";
export const OverView = ({ children }) => {
  return (
    <aside className={styles.overView}>
      <h1 className="title3">Resumo Financeiro</h1>
      <ul className={styles.overViewList}>{children}</ul>
    </aside>
  );
};
