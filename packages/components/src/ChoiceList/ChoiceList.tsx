import React, { Fragment, forwardRef } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../Text';
import { styles } from './ChoiceList.styles';

export type ChoiceOption = {
  id: string;
  label: string;
  disabled?: boolean;
};

export type ChoiceListProps = {
  options: ChoiceOption[];
  value: string | null;
  onChange: (id: string) => void;
  accessibilityLabel?: string;
};

export const ChoiceList = forwardRef<View, ChoiceListProps>(function ChoiceList(
  { options, value, onChange, accessibilityLabel },
  ref,
) {
  return (
    <View
      ref={ref}
      accessibilityRole="radiogroup"
      accessibilityLabel={accessibilityLabel}
      style={styles.list}
    >
      {options.map((opt, i) => {
        const selected = opt.id === value;
        const showSeparator = i < options.length - 1;
        return (
          <Fragment key={opt.id}>
            <Pressable
              accessibilityRole="radio"
              accessibilityState={{ selected, disabled: opt.disabled }}
              accessibilityLabel={opt.label}
              disabled={opt.disabled}
              onPress={() => onChange(opt.id)}
              style={(state) => [
                styles.row,
                state.pressed && !opt.disabled && styles.rowPressed,
              ]}
            >
              <View style={[styles.radio, selected && styles.radioChecked]}>
                {selected ? <View style={styles.radioDot} /> : null}
              </View>
              <View style={styles.labelWrap}>
                <Text role="body" color={opt.disabled ? 'inkMuted' : 'ink'}>
                  {opt.label}
                </Text>
              </View>
            </Pressable>
            {showSeparator ? <View style={styles.separator} /> : null}
          </Fragment>
        );
      })}
    </View>
  );
});

ChoiceList.displayName = 'ChoiceList';
