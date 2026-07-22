import React, {createContext, useContext, useMemo, useState} from 'react';

type ArticlesContextValue = {
  favoriteIds: Set<string>;
  toggleFavorite: (articleId: string) => void;
};

const ArticlesContext = createContext<ArticlesContextValue | null>(null);

type ArticlesProviderProps = {
  children: React.ReactNode;
};

export function ArticlesProvider({children}: ArticlesProviderProps) {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  const toggleFavorite = (articleId: string) => {
    setFavoriteIds(prev => {
      const next = new Set(prev);
      if (next.has(articleId)) {
        next.delete(articleId);
      } else {
        next.add(articleId);
      }
      return next;
    });
  };

  const value = useMemo(
    () => ({favoriteIds, toggleFavorite}),
    [favoriteIds],
  );

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within ArticlesProvider');
  }
  return context;
}
