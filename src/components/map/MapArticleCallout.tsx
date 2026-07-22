import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { ArticleCard } from '../articles/ArticleCard';
import { icons } from '../../data/assets';
import type { Article } from '../../data/articles';

type MapArticleCalloutProps = {
  article: Article;
  isFavorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
  onClose: () => void;
};

export function MapArticleCallout({
  article,
  isFavorite,
  onPress,
  onToggleFavorite,
  onClose,
}: MapArticleCalloutProps) {
  return (
    <View style={styles.MapArticleCalloutBase}>
      <ArticleCard
        article={article}
        isFavorite={isFavorite}
        onPress={onPress}
        onToggleFavorite={onToggleFavorite}
      />
      <Pressable
        style={styles.MapArticleCalloutClose}
        onPress={onClose}
        hitSlop={8}
      >
        <Image source={icons.close} style={styles.MapArticleCalloutCloseIcon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  MapArticleCalloutBase: {
    position: 'relative',
  },
  MapArticleCalloutClose: {
    alignItems: 'center',

    borderRadius: 11,

    height: 22,
    justifyContent: 'center',
    position: 'absolute',
    right: 4,
    top: 4,
    width: 22,
  },

  MapArticleCalloutCloseIcon: {
    height: 14,
    width: 14,
  },
});
