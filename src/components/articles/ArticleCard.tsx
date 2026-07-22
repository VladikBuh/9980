import React from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';

import {icons} from '../../data/assets';
import type {Article} from '../../data/articles';
import {colors, fonts, fontSize, radius} from '../../constants/theme';

type ArticleCardProps = {
  article: Article;
  isFavorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
};

export function ArticleCard({
  article,
  isFavorite,
  onPress,
  onToggleFavorite,
}: ArticleCardProps) {
  const handleShare = () => {
    Share.share({
      title: article.title,
      message: `${article.title}\n${article.shortDescription}`,
    }).catch(() => {});
  };

  return (
    <Pressable style={styles.ArticleCardBase} onPress={onPress}>
      <View style={styles.ArticleCardImageContainer}>
        <Image
          source={article.image}
          style={styles.ArticleCardImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.ArticleCardBody}>
        <Text style={styles.ArticleCardTitle} numberOfLines={1}>
          {article.title}
        </Text>
        <Text style={styles.ArticleCardDescription} numberOfLines={1}>
          {article.shortDescription}
        </Text>

        <View style={styles.ArticleCardActions}>
          <Pressable onPress={onToggleFavorite} hitSlop={8}>
            <Image
              source={isFavorite ? icons.liked : icons.like}
              style={styles.ArticleCardActionIcon}
            />
          </Pressable>
          <Pressable onPress={handleShare} hitSlop={8}>
            <Image source={icons.share} style={styles.ArticleCardActionIcon} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ArticleCardBase: {
    backgroundColor: colors.articleCardBg,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    overflow: 'hidden',
  },
  ArticleCardImageContainer: {
    backgroundColor: colors.card,
    height: 168,
    width: '100%',
  },
  ArticleCardImage: {
    height: '100%',
    width: '100%',
  },
  ArticleCardBody: {
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 14,
  },
  ArticleCardTitle: {
    color: colors.heading,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.cardTitle,
    fontWeight: '500',
  },
  ArticleCardDescription: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    marginTop: 6,
  },
  ArticleCardActions: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 14,
  },
  ArticleCardActionIcon: {
    height: 18,
    width: 18,
  },
});
