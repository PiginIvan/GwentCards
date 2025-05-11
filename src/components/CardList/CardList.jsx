import { useGwent } from '../../context/GwentContext';
import { useFetch } from '../../hooks/useFetch';

export const CardList = () => {
  const { filteredCards, setSelectedCard, loading, error } = useGwent();
  
  useFetch("https://api.gwent.one/?key=data&version=1.0.0.15&response=json&language=en");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul className="cards-list">
      {filteredCards.map((card) => (
        <li 
          key={card.id.card} 
          onClick={() => setSelectedCard(card)}
        >
          {card.name}
        </li>
      ))}
    </ul>
  );
};