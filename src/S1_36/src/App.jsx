import { useState } from "react";
import "./styles/reset.css";
import "./styles/globalStyles.css";
import "./styles/index.css";
import { Header } from "./components/Header";
import { RegisterForm } from "./components/RegisterForm";
import { OverView } from "./components/Overview";
import { OverViewInfo } from "./components/OverViewInfo";
import { AmountSummary } from "./components/AmountSummary";

function App() {
  const [accountCards, setAccountCards] = useState([]);

  const getNewCard = (newCard) => {
    setAccountCards([...accountCards, newCard]);
  };
  const deleteCard = (event) => {
    const currentCardId = event.target.id;
    const updatedCards = [...accountCards].filter(
      (card, index) => index != currentCardId
    );
    setAccountCards(updatedCards);
  };

  return (
    <>
      <Header />
      <main className="pageAlign">
        <section className="formSection">
          <RegisterForm getInfo={getNewCard} />
          <AmountSummary cards={accountCards} />
        </section>
        <OverView>
          <OverViewInfo cards={accountCards} deleteAction={deleteCard} />
        </OverView>
      </main>
    </>
  );
}

export default App;
