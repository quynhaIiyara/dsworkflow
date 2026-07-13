import React, { forwardRef } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { Button } from '../Button';
import { Text } from '../Text';
import { styles } from './Dialog.styles';

export type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  /** Primary action label. Rendered in the green primary or danger variant. */
  confirmLabel: string;
  onConfirm: () => void;
  /** Secondary action label. Defaults to "Cancel" — pass `null` to render a single-button dialog. */
  cancelLabel?: string | null;
  /** When true, the primary button uses the danger variant (log out, reject, cancel booking). */
  destructive?: boolean;
  accessibilityLabel?: string;
};

export const Dialog = forwardRef<View, DialogProps>(function Dialog(
  {
    open,
    onClose,
    title,
    description,
    confirmLabel,
    onConfirm,
    cancelLabel = 'Cancel',
    destructive = false,
    accessibilityLabel,
  },
  ref,
) {
  return (
    <Modal visible={open} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Close dialog"
        onPress={onClose}
        style={styles.scrim}
      >
        <Pressable onPress={() => {}} style={styles.dialog}>
          <View
            ref={ref}
            accessibilityRole="alert"
            accessibilityLabel={accessibilityLabel ?? title}
          >
            <Text role="title" color="ink">
              {title}
            </Text>
            {description ? (
              <View style={{ marginTop: 8 }}>
                <Text role="body" color="inkBody">
                  {description}
                </Text>
              </View>
            ) : null}
          </View>
          <View style={styles.actions}>
            {cancelLabel ? (
              <Button label={cancelLabel} variant="ghost" onPress={onClose} />
            ) : null}
            <Button
              label={confirmLabel}
              variant={destructive ? 'danger' : 'primary'}
              onPress={onConfirm}
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
});

Dialog.displayName = 'Dialog';
