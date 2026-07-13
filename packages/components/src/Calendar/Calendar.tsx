import React, { forwardRef, useCallback, useMemo, type ReactNode } from 'react';
import { Pressable, Text as RNText, View } from 'react-native';
import { Text } from '../Text';
import { styles } from './Calendar.styles';
import {
  addMonths,
  formatMonthTitle,
  isSameDay,
  monthCells,
  startOfDay,
  weekdayHeader,
} from './Calendar.utils';

export type CalendarProps = {
  /** Any date within the target month. */
  month: Date;
  /** Callback when the user taps prev/next. If omitted, prev/next are hidden. */
  onMonthChange?: (nextMonth: Date) => void;
  selectedDate?: Date | null;
  onSelect: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  /** Days that render a small green dot marker under the number. */
  markedDates?: Date[];
  weekStartsOn?: 0 | 1;
  prevIcon?: ReactNode;
  nextIcon?: ReactNode;
  accessibilityLabel?: string;
};

export const Calendar = forwardRef<View, CalendarProps>(function Calendar(
  {
    month,
    onMonthChange,
    selectedDate,
    onSelect,
    minDate,
    maxDate,
    disabledDates,
    markedDates,
    weekStartsOn = 0,
    prevIcon,
    nextIcon,
    accessibilityLabel,
  },
  ref,
) {
  const cells = useMemo(() => monthCells(month, weekStartsOn), [month, weekStartsOn]);
  const weekdays = useMemo(() => weekdayHeader(weekStartsOn), [weekStartsOn]);
  const today = useMemo(() => startOfDay(new Date()), []);

  const isDisabled = useCallback(
    (d: Date) => {
      if (minDate && startOfDay(d) < startOfDay(minDate)) return true;
      if (maxDate && startOfDay(d) > startOfDay(maxDate)) return true;
      if (disabledDates?.some((x) => isSameDay(x, d))) return true;
      return false;
    },
    [minDate, maxDate, disabledDates],
  );

  const isMarked = useCallback(
    (d: Date) => Boolean(markedDates?.some((x) => isSameDay(x, d))),
    [markedDates],
  );

  const weeks = useMemo<Date[][]>(() => {
    const rows: Date[][] = [];
    for (let i = 0; i < 6; i++) rows.push(cells.slice(i * 7, i * 7 + 7));
    return rows;
  }, [cells]);

  return (
    <View
      ref={ref}
      accessibilityLabel={accessibilityLabel ?? formatMonthTitle(month)}
      style={styles.frame}
    >
      <View style={styles.header}>
        {onMonthChange ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Previous month"
            onPress={() => onMonthChange(addMonths(month, -1))}
            style={(s) => [styles.navButton, s.pressed && styles.navButtonPressed]}
          >
            {prevIcon ?? <RNText style={{ fontSize: 20, color: '#111827' }}>‹</RNText>}
          </Pressable>
        ) : (
          <View style={styles.navButton} />
        )}
        <Text role="section" color="ink">
          {formatMonthTitle(month)}
        </Text>
        {onMonthChange ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Next month"
            onPress={() => onMonthChange(addMonths(month, 1))}
            style={(s) => [styles.navButton, s.pressed && styles.navButtonPressed]}
          >
            {nextIcon ?? <RNText style={{ fontSize: 20, color: '#111827' }}>›</RNText>}
          </Pressable>
        ) : (
          <View style={styles.navButton} />
        )}
      </View>

      <View style={styles.weekdayRow}>
        {weekdays.map((d) => (
          <View key={d} style={styles.weekdayCell}>
            <Text role="caption" color="inkMuted">
              {d}
            </Text>
          </View>
        ))}
      </View>

      {weeks.map((week, wi) => (
        <View key={wi} style={styles.week}>
          {week.map((d) => {
            const inMonth = d.getMonth() === month.getMonth();
            const disabled = !inMonth || isDisabled(d);
            const selected = selectedDate ? isSameDay(d, selectedDate) : false;
            const isToday = isSameDay(d, today);
            const marked = isMarked(d);
            return (
              <View key={d.toISOString()} style={styles.cell}>
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ selected, disabled }}
                  accessibilityLabel={d.toDateString()}
                  disabled={disabled}
                  onPress={() => onSelect(d)}
                  style={(s) => [
                    styles.cellInner,
                    isToday && !selected && styles.today,
                    selected && styles.selected,
                    s.pressed && !disabled && styles.cellPressed,
                    disabled && styles.cellDisabled,
                  ]}
                >
                  <Text
                    role="body"
                    color={selected ? 'white' : inMonth ? 'ink' : 'inkMuted'}
                  >
                    {String(d.getDate())}
                  </Text>
                  {marked ? (
                    <View style={[styles.marker, selected && styles.markerSelected]} />
                  ) : null}
                </Pressable>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
});

Calendar.displayName = 'Calendar';
