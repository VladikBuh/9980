import React, {createContext, useContext, useMemo, useState} from 'react';

type AnimalsContextValue = {
  favoriteIds: Set<string>;
  toggleFavorite: (animalId: string) => void;
};

const AnimalsContext = createContext<AnimalsContextValue | null>(null);

type AnimalsProviderProps = {
  children: React.ReactNode;
};

export function AnimalsProvider({children}: AnimalsProviderProps) {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  const toggleFavorite = (animalId: string) => {
    setFavoriteIds(prev => {
      const next = new Set(prev);
      if (next.has(animalId)) {
        next.delete(animalId);
      } else {
        next.add(animalId);
      }
      return next;
    });
  };

  const value = useMemo(() => ({favoriteIds, toggleFavorite}), [favoriteIds]);

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  );
}

export function useAnimals() {
  const context = useContext(AnimalsContext);
  if (!context) {
    throw new Error('useAnimals must be used within AnimalsProvider');
  }
  return context;
}
