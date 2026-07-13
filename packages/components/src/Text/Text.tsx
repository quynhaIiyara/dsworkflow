import React, { forwardRef } from 'react';
import {
  Text as RNText,
  type TextProps as RNTextProps,
  type TextStyle,
} from 'react-native';
import { colors, typography } from '@rn-ds/tokens';
import { defaultColorForRole, roleStyles } from './Text.styles';

export type TextRole = keyof typeof typography.role;
type ColorToken = keyof typeof colors;

// `role` is deliberately Omit'd from RNTextProps — RN 0.71+ ships a native
// `role` accessibility prop whose union overlaps ours ('tab' is in both),
// which would narrow TextProps['role'] to the intersection. Callers who want
// the accessibility role should use `accessibilityRole`.
export type TextProps = Omit<RNTextProps, 'children' | 'role'> & {
  /** Named type role from `design.md` (drives fontSize / lineHeight / weight / tracking). */
  role?: TextRole;
  /** Colour token override. Defaults per role (headline/title/section/subtitle/cta → ink, body/tab → inkBody, label/caption/eyebrow → inkMuted). */
  color?: ColorToken;
  children: React.ReactNode;
};

export const Text = forwardRef<RNText, TextProps>(function Text(
  { role, color, children, style, ...rest },
  ref,
) {
  const resolvedRole: TextRole = role ?? 'body';
  const resolvedColor: ColorToken = color ?? defaultColorForRole[resolvedRole];
  const merged: TextStyle = { color: colors[resolvedColor] };

  return (
    <RNText ref={ref} style={[roleStyles[resolvedRole], merged, style]} {...rest}>
      {children}
    </RNText>
  );
});

Text.displayName = 'Text';
