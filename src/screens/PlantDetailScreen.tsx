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

import type { Plant, PlantQuizOptionId } from '../data/plants';
import { colors, fonts, fontSize, radius, spacing } from '../constants/theme';

type PlantDetailScreenProps = {
  plant: Plant;
  onBack: () => void;
};

export function PlantDetailScreen({ plant, onBack }: PlantDetailScreenProps) {
  const [selectedOptionId, setSelectedOptionId] =
    useState<PlantQuizOptionId | null>(null);

  const getStatus = (
    optionId: PlantQuizOptionId,
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
    <FadeInScreen style={styles.PlantDetailScreenFadeWrap}>
      <ScrollView
        style={styles.PlantDetailScreenBase}
        contentContainerStyle={styles.PlantDetailScreenContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.PlantDetailScreenTopSpacer} />

        <Pressable
          style={styles.PlantDetailScreenBack}
          onPress={onBack}
          hitSlop={8}
        >
          <Image
            source={icons.backChevron}
            style={styles.PlantDetailScreenBackIcon}
          />
          <Text style={styles.PlantDetailScreenBackLabel}>Back</Text>
        </Pressable>

        <View style={styles.PlantDetailScreenHeroMargin}>
          <View style={styles.PlantDetailScreenHero}>
            <Image
              source={plant.image}
              style={styles.PlantDetailScreenHeroImage}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.PlantDetailScreenBody}>
          <Text style={styles.PlantDetailScreenTitle}>{plant.title}</Text>
          {plant.paragraphs.map((paragraph, index) => (
            <Text key={index} style={styles.PlantDetailScreenParagraph}>
              {paragraph}
            </Text>
          ))}
        </View>

        <View style={styles.PlantDetailScreenDivider} />

        <View style={styles.PlantDetailScreenQuiz}>
          <View style={styles.PlantDetailScreenQuizHeading}>
            <View style={styles.PlantDetailScreenQuizAccentBar} />
            <Text style={styles.PlantDetailScreenQuizTitle}>
              Knowledge Check
            </Text>
          </View>

          <Text style={styles.PlantDetailScreenQuizQuestion}>
            {plant.quiz.question}
          </Text>

          {plant.quiz.options.map(option => (
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
  PlantDetailScreenFadeWrap: {
    flex: 1,
  },
  PlantDetailScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },

  PlantDetailScreenContent: {
    paddingBottom: spacing.xl,
  },
  PlantDetailScreenTopSpacer: {
    height: 52,
  },

  PlantDetailScreenBack: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    paddingBottom: spacing.m,
    paddingHorizontal: spacing.m,
  },
  PlantDetailScreenBackIcon: {
    height: 22,
    width: 22,
  },
  PlantDetailScreenBackLabel: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.body,
    fontWeight: '500',
  },

  PlantDetailScreenHeroMargin: {
    paddingHorizontal: spacing.l,
  },
  PlantDetailScreenHero: {
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    height: 220,
    overflow: 'hidden',
  },
  PlantDetailScreenHeroImage: {
    height: '100%',
    width: '100%',
  },

  PlantDetailScreenBody: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.xl,
  },
  PlantDetailScreenTitle: {
    color: colors.heading,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.title,
    fontWeight: '500',
    lineHeight: 31.2,
  },

  PlantDetailScreenParagraph: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.small,
    lineHeight: 23.8,
    marginTop: spacing.l,
  },
  PlantDetailScreenDivider: {
    backgroundColor: colors.divider,
    height: 1,
    marginHorizontal: spacing.l,
    marginTop: spacing.xl,
  },
  PlantDetailScreenQuiz: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.xl,
  },
  PlantDetailScreenQuizHeading: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.s,
  },

  PlantDetailScreenQuizAccentBar: {
    backgroundColor: colors.accent,
    borderRadius: 2,
    height: 20,
    width: 4,
  },

  PlantDetailScreenQuizTitle: {
    color: colors.accent,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.sectionHeading,
    fontWeight: '500',
  },

  PlantDetailScreenQuizQuestion: {
    color: colors.heading,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    lineHeight: 22.5,
    marginTop: spacing.l,
  },
});
