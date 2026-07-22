import React, {createContext, useContext, useMemo, useState} from 'react';

type PlantsContextValue = {
  favoriteIds: Set<string>;
  toggleFavorite: (plantId: string) => void;
};

const PlantsContext = createContext<PlantsContextValue | null>(null);

type PlantsProviderProps = {
  children: React.ReactNode;
};

export function PlantsProvider({children}: PlantsProviderProps) {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  const toggleFavorite = (plantId: string) => {
    setFavoriteIds(prev => {
      const next = new Set(prev);
      if (next.has(plantId)) {
        next.delete(plantId);
      } else {
        next.add(plantId);
      }
      return next;
    });
  };

  const value = useMemo(() => ({favoriteIds, toggleFavorite}), [favoriteIds]);

  return (
    <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
  );
}

export function usePlants() {
  const context = useContext(PlantsContext);
  if (!context) {
    throw new Error('usePlants must be used within PlantsProvider');
  }
  return context;
}
