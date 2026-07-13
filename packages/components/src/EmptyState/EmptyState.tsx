import React, { forwardRef, type ReactNode } from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { Text } from '../Text';
import { styles } from './EmptyState.styles';

export type EmptyStateAction = {
  label: string;
  onPress: () => void;
};

export type EmptyStateProps = {
  /**
   * Illustration slot. Consumer supplies the ruled asset (illustrations live
   * in the downstream FieldForce app repo). When omitted, renders the dashed
   * placeholder block from `design.md`.
   */
  illustration?: ReactNode;
  title: string;
  description?: string;
  /** Optional single action per the pairing rule ("illustration, title, line, one action"). */
  action?: EmptyStateAction;
  accessibilityLabel?: string;
};

export const EmptyState = forwardRef<View, EmptyStateProps>(function EmptyState(
  { illustration, title, description, action, accessibilityLabel },
  ref,
) {
  return (
    <View
      ref={ref}
      accessibilityLabel={accessibilityLabel ?? title}
      style={styles.container}
    >
      {illustration ? (
        illustration
      ) : (
        <View accessibilityElementsHidden style={styles.placeholder} />
      )}
      <View style={styles.copy}>
        <Text role="title" color="ink" style={{ textAlign: 'center' }}>
          {title}
        </Text>
        {description ? (
          <Text role="body" color="inkMuted" style={{ textAlign: 'center' }}>
            {description}
          </Text>
        ) : null}
      </View>
      {action ? <Button label={action.label} onPress={action.onPress} /> : null}
    </View>
  );
});

EmptyState.displayName = 'EmptyState';
