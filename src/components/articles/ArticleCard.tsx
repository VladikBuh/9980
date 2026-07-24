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
  /** Side-by-side layout for tight vertical space (e.g. map landscape). */
  compact?: boolean;
};

export function ArticleCard({
  article,
  isFavorite,
  onPress,
  onToggleFavorite,
  compact = false,
}: ArticleCardProps) {
  const handleShare = () => {
    Share.share({
      title: article.title,
      message: `${article.title}\n${article.shortDescription}`,
    }).catch(() => {});
  };

  return (
    <Pressable
      style={[
        styles.ArticleCardBase,
        compact && styles.ArticleCardBaseCompact,
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.ArticleCardImageContainer,
          compact && styles.ArticleCardImageContainerCompact,
        ]}
      >
        <Image
          source={article.image}
          style={styles.ArticleCardImage}
          resizeMode="cover"
        />
      </View>

      <View
        style={[
          styles.ArticleCardBody,
          compact && styles.ArticleCardBodyCompact,
        ]}
      >
        <Text
          style={styles.ArticleCardTitle}
          numberOfLines={compact ? 2 : 1}
        >
          {article.title}
        </Text>
        <Text
          style={styles.ArticleCardDescription}
          numberOfLines={compact ? 2 : 1}
        >
          {article.shortDescription}
        </Text>

        <View
          style={[
            styles.ArticleCardActions,
            compact && styles.ArticleCardActionsCompact,
          ]}
        >
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
  ArticleCardBaseCompact: {
    flexDirection: 'row',
  },
  ArticleCardImageContainer: {
    backgroundColor: colors.card,
    height: 168,
    width: '100%',
  },
  ArticleCardImageContainerCompact: {
    height: 112,
    width: 112,
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
  ArticleCardBodyCompact: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
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
  ArticleCardActionsCompact: {
    marginTop: 10,
  },
  ArticleCardActionIcon: {
    height: 18,
    width: 18,
  },
});
