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
import { styles } from './Textarea.styles';

export type TextareaProps = Omit<
  TextInputProps,
  'style' | 'placeholderTextColor' | 'multiline'
> & {
  /** Character limit. When set, a counter renders in the footer and turns red on limit-reached. */
  maxLength?: number;
  /** Rows shown by default (min height in `body` line-heights). Defaults to 3. */
  minRows?: number;
  error?: string;
  errorIcon?: ReactNode;
  helperText?: string;
  disabled?: boolean;
};

export const Textarea = forwardRef<TextInput, TextareaProps>(function Textarea(
  {
    maxLength,
    minRows = 3,
    error,
    errorIcon,
    helperText,
    disabled = false,
    onFocus,
    onBlur,
    value,
    editable,
    ...rest
  },
  ref,
) {
  const [focused, setFocused] = useState(false);
  const isErrored = Boolean(error);
  const isEditable = editable ?? !disabled;
  const count = typeof value === 'string' ? value.length : 0;
  const atLimit = typeof maxLength === 'number' && count >= maxLength;

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
        <TextInput
          ref={ref}
          multiline
          editable={isEditable}
          placeholderTextColor={colors.inkPlaceholder}
          maxLength={maxLength}
          value={value}
          onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setFocused(false);
            onBlur?.(e);
          }}
          style={[styles.input, { minHeight: 20 * minRows }]}
          {...rest}
        />
      </View>
      {isErrored || helperText || typeof maxLength === 'number' ? (
        <View style={styles.footer}>
          <View style={styles.helperInline}>
            {isErrored ? (
              <>
                {errorIcon ? <View>{errorIcon}</View> : null}
                <Text role="caption" color="redText">
                  {error}
                </Text>
              </>
            ) : helperText ? (
              <Text role="caption" color="inkMuted">
                {helperText}
              </Text>
            ) : null}
          </View>
          {typeof maxLength === 'number' ? (
            <Text role="caption" color={atLimit ? 'redText' : 'inkMuted'}>
              {`${count}/${maxLength}`}
            </Text>
          ) : null}
        </View>
      ) : null}
    </View>
  );
});

Textarea.displayName = 'Textarea';
