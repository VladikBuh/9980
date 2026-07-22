import React, { useEffect, useRef } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

const FADE_IN_DURATION_MS = 400;

type FadeInScreenProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function FadeInScreen({ children, style }: FadeInScreenProps) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: FADE_IN_DURATION_MS,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return <Animated.View style={[style, { opacity }]}>{children}</Animated.View>;
}
