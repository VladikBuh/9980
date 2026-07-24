import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { AnimalCard } from '../components/animals/AnimalCard';
import { ArticleCard } from '../components/articles/ArticleCard';

import { FadeInScreen } from '../components/FadeInScreen';
import { PlantCard } from '../components/plants/PlantCard';
import { useAnimals } from '../context/AnimalsContext';

import { useArticles } from '../context/ArticlesContext';
import { usePlants } from '../context/PlantsContext';
import { favoritesMascot } from '../data/assets';
import { ANIMALS } from '../data/animals';

import { ARTICLES } from '../data/articles';
import { PLANTS } from '../data/plants';
import { colors, fonts, fontSize, radius, spacing } from '../constants/theme';

export type FavoritesCategory = 'jungles' | 'animals' | 'plants';

type FavoritesScreenProps = {
  onSelectArticle: (articleId: string) => void;
  onSelectAnimal: (animalId: string) => void;
  onSelectPlant: (plantId: string) => void;
  onExplore: (category: FavoritesCategory) => void;
};

const CATEGORIES: { key: FavoritesCategory; label: string }[] = [
  { key: 'jungles', label: 'Jungles' },
  { key: 'animals', label: 'Animals' },
  { key: 'plants', label: 'Plants' },
];

const EMPTY_STATE_COPY: Record<
  FavoritesCategory,
  { subtitle: string; itemLabel: string }
> = {
  jungles: { subtitle: 'Your saved articles', itemLabel: 'article' },
  animals: { subtitle: 'Your saved animals', itemLabel: 'animal' },
  plants: { subtitle: 'Your saved plants', itemLabel: 'plant' },
};

