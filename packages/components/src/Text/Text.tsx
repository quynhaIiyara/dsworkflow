import React, { forwardRef } from 'react';
import {
  Text as RNText,
  type TextProps as RNTextProps,
  type TextStyle,
} from 'react-native';
import { colors, typography } from '@rn-ds/tokens';
import { defaultColorForRole, roleStyles } from './Text.styles';

export type TextRole = keyof typeof typography.role;
export type TextSizeToken = keyof typeof typography.size;
export type TextWeightToken = keyof typeof typography.weight;
type ColorToken = keyof typeof colors;

// `role` is deliberately Omit'd from RNTextProps — RN 0.71+ ships a native
// `role` accessibility prop whose union overlaps ours ('tab' is in both),
// which would narrow TextProps['role'] to the intersection. Callers who want
// the accessibility role should use `accessibilityRole`.
export type TextProps = Omit<RNTextProps, 'children' | 'role'> & {
  /** Named type role from `design.md` (drives fontSize / lineHeight / weight / tracking). */
  role?: TextRole;
  /** Colour token override. Defaults per role (headline/title/section/subtitle/cta/cardTitle → ink, body/tab/dense → inkBody, label/caption/eyebrow → inkMuted). */
  color?: ColorToken;
  /** Font-size token override — replaces the role's fontSize with `typography.size[size]`. */
  size?: TextSizeToken;
  /** Font-weight token override — replaces the role's fontWeight with `typography.weight[weight]`. */
  weight?: TextWeightToken;
  children: React.ReactNode;
};

export const Text = forwardRef<RNText, TextProps>(function Text(
  { role, color, size, weight, children, style, ...rest },
  ref,
) {
  const resolvedRole: TextRole = role ?? 'body';
  const resolvedColor: ColorToken = color ?? defaultColorForRole[resolvedRole];

  // Overrides layer: only include keys the caller actually passed so role
  // defaults for the others still win. `style` (from RN props) runs last —
  // it's the escape hatch for values that aren't in the token scale (e.g.
  // 12.5 in `.rqc-slot`).
  const overrides: TextStyle = { color: colors[resolvedColor] };
  if (size !== undefined) overrides.fontSize = typography.size[size];
  if (weight !== undefined) overrides.fontWeight = typography.weight[weight];

  return (
    <RNText ref={ref} style={[roleStyles[resolvedRole], overrides, style]} {...rest}>
      {children}
    </RNText>
  );
});

Text.displayName = 'Text';
