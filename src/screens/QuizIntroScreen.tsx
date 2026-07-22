import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { FadeInScreen } from '../components/FadeInScreen';
import { quizMascots } from '../data/assets';

import { colors, fonts, fontSize, radius, spacing } from '../constants/theme';

type QuizIntroScreenProps = {
  onStart: () => void;
};

export function QuizIntroScreen({ onStart }: QuizIntroScreenProps) {
  return (
    <FadeInScreen style={styles.QuizIntroScreenBase}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.QuizIntroScreenTopSpacer} />

        <View style={styles.QuizIntroScreenHeader}>
          <Text style={styles.QuizIntroScreenTitle}>Quiz</Text>
          <Text style={styles.QuizIntroScreenSubtitle}>
            Test what you've learned
          </Text>
        </View>

        <View style={styles.QuizIntroScreenDivider} />

        <View style={styles.QuizIntroScreenImageMargin}>
          <View style={styles.QuizIntroScreenImageFrame}>
            <Image
              source={quizMascots.intro}
              style={styles.QuizIntroScreenImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.QuizIntroScreenBody}>
          <Text style={styles.QuizIntroScreenHeading}>
            True or False Challenge
          </Text>
          <Text style={styles.QuizIntroScreenDescription}>
            Read each statement carefully and decide whether it is true or
            false. There are 20 statements in total — how many can you get
            right?
          </Text>
        </View>

        <View style={styles.QuizIntroScreenFooter}>
          <Pressable style={styles.QuizIntroScreenButton} onPress={onStart}>
            <Text style={styles.QuizIntroScreenButtonLabel}>Start Quiz</Text>
          </Pressable>
        </View>
      </ScrollView>
    </FadeInScreen>
  );
}

const styles = StyleSheet.create({
  QuizIntroScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },
  QuizIntroScreenTopSpacer: {
    height: 52,
  },

  QuizIntroScreenHeader: {
    paddingBottom: spacing.l,
    paddingHorizontal: spacing.l,
  },

  QuizIntroScreenTitle: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.title,
    fontWeight: '500',
    lineHeight: 28.8,
  },
  QuizIntroScreenSubtitle: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    marginTop: 4,
  },

  QuizIntroScreenDivider: {
    backgroundColor: colors.divider,
    height: 1,
    marginBottom: spacing.xl,
    marginHorizontal: spacing.l,
  },

  QuizIntroScreenImageMargin: {
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.l,
  },
  QuizIntroScreenImageFrame: {
    alignItems: 'center',
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    height: 380,
    justifyContent: 'center',
  },
  QuizIntroScreenImage: {
    height: '100%',
    width: '100%',
  },
  QuizIntroScreenBody: {
    flex: 1,
    paddingHorizontal: spacing.l,
  },

  QuizIntroScreenHeading: {
    color: colors.heading,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.sectionHeading,
    fontWeight: '500',
    lineHeight: 26,
  },

  QuizIntroScreenDescription: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.small,
    lineHeight: 23.8,
    marginTop: spacing.m,
  },
  QuizIntroScreenFooter: {
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.l,
    paddingTop: spacing.s,
  },

  QuizIntroScreenButton: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: radius.button,
    justifyContent: 'center',
    paddingVertical: spacing.l,
  },

  QuizIntroScreenButtonLabel: {
    color: colors.accentText,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.buttonPrimary,
    fontWeight: '500',
  },
});
