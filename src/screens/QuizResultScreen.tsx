import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { FadeInScreen } from '../components/FadeInScreen';
import { quizMascots } from '../data/assets';
import { colors, fonts, fontSize, radius, spacing } from '../constants/theme';

type QuizResultScreenProps = {
  score: number;
  total: number;
  onPlayAgain: () => void;
  onBackHome: () => void;
};

function getResultTitle(ratio: number) {
  if (ratio >= 0.9) {
    return 'Amazing, Explorer!';
  }
  if (ratio >= 0.6) {
    return 'Not Bad, Explorer!';
  }
  return 'Keep Exploring!';
}

export function QuizResultScreen({
  score,
  total,
  onPlayAgain,
  onBackHome,
}: QuizResultScreenProps) {
  const title = getResultTitle(total > 0 ? score / total : 0);

  return (
    <FadeInScreen style={styles.QuizResultScreenBase}>
      <View style={styles.QuizResultScreenTopSpacer} />

      <View style={styles.QuizResultScreenHeader}>
        <Text style={styles.QuizResultScreenTitle}>Results</Text>
      </View>

      <View style={styles.QuizResultScreenDivider} />

      <View style={styles.QuizResultScreenCardMargin}>
        <View style={styles.QuizResultScreenCard}>
          <Image
            source={quizMascots.result}
            style={styles.QuizResultScreenImage}
            resizeMode="contain"
          />
          <Text style={styles.QuizResultScreenHeading}>{title}</Text>

          <View style={styles.QuizResultScreenScoreBox}>
            <Text style={styles.QuizResultScreenScoreValue}>{score}</Text>
            <Text style={styles.QuizResultScreenScoreLabel}>Correct</Text>
          </View>
        </View>
      </View>

      <View style={styles.QuizResultScreenFooter}>
        <Pressable
          style={styles.QuizResultScreenPrimaryButton}
          onPress={onPlayAgain}
        >
          <Text style={styles.QuizResultScreenPrimaryLabel}>Play Again</Text>
        </Pressable>
        <Pressable
          style={styles.QuizResultScreenSecondaryButton}
          onPress={onBackHome}
        >
          <Text style={styles.QuizResultScreenSecondaryLabel}>
            Back to Home
          </Text>
        </Pressable>
      </View>
    </FadeInScreen>
  );
}

const styles = StyleSheet.create({
  QuizResultScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },
  QuizResultScreenTopSpacer: {
    height: 52,
  },
  QuizResultScreenHeader: {
    paddingBottom: spacing.l,
    paddingHorizontal: spacing.l,
  },

  QuizResultScreenTitle: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.title,
    fontWeight: '500',
    lineHeight: 28.8,
  },
  QuizResultScreenDivider: {
    backgroundColor: colors.divider,
    height: 1,
    marginBottom: spacing.xxl,
    marginHorizontal: spacing.l,
  },
  QuizResultScreenCardMargin: {
    flex: 1,
    paddingHorizontal: spacing.l,
  },

  QuizResultScreenCard: {
    alignItems: 'center',
    backgroundColor: colors.articleCardBg,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    gap: spacing.l,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxl,
  },
  QuizResultScreenImage: {
    height: 260,
    width: 130,
  },

  QuizResultScreenHeading: {
    color: colors.heading,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.sectionHeading,
    fontWeight: '500',
    textAlign: 'center',
  },
  QuizResultScreenScoreBox: {
    alignItems: 'center',
    borderColor: colors.quizScoreBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    paddingVertical: spacing.m,
    width: '100%',
  },

  QuizResultScreenScoreValue: {
    color: colors.quizScoreText,
    fontFamily: fonts.sansRegular,
    fontSize: 22,
  },
  QuizResultScreenScoreLabel: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    marginTop: 4,
  },

  QuizResultScreenFooter: {
    gap: spacing.s,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.l,
    paddingTop: spacing.s,
  },
  QuizResultScreenPrimaryButton: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: radius.button,
    justifyContent: 'center',
    paddingVertical: spacing.l,
  },

  QuizResultScreenPrimaryLabel: {
    color: colors.accentText,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.buttonPrimary,
    fontWeight: '500',
  },
  QuizResultScreenSecondaryButton: {
    alignItems: 'center',
    borderColor: colors.cardBorder,
    borderRadius: radius.button,
    borderWidth: 1,
    justifyContent: 'center',
    paddingVertical: spacing.l,
  },

  QuizResultScreenSecondaryLabel: {
    color: colors.body,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.buttonPrimary,
    fontWeight: '500',
  },
});
