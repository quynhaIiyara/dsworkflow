import React, { forwardRef } from 'react';
import { Pressable, View, Text } from 'react-native';
import { styles, labelStyles } from './Avatar.styles';

export type AvatarProps = {
  initials: string;
  size?: number;
  onPress?: () => void;
  accessibilityLabel?: string;
};

export const Avatar = forwardRef<View, AvatarProps>(function Avatar(
  { initials, size = 46, onPress, accessibilityLabel },
  ref,
) {
  const dynamicCircle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };
  const dynamicText = { fontSize: Math.round(size * 0.34) };

  const label = (
    <Text style={[labelStyles.base, dynamicText]}>{initials}</Text>
  );

  if (onPress) {
    return (
      <Pressable
        ref={ref}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? initials}
        onPress={onPress}
        style={[styles.circle, dynamicCircle]}
      >
        {label}
      </Pressable>
    );
  }

  return (
    <View
      ref={ref}
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel ?? initials}
      style={[styles.circle, dynamicCircle]}
    >
      {label}
    </View>
  );
});

Avatar.displayName = 'Avatar';
