import React from 'react';
import { Image, Pressable, Share, StyleSheet, Text, View } from 'react-native';

import { icons } from '../../data/assets';
import type { Animal } from '../../data/animals';
import { colors, fonts, fontSize, radius } from '../../constants/theme';

type AnimalCardProps = {
  animal: Animal;
  isFavorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
};

export function AnimalCard({
  animal,
  isFavorite,
  onPress,
  onToggleFavorite,
}: AnimalCardProps) {
  const handleShare = () => {
    Share.share({
      title: animal.title,
      message: `${animal.title}\n${animal.shortDescription}`,
    }).catch(() => {});
  };

  return (
    <Pressable style={styles.AnimalCardBase} onPress={onPress}>
      <View style={styles.AnimalCardImageContainer}>
        <Image
          source={animal.image}
          style={styles.AnimalCardImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.AnimalCardBody}>
        <Text style={styles.AnimalCardTitle} numberOfLines={1}>
          {animal.title}
        </Text>
        <Text style={styles.AnimalCardDescription} numberOfLines={1}>
          {animal.shortDescription}
        </Text>

        <View style={styles.AnimalCardActions}>
          <Pressable onPress={onToggleFavorite} hitSlop={8}>
            <Image
              source={isFavorite ? icons.liked : icons.like}
              style={styles.AnimalCardActionIcon}
            />
          </Pressable>
          <Pressable onPress={handleShare} hitSlop={8}>
            <Image source={icons.share} style={styles.AnimalCardActionIcon} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  AnimalCardBase: {
    backgroundColor: colors.articleCardBg,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    overflow: 'hidden',
  },
  AnimalCardImageContainer: {
    backgroundColor: colors.card,
    height: 168,
    width: '100%',
  },

  AnimalCardImage: {
    height: '100%',
    width: '100%',
  },
  AnimalCardBody: {
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 14,
  },

  AnimalCardTitle: {
    color: colors.heading,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.cardTitle,
    fontWeight: '500',
  },
  AnimalCardDescription: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    marginTop: 6,
  },
  AnimalCardActions: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 14,
  },

  AnimalCardActionIcon: {
    height: 18,
    width: 18,
  },
});
