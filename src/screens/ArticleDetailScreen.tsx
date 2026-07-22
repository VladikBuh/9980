import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { FadeInScreen } from '../components/FadeInScreen';
import { QuizOption } from '../components/quiz/QuizOption';

import type { QuizOptionStatus } from '../components/quiz/QuizOption';
import { icons } from '../data/assets';
import type { Article, QuizOptionId } from '../data/articles';
import { colors, fonts, fontSize, radius, spacing } from '../constants/theme';

type ArticleDetailScreenProps = {
  article: Article;
  onBack: () => void;
};

export function ArticleDetailScreen({
  article,
  onBack,
}: ArticleDetailScreenProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<QuizOptionId | null>(
    null,
  );

  const getStatus = (
    optionId: QuizOptionId,
    correct: boolean,
  ): QuizOptionStatus => {
    if (selectedOptionId === null) {
      return 'neutral';
    }
    if (correct) {
      return 'correct';
    }
    return optionId === selectedOptionId ? 'incorrect' : 'neutral';
  };

  return (
    <FadeInScreen style={styles.ArticleDetailScreenFadeWrap}>
      <ScrollView
        style={styles.ArticleDetailScreenBase}
        contentContainerStyle={styles.ArticleDetailScreenContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.ArticleDetailScreenTopSpacer} />

        <Pressable
          style={styles.ArticleDetailScreenBack}
          onPress={onBack}
          hitSlop={8}
        >
          <Image
            source={icons.backChevron}
            style={styles.ArticleDetailScreenBackIcon}
          />
          <Text style={styles.ArticleDetailScreenBackLabel}>Back</Text>
        </Pressable>

        <View style={styles.ArticleDetailScreenHeroMargin}>
          <View style={styles.ArticleDetailScreenHero}>
            <Image
              source={article.image}
              style={styles.ArticleDetailScreenHeroImage}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.ArticleDetailScreenBody}>
          <Text style={styles.ArticleDetailScreenTitle}>{article.title}</Text>
          {article.paragraphs.map((paragraph, index) => (
            <Text key={index} style={styles.ArticleDetailScreenParagraph}>
              {paragraph}
            </Text>
          ))}
        </View>

        <View style={styles.ArticleDetailScreenDivider} />

        <View style={styles.ArticleDetailScreenQuiz}>
          <View style={styles.ArticleDetailScreenQuizHeading}>
            <View style={styles.ArticleDetailScreenQuizAccentBar} />
            <Text style={styles.ArticleDetailScreenQuizTitle}>
              Knowledge Check
            </Text>
          </View>

          <Text style={styles.ArticleDetailScreenQuizQuestion}>
            {article.quiz.question}
          </Text>

          {article.quiz.options.map(option => (
            <QuizOption
              key={option.id}
              option={option}
              status={getStatus(option.id, option.correct)}
              disabled={selectedOptionId !== null}
              onPress={() => setSelectedOptionId(option.id)}
            />
          ))}
        </View>
      </ScrollView>
    </FadeInScreen>
  );
}

const styles = StyleSheet.create({
  ArticleDetailScreenFadeWrap: {
    flex: 1,
  },

  ArticleDetailScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },
  ArticleDetailScreenContent: {
    paddingBottom: spacing.xl,
  },
  ArticleDetailScreenTopSpacer: {
    height: 52,
  },

  ArticleDetailScreenBack: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    paddingBottom: spacing.m,
    paddingHorizontal: spacing.m,
  },

  ArticleDetailScreenBackIcon: {
    height: 22,
    width: 22,
  },
  ArticleDetailScreenBackLabel: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.body,
    fontWeight: '500',
  },

  ArticleDetailScreenHeroMargin: {
    paddingHorizontal: spacing.l,
  },
  ArticleDetailScreenHero: {
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    height: 220,
    overflow: 'hidden',
  },
  ArticleDetailScreenHeroImage: {
    height: '100%',
    width: '100%',
  },
  ArticleDetailScreenBody: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.xl,
  },

  ArticleDetailScreenTitle: {
    color: colors.heading,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.title,
    fontWeight: '500',
    lineHeight: 31.2,
  },
  ArticleDetailScreenParagraph: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.small,
    lineHeight: 23.8,
    marginTop: spacing.l,
  },

  ArticleDetailScreenDivider: {
    backgroundColor: colors.divider,
    height: 1,
    marginHorizontal: spacing.l,
    marginTop: spacing.xl,
  },
  ArticleDetailScreenQuiz: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.xl,
  },
  ArticleDetailScreenQuizHeading: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.s,
  },
  ArticleDetailScreenQuizAccentBar: {
    backgroundColor: colors.accent,
    borderRadius: 2,
    height: 20,
    width: 4,
  },

  ArticleDetailScreenQuizTitle: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.sectionHeading,
    fontWeight: '500',
  },

  ArticleDetailScreenQuizQuestion: {
    color: colors.heading,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    lineHeight: 22.5,
    marginTop: spacing.l,
  },
});
