import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ArticleCard } from '../components/articles/ArticleCard';
import { FadeInScreen } from '../components/FadeInScreen';

import { useArticles } from '../context/ArticlesContext';
import { ARTICLES } from '../data/articles';
import { colors, fonts, fontSize, spacing } from '../constants/theme';

type ArticlesScreenProps = {
  onSelectArticle: (articleId: string) => void;
};

export function ArticlesScreen({ onSelectArticle }: ArticlesScreenProps) {
  const { favoriteIds, toggleFavorite } = useArticles();

  return (
    <FadeInScreen style={styles.ArticlesScreenFadeWrap}>
      <ScrollView
        style={styles.ArticlesScreenBase}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.ArticlesScreenTopSpacer} />

        <View style={styles.ArticlesScreenHeader}>
          <Text style={styles.ArticlesScreenTitle}>Jungle Articles</Text>
          <Text style={styles.ArticlesScreenSubtitle}>
            Explore the world's most amazing rainforests
          </Text>
        </View>

        <View style={styles.ArticlesScreenDivider} />

        <View style={styles.ArticlesScreenList}>
          {ARTICLES.map(article => (
            <ArticleCard
              key={article.id}
              article={article}
              isFavorite={favoriteIds.has(article.id)}
              onPress={() => onSelectArticle(article.id)}
              onToggleFavorite={() => toggleFavorite(article.id)}
            />
          ))}
        </View>
      </ScrollView>
    </FadeInScreen>
  );
}

const styles = StyleSheet.create({
  ArticlesScreenFadeWrap: {
    flex: 1,
  },
  ArticlesScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },
  ArticlesScreenTopSpacer: {
    height: 52,
  },
  ArticlesScreenHeader: {
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.l,
  },

  ArticlesScreenTitle: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.title,
    fontWeight: '500',
    lineHeight: 28.8,
  },

  ArticlesScreenSubtitle: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    marginTop: 4,
  },

  ArticlesScreenDivider: {
    backgroundColor: colors.divider,
    height: 1,
    marginHorizontal: spacing.l,
  },

  ArticlesScreenList: {
    gap: spacing.xl,
    padding: spacing.l,
  },
});
