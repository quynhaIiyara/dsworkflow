import { StyleSheet, type TextStyle } from 'react-native';
import { colors, typography } from '@rn-ds/tokens';
import type { TextRole } from './Text';

// design.md defaults (see the "Composition" section: type carries the
// hierarchy — big and bold for what matters, quiet and muted for the rest).
export const defaultColorForRole: Record<TextRole, keyof typeof colors> = {
  headline: 'ink',
  title: 'ink',
  cardTitle: 'ink',
  section: 'ink',
  subtitle: 'ink',
  cta: 'ink',
  body: 'inkBody',
  tab: 'inkBody',
  dense: 'inkBody',
  label: 'inkMuted',
  caption: 'inkMuted',
  eyebrow: 'inkMuted',
};

const entries = Object.entries(typography.role) as Array<[TextRole, TextStyle]>;

// Materialise one static StyleSheet per role so RN reuses the numeric handle.
export const roleStyles = StyleSheet.create(
  Object.fromEntries(entries.map(([role, style]) => [role, style])) as Record<
    TextRole,
    TextStyle
  >,
);
