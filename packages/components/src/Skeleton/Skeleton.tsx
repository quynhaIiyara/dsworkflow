import React, { forwardRef, useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  View,
  type DimensionValue,
  type ViewStyle,
} from 'react-native';
import { styles } from './Skeleton.styles';

export type SkeletonProps = {
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  /** Disable the pulse animation (e.g. for reduced-motion contexts). */
  animate?: boolean;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export const Skeleton = forwardRef<View, SkeletonProps>(function Skeleton(
  {
    width = '100%',
    height = 12,
    borderRadius,
    animate = true,
    style,
    accessibilityLabel = 'Loading',
  },
  ref,
) {
  const pulse = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    if (!animate) {
      pulse.setValue(0.6);
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0.6,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [animate, pulse]);

  const shell: ViewStyle = {
    width,
    height,
    borderRadius,
  };

  return (
    <Animated.View
      ref={ref}
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      style={[styles.base, shell, { opacity: pulse }, style]}
    />
  );
});

Skeleton.displayName = 'Skeleton';

/** A convenience row of three stacked skeleton lines. */
export const SkeletonText = forwardRef<View, { lines?: number; lastLineWidth?: DimensionValue }>(
  function SkeletonText({ lines = 3, lastLineWidth = '60%' }, ref) {
    return (
      <View ref={ref} style={{ gap: 8 }}>
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton
            key={i}
            height={12}
            width={i === lines - 1 ? lastLineWidth : '100%'}
          />
        ))}
      </View>
    );
  },
);
SkeletonText.displayName = 'SkeletonText';
