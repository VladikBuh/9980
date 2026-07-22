import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FadeInScreen } from '../components/FadeInScreen';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { SkipButton } from '../components/buttons/SkipButton';

import { PaginationDots } from '../components/nav/PaginationDots';
import { ONBOARDING_STEPS } from '../data/onboarding';

import { colors, fonts, fontSize, radius, spacing } from '../constants/theme';

type OnboardingScreenProps = {
  onComplete: () => void;
};

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [stepIndex, setStepIndex] = useState(0);

  const step = ONBOARDING_STEPS[stepIndex];
  const isLastStep = stepIndex === ONBOARDING_STEPS.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
      return;
    }
    setStepIndex(prev => prev + 1);
  };

  return (
    <FadeInScreen style={styles.OnboardingScreenBase}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.OnboardingScreenTopSpacer} />

        <View style={styles.OnboardingScreenCardMargin}>
          <View style={styles.OnboardingScreenCard}>
            <Image
              source={step.image}
              style={styles.OnboardingScreenCardImage}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.OnboardingScreenContent}>
          <Text style={styles.OnboardingScreenTitle}>{step.title}</Text>
          <Text style={styles.OnboardingScreenDescription}>
            {step.description}
          </Text>
        </View>

        <View style={styles.OnboardingScreenFooter}>
          <PaginationDots
            total={ONBOARDING_STEPS.length}
            activeIndex={stepIndex}
          />

          <View style={styles.OnboardingScreenActions}>
            <SkipButton onPress={onComplete} />
            <PrimaryButton label={step.buttonLabel} onPress={handleNext} />
          </View>
        </View>
      </ScrollView>
    </FadeInScreen>
  );
}

const styles = StyleSheet.create({
  OnboardingScreenBase: {
    backgroundColor: colors.background,
    flex: 1,
  },
  OnboardingScreenTopSpacer: {
    height: 52,
  },

  OnboardingScreenCardMargin: {
    paddingHorizontal: spacing.l,
  },
  OnboardingScreenCard: {
    borderColor: colors.cardBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    height: 523,
    overflow: 'hidden',
  },

  OnboardingScreenCardImage: {
    height: '100%',
    width: '100%',
  },
  OnboardingScreenContent: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
  },
  OnboardingScreenTitle: {
    color: colors.heading,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.title,
    fontWeight: '500',
    lineHeight: 31.2,
    marginBottom: spacing.s,
  },

  OnboardingScreenDescription: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    lineHeight: 24,
  },

  OnboardingScreenFooter: {
    paddingBottom: spacing.xxxl,
    paddingHorizontal: spacing.xl,
  },

  OnboardingScreenActions: {
    flexDirection: 'row',
    gap: spacing.m,
    marginTop: spacing.xxl,
  },
});
