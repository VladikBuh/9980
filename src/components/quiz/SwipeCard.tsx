import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';

import type {QuizQuestion} from '../../data/quizQuestions';
import {colors, fonts, radius, spacing} from '../../constants/theme';

const SWIPE_THRESHOLD = 120;
const SWIPE_OUT_DISTANCE = 500;

export type SwipeCardHandle = {
  answer: (direction: 'true' | 'false') => void;
};

type SwipeCardProps = {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
};

export const SwipeCard = forwardRef<SwipeCardHandle, SwipeCardProps>(
  function SwipeCardImpl({question, onAnswer}, ref) {
    const pan = useRef(new Animated.ValueXY()).current;

    const flingOut = (direction: 'true' | 'false') => {
      const toX =
        direction === 'true' ? SWIPE_OUT_DISTANCE : -SWIPE_OUT_DISTANCE;
      const isCorrect = (direction === 'true') === question.answer;

      Animated.timing(pan, {
        toValue: {x: toX, y: 0},
        duration: 220,
        useNativeDriver: false,
      }).start(() => onAnswer(isCorrect));
    };

    useImperativeHandle(ref, () => ({
      answer: flingOut,
    }));

    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: (_evt, gesture) =>
          Math.abs(gesture.dx) > 6,
        onPanResponderMove: Animated.event([null, {dx: pan.x}], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (_evt, gesture) => {
          if (gesture.dx > SWIPE_THRESHOLD) {
            flingOut('true');
          } else if (gesture.dx < -SWIPE_THRESHOLD) {
            flingOut('false');
          } else {
            Animated.spring(pan, {
              toValue: {x: 0, y: 0},
              useNativeDriver: false,
            }).start();
          }
        },
      }),
    ).current;

    const rotate = pan.x.interpolate({
      inputRange: [-SWIPE_OUT_DISTANCE, 0, SWIPE_OUT_DISTANCE],
      outputRange: ['-18deg', '0deg', '18deg'],
    });

    const backgroundColor = pan.x.interpolate({
      inputRange: [-150, 0, 150],
      outputRange: [
        colors.quizAnswerFalseBg,
        colors.quizNeutralBg,
        colors.quizAnswerTrueBg,
      ],
    });

    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.SwipeCardBase,
          {
            backgroundColor,
            transform: [{translateX: pan.x}, {rotate}],
          },
        ]}>
        <View style={styles.SwipeCardBadge}>
          <Text style={styles.SwipeCardBadgeLabel}>TRUE OR FALSE?</Text>
        </View>
        <Text style={styles.SwipeCardStatement}>{question.statement}</Text>
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  SwipeCardBase: {
    borderColor: colors.quizNeutralBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 160,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxl,
    width: '100%',
  },
  SwipeCardBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.quizBadgeBg,
    borderColor: colors.quizNeutralBorder,
    borderRadius: radius.card,
    borderWidth: 1,
    marginBottom: spacing.m,
    paddingHorizontal: 11,
    paddingVertical: 5,
  },
  SwipeCardBadgeLabel: {
    color: colors.quizBadgeText,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
  },
  SwipeCardStatement: {
    color: colors.heading,
    fontFamily: fonts.sansRegular,
    fontSize: 17,
    lineHeight: 27.2,
  },
});
