import React, { forwardRef, type ReactNode } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Input, type InputProps } from '../Input';
import { Text } from '../Text';
import { styles } from './SearchField.styles';

export type SearchFieldProps = Omit<
  InputProps,
  'trailingSlot' | 'leadingIcon' | 'error' | 'errorIcon' | 'helperText'
> & {
  value: string;
  onChangeText: (v: string) => void;
  /** Left-side glyph. Consumer supplies (no Icon primitive). */
  searchIcon?: ReactNode;
  /** Right-side glyph shown when the field has a value. Defaults to a "×". */
  clearIcon?: ReactNode;
  onClear?: () => void;
  /** Optional result count meta line below the field. */
  resultCount?: number;
  resultLabel?: string;
};

export const SearchField = forwardRef<TextInput, SearchFieldProps>(function SearchField(
  {
    value,
    onChangeText,
    searchIcon,
    clearIcon,
    onClear,
    resultCount,
    resultLabel = 'results',
    ...rest
  },
  ref,
) {
  const showClear = value.length > 0;

  const clear = () => {
    onChangeText('');
    onClear?.();
  };

  return (
    <View>
      <Input
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        leadingIcon={searchIcon}
        trailingSlot={
          showClear ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Clear search"
              onPress={clear}
              hitSlop={8}
              style={styles.clearHit}
            >
              {clearIcon ?? (
                <Text role="body" color="inkMuted">
                  ×
                </Text>
              )}
            </Pressable>
          ) : null
        }
        {...rest}
      />
      {typeof resultCount === 'number' ? (
        <View style={styles.meta}>
          <Text role="caption" color="inkMuted">
            {`${resultCount} ${resultLabel}`}
          </Text>
        </View>
      ) : null}
    </View>
  );
});

SearchField.displayName = 'SearchField';
