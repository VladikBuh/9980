import React from 'react';
import { Image, Pressable, Share, StyleSheet, Text, View } from 'react-native';

import { icons } from '../../data/assets';
import type { Plant } from '../../data/plants';
import { colors, fonts, fontSize, radius } from '../../constants/theme';

type PlantCardProps = {
  plant: Plant;
  isFavorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
};

export function PlantCard({
  plant,
  isFavorite,
  onPress,
  onToggleFavorite,
}: PlantCardProps) {
  const handleShare = () => {
    Share.share({
      title: plant.title,
      message: `${plant.title}\n${plant.shortDescription}`,
    }).catch(() => {});
  };

  return (
    <Pressable style={styles.PlantCardBase} onPress={onPress}>
      <View style={styles.PlantCardImageContainer}>
        <Image
          source={plant.image}
          style={styles.PlantCardImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.PlantCardBody}>
        <Text style={styles.PlantCardTitle} numberOfLines={1}>
          {plant.title}
        </Text>
        <Text style={styles.PlantCardDescription} numberOfLines={1}>
          {plant.shortDescription}
        </Text>

        <View style={styles.PlantCardActions}>
          <Pressable onPress={onToggleFavorite} hitSlop={8}>
            <Image
              source={isFavorite ? icons.liked : icons.like}
              style={styles.PlantCardActionIcon}
            />
          </Pressable>
          <Pressable onPress={handleShare} hitSlop={8}>
            <Image source={icons.share} style={styles.PlantCardActionIcon} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  PlantCardBase: {
    backgroundColor: colors.articleCardBg,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    overflow: 'hidden',
  },

  PlantCardImageContainer: {
    backgroundColor: colors.card,
    height: 168,
    width: '100%',
  },
  PlantCardImage: {
    height: '100%',
    width: '100%',
  },
  PlantCardBody: {
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 14,
  },
  PlantCardTitle: {
    color: colors.heading,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.cardTitle,
    fontWeight: '500',
  },

  PlantCardDescription: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    marginTop: 6,
  },
  PlantCardActions: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 14,
  },

  PlantCardActionIcon: {
    height: 18,
    width: 18,
  },
});
