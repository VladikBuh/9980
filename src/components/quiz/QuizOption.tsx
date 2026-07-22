import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {colors, fonts, fontSize, radius} from '../../constants/theme';
import type {QuizOption as QuizOptionData} from '../../data/articles';

export type QuizOptionStatus = 'neutral' | 'correct' | 'incorrect';

type QuizOptionProps = {
  option: QuizOptionData;
  status: QuizOptionStatus;
  disabled: boolean;
  onPress: () => void;
};

const STYLES_BY_STATUS = {
  neutral: {
    container: {
      backgroundColor: colors.quizNeutralBg,
      borderColor: colors.quizNeutralBorder,
    },
    badgeBorderColor: colors.quizNeutralBorder,
    badgeBackgroundColor: 'transparent',
    badgeTextColor: colors.quizNeutralBadgeText,
    textColor: colors.body,
  },
  correct: {
    container: {
      backgroundColor: colors.quizCorrectBg,
      borderColor: colors.quizCorrectBorder,
    },
    badgeBorderColor: 'transparent',
    badgeBackgroundColor: 'rgba(255,255,255,0.25)',
    badgeTextColor: colors.quizCorrectText,
    textColor: colors.quizCorrectText,
  },
  incorrect: {
    container: {
      backgroundColor: colors.quizIncorrectBg,
      borderColor: colors.quizIncorrectBorder,
    },
    badgeBorderColor: 'transparent',
    badgeBackgroundColor: 'rgba(255,255,255,0.25)',
    badgeTextColor: colors.quizIncorrectText,
    textColor: colors.quizIncorrectText,
  },
} as const;

export function QuizOption({option, status, disabled, onPress}: QuizOptionProps) {
  const statusStyles = STYLES_BY_STATUS[status];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.QuizOptionBase, statusStyles.container]}>
      <View
        style={[
          styles.QuizOptionBadge,
          {
            borderColor: statusStyles.badgeBorderColor,
            backgroundColor: statusStyles.badgeBackgroundColor,
          },
        ]}>
        <Text style={[styles.QuizOptionBadgeText, {color: statusStyles.badgeTextColor}]}>
          {option.id}
        </Text>
      </View>
      <Text style={[styles.QuizOptionText, {color: statusStyles.textColor}]}>
        {option.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  QuizOptionBase: {
    alignItems: 'center',
    borderRadius: radius.card,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    marginTop: 10,
    paddingHorizontal: 17,
    paddingVertical: 15,
    width: '100%',
  },
  QuizOptionBadge: {
    alignItems: 'center',
    borderRadius: 13,
    borderWidth: 1,
    height: 26,
    justifyContent: 'center',
    width: 26,
  },
  QuizOptionBadgeText: {
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
  QuizOptionText: {
    flex: 1,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.small,
    lineHeight: 19.6,
  },
});
