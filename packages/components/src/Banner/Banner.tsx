import React, { forwardRef } from 'react';
import { Pressable, View, Text, type ViewProps } from 'react-native';
import { styles, labelStyles, dismissStyles } from './Banner.styles';

export type BannerTone = 'ok' | 'no' | 'warn' | 'info' | 'offline';

export type BannerProps = ViewProps & {
  tone: BannerTone;
  message: string;
  /**
   * Optional leading icon slot. rn-ds ships no Icon component; consumers pass
   * their own element (any icon library) or omit for a text-only banner.
   */
  icon?: React.ReactNode;
  onDismiss?: () => void;
  dismissible?: boolean;
  accessibilityLabel?: string;
};

const defaultDismissible: Record<BannerTone, boolean> = {
  ok: false,
  no: false,
  warn: false,
  info: false,
  offline: true,
};

export const Banner = forwardRef<View, BannerProps>(function Banner(
  { tone, message, icon, onDismiss, dismissible, accessibilityLabel, style, ...rest },
  ref,
) {
  const showDismiss = dismissible ?? defaultDismissible[tone];
  return (
    <View
      ref={ref}
      accessibilityRole="alert"
      accessibilityLabel={accessibilityLabel ?? message}
      style={[styles.base, styles[`tone_${tone}`], style]}
      {...rest}
    >
      {icon ? <View style={styles.icon}>{icon}</View> : null}
      <Text
        style={[labelStyles.base, labelStyles.message, labelStyles[`tone_${tone}`]]}
      >
        {message}
      </Text>
      {showDismiss ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Dismiss"
          onPress={onDismiss}
          hitSlop={8}
          style={dismissStyles.button}
        >
          <Text style={[labelStyles.base, labelStyles[`tone_${tone}`], dismissStyles.x]}>
            ×
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
});

Banner.displayName = 'Banner';
