import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AnimalCard } from '../components/animals/AnimalCard';
import { FadeInScreen } from '../components/FadeInScreen';
import { useAnimals } from '../context/AnimalsContext';

import { ANIMALS } from '../data/animals';

import type { AnimalCategory } from '../data/animals';
import { colors, fonts, fontSize, radius, spacing } from '../constants/theme';

type AnimalsScreenProps = {
  onSelectAnimal: (animalId: string) => void;
};

const CATEGORIES: { key: AnimalCategory; label: string }[] = [
  { key: 'predator', label: 'Predators' },
  { key: 'herbivore', label: 'Herbivores' },
];

export function AnimalsScreen({ onSelectAnimal }: AnimalsScreenProps) {
  const { favoriteIds, toggleFavorite } = useAnimals();
  const [activeCategory, setActiveCategory] =
    useState<AnimalCategory>('predator');

  const animals = ANIMALS.filter(animal => animal.category === activeCategory);

  return (
    <FadeInScreen style={styles.AnimalsScreenFadeWrap}>
      <ScrollView
        style={styles.AnimalsScreenBase}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.AnimalsScreenTopSpacer} />

        <View style={styles.AnimalsScreenHeader}>
          <Text style={styles.AnimalsScreenTitle}>Animals</Text>
          <Text style={styles.AnimalsScreenSubtitle}>
            Discover jungle wildlife and their habitats
          </Text>
        </View>

        <View style={styles.AnimalsScreenDivider} />

        <View style={styles.AnimalsScreenToggle}>
          {CATEGORIES.map(category => {
            const isActive = category.key === activeCategory;

            return (
              <Pressable
                key={category.key}
                style={[
                  styles.AnimalsScreenToggleButton,
                  isActive && styles.AnimalsScreenToggleButtonActive,
                ]}
                onPress={() => setActiveCategory(category.key)}
              >
                <Text
                  style={[
                    styles.AnimalsScreenToggleLabel,
                    isActive && styles.AnimalsScreenToggleLabelActive,
                  ]}
                >
                  {category.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.AnimalsScreenList}>
          {animals.map(animal => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              isFavorite={favoriteIds.has(animal.id)}
              onPress={() => onSelectAnimal(animal.id)}
              onToggleFavorite={() => toggleFavorite(animal.id)}
            />
          ))}
        </View>
      </ScrollView>
    </FadeInScreen>
  );
}

const styles = StyleSheet.create({
  AnimalsScreenFadeWrap: {
    flex: 1,
  },
  AnimalsScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },

  AnimalsScreenTopSpacer: {
    height: 52,
  },

  AnimalsScreenHeader: {
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.l,
  },
  AnimalsScreenTitle: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.title,
    fontWeight: '500',
    lineHeight: 28.8,
  },
  AnimalsScreenSubtitle: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    marginTop: 4,
  },
  AnimalsScreenDivider: {
    backgroundColor: colors.divider,
    height: 1,
    marginHorizontal: spacing.l,
  },

  AnimalsScreenToggle: {
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    flexDirection: 'row',
    margin: spacing.l,
    marginBottom: 0,
    padding: 4,
  },

  AnimalsScreenToggleButton: {
    alignItems: 'center',
    borderRadius: radius.card,
    flex: 1,
    paddingVertical: 10,
  },
  AnimalsScreenToggleButtonActive: {
    backgroundColor: colors.accent,
  },

  AnimalsScreenToggleLabel: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.small,
  },
  AnimalsScreenToggleLabelActive: {
    color: colors.accentText,
    fontFamily: fonts.sansMedium,
    fontWeight: '500',
  },

  AnimalsScreenList: {
    gap: spacing.xl,
    padding: spacing.l,
  },
});
