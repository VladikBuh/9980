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

import type { Animal, AnimalQuizOptionId } from '../data/animals';
import { colors, fonts, fontSize, radius, spacing } from '../constants/theme';

type AnimalDetailScreenProps = {
  animal: Animal;
  onBack: () => void;
};

export function AnimalDetailScreen({
  animal,
  onBack,
}: AnimalDetailScreenProps) {
  const [selectedOptionId, setSelectedOptionId] =
    useState<AnimalQuizOptionId | null>(null);

  const getStatus = (
    optionId: AnimalQuizOptionId,
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
    <FadeInScreen style={styles.AnimalDetailScreenFadeWrap}>
      <ScrollView
        style={styles.AnimalDetailScreenBase}
        contentContainerStyle={styles.AnimalDetailScreenContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.AnimalDetailScreenTopSpacer} />

        <Pressable
          style={styles.AnimalDetailScreenBack}
          onPress={onBack}
          hitSlop={8}
        >
          <Image
            source={icons.backChevron}
            style={styles.AnimalDetailScreenBackIcon}
          />
          <Text style={styles.AnimalDetailScreenBackLabel}>Back</Text>
        </Pressable>

        <View style={styles.AnimalDetailScreenHeroMargin}>
          <View style={styles.AnimalDetailScreenHero}>
            <Image
              source={animal.image}
              style={styles.AnimalDetailScreenHeroImage}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.AnimalDetailScreenBody}>
          <Text style={styles.AnimalDetailScreenTitle}>{animal.title}</Text>
          {animal.paragraphs.map((paragraph, index) => (
            <Text key={index} style={styles.AnimalDetailScreenParagraph}>
              {paragraph}
            </Text>
          ))}
        </View>

        <View style={styles.AnimalDetailScreenDivider} />

        <View style={styles.AnimalDetailScreenQuiz}>
          <View style={styles.AnimalDetailScreenQuizHeading}>
            <View style={styles.AnimalDetailScreenQuizAccentBar} />
            <Text style={styles.AnimalDetailScreenQuizTitle}>
              Knowledge Check
            </Text>
          </View>

          <Text style={styles.AnimalDetailScreenQuizQuestion}>
            {animal.quiz.question}
          </Text>

          {animal.quiz.options.map(option => (
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
  AnimalDetailScreenFadeWrap: {
    flex: 1,
  },

  AnimalDetailScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },
  AnimalDetailScreenContent: {
    paddingBottom: spacing.xl,
  },
  AnimalDetailScreenTopSpacer: {
    height: 52,
  },

  AnimalDetailScreenBack: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    paddingBottom: spacing.m,
    paddingHorizontal: spacing.m,
  },
  AnimalDetailScreenBackIcon: {
    height: 22,
    width: 22,
  },
  AnimalDetailScreenBackLabel: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.body,
    fontWeight: '500',
  },
  AnimalDetailScreenHeroMargin: {
    paddingHorizontal: spacing.l,
  },

  AnimalDetailScreenHero: {
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    height: 220,
    overflow: 'hidden',
  },

  AnimalDetailScreenHeroImage: {
    height: '100%',
    width: '100%',
  },
  AnimalDetailScreenBody: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.xl,
  },

  AnimalDetailScreenTitle: {
    color: colors.heading,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.title,
    fontWeight: '500',
    lineHeight: 31.2,
  },
  AnimalDetailScreenParagraph: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.small,
    lineHeight: 23.8,
    marginTop: spacing.l,
  },
  AnimalDetailScreenDivider: {
    backgroundColor: colors.divider,
    height: 1,
    marginHorizontal: spacing.l,
    marginTop: spacing.xl,
  },
  AnimalDetailScreenQuiz: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.xl,
  },

  AnimalDetailScreenQuizHeading: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.s,
  },

  AnimalDetailScreenQuizAccentBar: {
    backgroundColor: colors.accent,
    borderRadius: 2,
    height: 20,
    width: 4,
  },
  AnimalDetailScreenQuizTitle: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.sectionHeading,
    fontWeight: '500',
  },

  AnimalDetailScreenQuizQuestion: {
    color: colors.heading,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    lineHeight: 22.5,
    marginTop: spacing.l,
  },
});
