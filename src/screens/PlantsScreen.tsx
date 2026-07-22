import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FadeInScreen } from '../components/FadeInScreen';
import { PlantCard } from '../components/plants/PlantCard';

import { usePlants } from '../context/PlantsContext';
import { PLANTS } from '../data/plants';

import type { PlantCategory } from '../data/plants';
import { colors, fonts, fontSize, radius, spacing } from '../constants/theme';

type PlantsScreenProps = {
  onSelectPlant: (plantId: string) => void;
};

const CATEGORIES: { key: PlantCategory; label: string }[] = [
  { key: 'common', label: 'Common' },
  { key: 'poisonous', label: 'Poisonous' },
];

export function PlantsScreen({ onSelectPlant }: PlantsScreenProps) {
  const { favoriteIds, toggleFavorite } = usePlants();
  const [activeCategory, setActiveCategory] = useState<PlantCategory>('common');

  const plants = PLANTS.filter(plant => plant.category === activeCategory);

  return (
    <FadeInScreen style={styles.PlantsScreenFadeWrap}>
      <ScrollView
        style={styles.PlantsScreenBase}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.PlantsScreenTopSpacer} />

        <View style={styles.PlantsScreenHeader}>
          <Text style={styles.PlantsScreenTitle}>Plants</Text>
          <Text style={styles.PlantsScreenSubtitle}>
            Explore exotic rainforest flora
          </Text>
        </View>

        <View style={styles.PlantsScreenDivider} />

        <View style={styles.PlantsScreenToggle}>
          {CATEGORIES.map(category => {
            const isActive = category.key === activeCategory;

            return (
              <Pressable
                key={category.key}
                style={[
                  styles.PlantsScreenToggleButton,
                  isActive && styles.PlantsScreenToggleButtonActive,
                ]}
                onPress={() => setActiveCategory(category.key)}
              >
                <Text
                  style={[
                    styles.PlantsScreenToggleLabel,
                    isActive && styles.PlantsScreenToggleLabelActive,
                  ]}
                >
                  {category.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.PlantsScreenList}>
          {plants.map(plant => (
            <PlantCard
              key={plant.id}
              plant={plant}
              isFavorite={favoriteIds.has(plant.id)}
              onPress={() => onSelectPlant(plant.id)}
              onToggleFavorite={() => toggleFavorite(plant.id)}
            />
          ))}
        </View>
      </ScrollView>
    </FadeInScreen>
  );
}

const styles = StyleSheet.create({
  PlantsScreenFadeWrap: {
    flex: 1,
  },
  PlantsScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },

  PlantsScreenTopSpacer: {
    height: 52,
  },
  PlantsScreenHeader: {
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.l,
  },
  PlantsScreenTitle: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.title,
    fontWeight: '500',
    lineHeight: 28.8,
  },

  PlantsScreenSubtitle: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    marginTop: 4,
  },

  PlantsScreenDivider: {
    backgroundColor: colors.divider,
    height: 1,
    marginHorizontal: spacing.l,
  },
  PlantsScreenToggle: {
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    flexDirection: 'row',
    margin: spacing.l,
    marginBottom: 0,
    padding: 4,
  },

  PlantsScreenToggleButton: {
    alignItems: 'center',
    borderRadius: radius.card,
    flex: 1,
    paddingVertical: 10,
  },
  PlantsScreenToggleButtonActive: {
    backgroundColor: colors.accent,
  },
  PlantsScreenToggleLabel: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.small,
  },

  PlantsScreenToggleLabelActive: {
    color: colors.accentText,
    fontFamily: fonts.sansMedium,
    fontWeight: '500',
  },

  PlantsScreenList: {
    gap: spacing.xl,
    padding: spacing.l,
  },
});
