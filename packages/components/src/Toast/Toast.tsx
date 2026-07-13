import React, { forwardRef, useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../Text';
import { styles } from './Toast.styles';

export type ToastAction = {
  label: string;
  onPress: () => void;
};

export type ToastProps = {
  open: boolean;
  onClose: () => void;
  message: string;
  /** At most one text action per design.md. */
  action?: ToastAction;
  /**
   * Auto-dismiss delay in ms. Defaults to 4000 (transient copy). Pass a
   * larger number (~6000) for blocking errors, or `null` to disable
   * auto-dismiss and rely on tap-to-close.
   */
  autoHideMs?: number | null;
  accessibilityLabel?: string;
};

export const Toast = forwardRef<View, ToastProps>(function Toast(
  { open, onClose, message, action, autoHideMs = 4000, accessibilityLabel },
  ref,
) {
  useEffect(() => {
    if (!open || autoHideMs === null || autoHideMs === undefined) return;
    const t = setTimeout(onClose, autoHideMs);
    return () => clearTimeout(t);
  }, [open, autoHideMs, onClose]);

  if (!open) return null;

  return (
    <View
      ref={ref}
      accessibilityRole="alert"
      accessibilityLabel={accessibilityLabel ?? message}
      style={styles.positioner}
      pointerEvents="box-none"
    >
      <Pressable onPress={onClose} style={styles.pill}>
        <View style={styles.messageWrap}>
          <Text role="body" color="white">
            {message}
          </Text>
        </View>
        {action ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={action.label}
            onPress={action.onPress}
            style={styles.actionHit}
            hitSlop={8}
          >
            <Text role="cta" color="green">
              {action.label}
            </Text>
          </Pressable>
        ) : null}
      </Pressable>
    </View>
  );
});

Toast.displayName = 'Toast';
