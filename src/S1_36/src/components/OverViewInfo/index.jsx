import { RegisteredCard } from "./RegisteredCard";
export const OverViewInfo = ({ cards, deleteAction }) => {
  if (cards.length == 0) {
    return (
      <li>
        <h2 className="title2">Você ainda não possui nenhum lançamento</h2>
      </li>
    );
  } else {
    const allCards = cards.map((card, index) => {
      return (
        <RegisteredCard
          index={index}
          key={index}
          description={card.description}
          value={card.value}
          category={card.category}
          deleteAction={deleteAction}
        />
      );
    });
    return allCards;
  }
};