export function FavoritesScreen({
  onSelectArticle,
  onSelectAnimal,
  onSelectPlant,
  onExplore,
}: FavoritesScreenProps) {
  const { favoriteIds: favoriteArticleIds, toggleFavorite: toggleArticle } =
    useArticles();
  const { favoriteIds: favoriteAnimalIds, toggleFavorite: toggleAnimal } =
    useAnimals();
  const { favoriteIds: favoritePlantIds, toggleFavorite: togglePlant } =
    usePlants();

  const [activeCategory, setActiveCategory] =
    useState<FavoritesCategory>('jungles');

  const favoriteArticles = ARTICLES.filter(article =>
    favoriteArticleIds.has(article.id),
  );
  const favoriteAnimals = ANIMALS.filter(animal =>
    favoriteAnimalIds.has(animal.id),
  );
  const favoritePlants = PLANTS.filter(plant => favoritePlantIds.has(plant.id));

  const isEmpty =
    activeCategory === 'jungles'
      ? favoriteArticles.length === 0
      : activeCategory === 'animals'
      ? favoriteAnimals.length === 0
      : favoritePlants.length === 0;

  const emptyCopy = EMPTY_STATE_COPY[activeCategory];

  return (
    <FadeInScreen style={styles.FavoritesScreenFadeWrap}>
      <ScrollView
        style={styles.FavoritesScreenBase}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.FavoritesScreenTopSpacer} />

        <View style={styles.FavoritesScreenHeader}>
          <Text style={styles.FavoritesScreenTitle}>Favorites</Text>
          <Text style={styles.FavoritesScreenSubtitle}>
            {emptyCopy.subtitle}
          </Text>
        </View>

        <View style={styles.FavoritesScreenDivider} />

        <View style={styles.FavoritesScreenToggle}>
          {CATEGORIES.map(category => {
            const isActive = category.key === activeCategory;

            return (
              <Pressable
                key={category.key}
                style={[
                  styles.FavoritesScreenToggleButton,
                  isActive && styles.FavoritesScreenToggleButtonActive,
                ]}
                onPress={() => setActiveCategory(category.key)}
              >
                <Text
                  style={[
                    styles.FavoritesScreenToggleLabel,
                    isActive && styles.FavoritesScreenToggleLabelActive,
                  ]}
                >
                  {category.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {isEmpty ? (
          <View style={styles.FavoritesScreenEmpty}>
            <View style={styles.FavoritesScreenEmptyImageFrame}>
              <Image
                source={favoritesMascot}
                style={styles.FavoritesScreenEmptyImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.FavoritesScreenEmptyTitle}>
              No Favorites Yet
            </Text>
            <Text style={styles.FavoritesScreenEmptyDescription}>
              {`Save ${emptyCopy.itemLabel}s to find them here later. Tap the heart icon on any ${emptyCopy.itemLabel} to add it to your favorites.`}
            </Text>
            <Pressable
              style={styles.FavoritesScreenExploreButton}
              onPress={() => onExplore(activeCategory)}
            >
              <Text style={styles.FavoritesScreenExploreButtonLabel}>
                Explore
              </Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.FavoritesScreenList}>
            {activeCategory === 'jungles' &&
              favoriteArticles.map(article => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  isFavorite
                  onPress={() => onSelectArticle(article.id)}
                  onToggleFavorite={() => toggleArticle(article.id)}
                />
              ))}
            {activeCategory === 'animals' &&
              favoriteAnimals.map(animal => (
                <AnimalCard
                  key={animal.id}
                  animal={animal}
                  isFavorite
                  onPress={() => onSelectAnimal(animal.id)}
                  onToggleFavorite={() => toggleAnimal(animal.id)}
                />
              ))}
            {activeCategory === 'plants' &&
              favoritePlants.map(plant => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  isFavorite
                  onPress={() => onSelectPlant(plant.id)}
                  onToggleFavorite={() => togglePlant(plant.id)}
                />
              ))}
          </View>
        )}
      </ScrollView>
    </FadeInScreen>
  );
}

const styles = StyleSheet.create({
  FavoritesScreenFadeWrap: {
    flex: 1,
  },
  FavoritesScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },
  FavoritesScreenTopSpacer: {
    height: 52,
  },

  FavoritesScreenHeader: {
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.l,
  },

  FavoritesScreenTitle: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.title,
    fontWeight: '500',
    lineHeight: 28.8,
  },
  FavoritesScreenSubtitle: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    marginTop: 4,
  },

  FavoritesScreenDivider: {
    backgroundColor: colors.divider,
    height: 1,
    marginHorizontal: spacing.l,
  },
  FavoritesScreenToggle: {
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    flexDirection: 'row',
    margin: spacing.l,
    marginBottom: 0,
    padding: 4,
  },

  FavoritesScreenToggleButton: {
    alignItems: 'center',
    borderRadius: radius.card,
    flex: 1,
    paddingVertical: 10,
  },
  FavoritesScreenToggleButtonActive: {
    backgroundColor: colors.accent,
  },
  FavoritesScreenToggleLabel: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.small,
  },
  FavoritesScreenToggleLabelActive: {
    color: colors.accentText,
    fontFamily: fonts.sansMedium,
    fontWeight: '500',
  },
  FavoritesScreenList: {
    gap: spacing.xl,
    padding: spacing.l,
  },
  FavoritesScreenEmpty: {
    alignItems: 'center',
    paddingHorizontal: spacing.l,
    paddingTop: spacing.xl,
  },

  FavoritesScreenEmptyImageFrame: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    height: 310,
    justifyContent: 'center',
    marginBottom: spacing.xl,
    width: '100%',
  },
  FavoritesScreenEmptyImage: {
    height: 291,
    width: 172,
  },

  FavoritesScreenEmptyTitle: {
    color: colors.heading,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.sectionHeading,
    fontWeight: '500',
    textAlign: 'center',
  },
  FavoritesScreenEmptyDescription: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.small,
    lineHeight: 22.4,
    marginTop: spacing.s,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
  FavoritesScreenExploreButton: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: radius.button,
    justifyContent: 'center',
    paddingVertical: 14,
    width: '100%',
    marginBottom: 40,
  },

  FavoritesScreenExploreButtonLabel: {
    color: colors.accentText,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.buttonPrimary,
    fontWeight: '500',
  },
});
