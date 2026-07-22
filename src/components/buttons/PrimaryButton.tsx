import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

import { colors, fonts, fontSize, radius } from '../../constants/theme';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export function PrimaryButton({ label, onPress, style }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.PrimaryButtonBase, style]}
      hitSlop={8}
    >
      <Text style={styles.PrimaryButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  PrimaryButtonBase: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: radius.button,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 14,
  },

  PrimaryButtonLabel: {
    color: colors.accentText,
    fontFamily: fonts.sansMedium,
    fontSize: fontSize.buttonPrimary,
    fontWeight: '500',
  },
});
