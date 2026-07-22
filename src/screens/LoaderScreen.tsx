import React, { useEffect } from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet } from 'react-native';

import { FadeInScreen } from '../components/FadeInScreen';
import { loaderBackground } from '../data/assets';
import { colors, spacing } from '../constants/theme';

const LOADER_DURATION_MS = 3000;

type LoaderScreenProps = {
  onComplete: () => void;
};

export function LoaderScreen({ onComplete }: LoaderScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <FadeInScreen style={styles.LoaderScreenFadeWrap}>
      <ImageBackground
        source={loaderBackground}
        style={styles.LoaderScreenBackground}
        resizeMode="cover"
      >
        <ActivityIndicator
          size="large"
          color={colors.accent}
          style={styles.LoaderScreenSpinner}
        />
      </ImageBackground>
    </FadeInScreen>
  );
}

const styles = StyleSheet.create({
  LoaderScreenFadeWrap: {
    flex: 1,
  },
  LoaderScreenBackground: {
    flex: 1,
  },

  LoaderScreenSpinner: {
    bottom: spacing.xxxl * 2,
    position: 'absolute',
    alignSelf: 'center',
  },
});
