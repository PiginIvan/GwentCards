import { createContext, useState, useEffect, useContext } from 'react';

const GwentContext = createContext();

export const GwentProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      setFilteredCards(
        cards.filter(card => 
          card.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    } else {
      setFilteredCards(cards);
    }
  }, [searchQuery, cards]);

  return (
    <GwentContext.Provider
      value={{
        cards,
        filteredCards,
        setCards,
        selectedCard,
        setSelectedCard,
        loading,
        setLoading,
        error,
        setError,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </GwentContext.Provider>
  );
};

export const useGwent = () => {
  const context = useContext(GwentContext);
  if (context === undefined) {
    throw new Error('useGwent must be used within a GwentProvider');
  }
  return context;
};