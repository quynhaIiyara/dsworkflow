import React, { forwardRef, useState, type ReactNode } from 'react';
import {
  TextInput,
  View,
  type NativeSyntheticEvent,
  type TextInputFocusEventData,
  type TextInputProps,
} from 'react-native';
import { colors } from '@rn-ds/tokens';
import { Text } from '../Text';
import { styles } from './Input.styles';

export type InputProps = Omit<TextInputProps, 'style' | 'placeholderTextColor'> & {
  /** Optional leading icon element. rn-ds ships no Icon component. */
  leadingIcon?: ReactNode;
  /** Optional trailing slot (used by e.g. SearchField for a clear button). */
  trailingSlot?: ReactNode;
  /**
   * Field-level error. Replaces `helperText` while set. Renders a red
   * border and a red helper line. Pass `errorIcon` to add the
   * `alert-triangle` slot per design.md.
   */
  error?: string;
  errorIcon?: ReactNode;
  /** Muted helper line under the field when not in an error state. */
  helperText?: string;
  disabled?: boolean;
};

export const Input = forwardRef<TextInput, InputProps>(function Input(
  {
    leadingIcon,
    trailingSlot,
    error,
    errorIcon,
    helperText,
    disabled = false,
    onFocus,
    onBlur,
    editable,
    ...rest
  },
  ref,
) {
  const [focused, setFocused] = useState(false);
  const isErrored = Boolean(error);
  const isEditable = editable ?? !disabled;

  return (
    <View>
      <View
        style={[
          styles.frame,
          focused && !isErrored && styles.focused,
          isErrored && styles.errored,
          disabled && styles.disabled,
        ]}
      >
        {leadingIcon ? <View>{leadingIcon}</View> : null}
        <TextInput
          ref={ref}
          editable={isEditable}
          placeholderTextColor={colors.inkPlaceholder}
          onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setFocused(false);
            onBlur?.(e);
          }}
          style={styles.input}
          {...rest}
        />
        {trailingSlot ? <View>{trailingSlot}</View> : null}
      </View>
      {isErrored ? (
        <View style={styles.helper}>
          {errorIcon ? <View>{errorIcon}</View> : null}
          <Text role="caption" color="redText">
            {error}
          </Text>
        </View>
      ) : helperText ? (
        <View style={styles.helper}>
          <Text role="caption" color="inkMuted">
            {helperText}
          </Text>
        </View>
      ) : null}
    </View>
  );
});

Input.displayName = 'Input';
