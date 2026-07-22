import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {colors, fonts, fontSize} from '../../constants/theme';

type SkipButtonProps = {
  onPress: () => void;
};

export function SkipButton({onPress}: SkipButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.SkipButtonBase}
      hitSlop={8}>
      <Text style={styles.SkipButtonLabel}>Skip</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  SkipButtonBase: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  SkipButtonLabel: {
    color: colors.skip,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.button,
    fontWeight: '500',
  },
});
