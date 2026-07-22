import React, { useRef } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { FadeInScreen } from '../components/FadeInScreen';
import { SwipeCard } from '../components/quiz/SwipeCard';

import type { SwipeCardHandle } from '../components/quiz/SwipeCard';
import { quizMascots } from '../data/assets';

import type { QuizQuestion } from '../data/quizQuestions';
import { colors, fonts, fontSize, spacing } from '../constants/theme';

type QuizActiveScreenProps = {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
};

export function QuizActiveScreen({
  question,
  onAnswer,
}: QuizActiveScreenProps) {
  const cardRef = useRef<SwipeCardHandle>(null);

  return (
    <FadeInScreen style={styles.QuizActiveScreenBase}>
      <View
        style={styles.QuizActiveScreenSplitBackground}
        pointerEvents="none"
      >
        <View style={styles.QuizActiveScreenSplitFalse} />
        <View style={styles.QuizActiveScreenSplitTrue} />
      </View>

      <View style={styles.QuizActiveScreenTopSpacer} />

      <View style={styles.QuizActiveScreenMascotWrap}>
        <Image
          source={quizMascots.active}
          style={styles.QuizActiveScreenMascot}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.QuizActiveScreenInstruction}>
        Swipe left if it is false,{'\n'}swipe right if it is true
      </Text>

      <View style={styles.QuizActiveScreenCardMargin}>
        <SwipeCard
          key={question.id}
          ref={cardRef}
          question={question}
          onAnswer={onAnswer}
        />
      </View>

      <View style={styles.QuizActiveScreenChoices}>
        <Pressable onPress={() => cardRef.current?.answer('false')}>
          <Text style={styles.QuizActiveScreenChoiceLabel}>False</Text>
        </Pressable>
        <Pressable onPress={() => cardRef.current?.answer('true')}>
          <Text style={styles.QuizActiveScreenChoiceLabel}>True</Text>
        </Pressable>
      </View>
    </FadeInScreen>
  );
}

const styles = StyleSheet.create({
  QuizActiveScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },

  QuizActiveScreenSplitBackground: {
    bottom: 0,
    flexDirection: 'row',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  QuizActiveScreenSplitFalse: {
    backgroundColor: colors.quizSplitFalse,
    flex: 1,
  },
  QuizActiveScreenSplitTrue: {
    backgroundColor: colors.quizSplitTrue,
    flex: 1,
  },
  QuizActiveScreenTopSpacer: {
    height: 52,
  },
  QuizActiveScreenMascotWrap: {
    alignItems: 'center',
    height: 220,
    justifyContent: 'center',
    marginTop: spacing.l,
  },

  QuizActiveScreenMascot: {
    height: '100%',
    width: 150,
  },

  QuizActiveScreenInstruction: {
    color: colors.heading,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.sectionHeading,
    fontWeight: '500',
    lineHeight: 26,
    marginTop: spacing.m,
    textAlign: 'center',
  },
  QuizActiveScreenCardMargin: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.l,
    paddingTop: spacing.l,
  },

  QuizActiveScreenChoices: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.xxl,
  },

  QuizActiveScreenChoiceLabel: {
    color: '#ffffff',
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.sectionHeading,
    fontWeight: '500',
  },
});
