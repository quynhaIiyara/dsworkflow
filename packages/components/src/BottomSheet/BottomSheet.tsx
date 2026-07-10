import React, { forwardRef } from 'react';
import { Modal, Pressable, View, Text, type ViewProps } from 'react-native';
import { styles, headingStyles } from './BottomSheet.styles';

export type BottomSheetProps = ViewProps & {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  accessibilityLabel?: string;
};

export const BottomSheet = forwardRef<View, BottomSheetProps>(function BottomSheet(
  { open, onClose, title, children, accessibilityLabel, style, ...rest },
  ref,
) {
  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable
        onPress={onClose}
        accessibilityRole="button"
        accessibilityLabel="Close bottom sheet"
        style={styles.scrim}
      />
      <View
        ref={ref}
        accessibilityRole="none"
        accessibilityLabel={accessibilityLabel ?? title}
        style={[styles.sheet, style]}
        {...rest}
      >
        <View style={styles.body}>
          <View style={styles.grip} />
          {title ? (
            <View style={styles.header}>
              <Text style={headingStyles.title}>{title}</Text>
            </View>
          ) : null}
          {children}
        </View>
      </View>
    </Modal>
  );
});

BottomSheet.displayName = 'BottomSheet';
