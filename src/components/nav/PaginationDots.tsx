import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '../../constants/theme';

type PaginationDotsProps = {
  total: number;
  activeIndex: number;
};

export function PaginationDots({ total, activeIndex }: PaginationDotsProps) {
  return (
    <View style={styles.PaginationDotsRow}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={
            index === activeIndex
              ? styles.PaginationDotsDotActive
              : styles.PaginationDotsDot
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  PaginationDotsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  PaginationDotsDot: {
    backgroundColor: colors.dotInactive,
    borderColor: colors.dotInactiveBorder,
    borderRadius: 4,
    borderWidth: 1,
    height: 8,
    width: 8,
  },

  PaginationDotsDotActive: {
    backgroundColor: colors.accent,
    borderRadius: 4,
    height: 8,
    width: 28,
  },
});
