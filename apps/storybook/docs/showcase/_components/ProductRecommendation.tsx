import React from 'react';
import { Pressable, TextInput, View, Text as RNText } from 'react-native';
import { colors, radii } from '@rn-ds/tokens';
import { Text } from '@rn-ds/components';
import { PackageIcon, TrashIcon } from './icons/pack';

// Product recommendation — matches the target image (newer than gallery.html
// #c28). Bumped sizes on the second pass: product name uses `role="title"`
// (22, was cardTitle 18), stepper primary is 20 inline, and the textarea is
// inline (surface bg, no border) since the shipped Textarea doesn't accept a
// `variant="quiet"` prop yet.

const MT_PER_BAG = 0.025;

function StepperControl({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
}) {
  const atMin = value <= min;
  const atMax = value >= max;
  const mt = (value * MT_PER_BAG).toFixed(3);

  const Btn = ({
    label,
    glyph,
    disabled,
    onPress,
  }: {
    label: string;
    glyph: string;
    disabled: boolean;
    onPress: () => void;
  }) => (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => ({
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.card,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: disabled ? 0.4 : pressed ? 0.75 : 1,
      })}
    >
      <RNText style={{ fontSize: 22, fontWeight: '400', color: colors.ink, lineHeight: 22 }}>
        {glyph}
      </RNText>
    </Pressable>
  );

  return (
    <View
      accessibilityRole="adjustable"
      accessibilityLabel="Quantity"
      accessibilityValue={{ min, max, now: value }}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: colors.surface,
        borderRadius: 100,
        paddingHorizontal: 5,
        paddingVertical: 5,
        minWidth: 220,
      }}
    >
      <Btn label="Decrease" glyph="−" disabled={atMin} onPress={() => onChange(value - 1)} />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <RNText style={{ fontSize: 16, fontWeight: '700', color: colors.ink, lineHeight: 22 }}>
          {`${value} bag${value === 1 ? '' : 's'}`}
        </RNText>
        <RNText style={{ fontSize: 12, color: colors.inkMuted, marginTop: 1 }}>
          {`(${mt} MT)`}
        </RNText>
      </View>
      <Btn label="Increase" glyph="+" disabled={atMax} onPress={() => onChange(value + 1)} />
    </View>
  );
}

function QuietTextarea({
  value,
  onChangeText,
  placeholder,
}: {
  value: string;
  onChangeText: (t: string) => void;
  placeholder: string;
}) {
  return (
    <TextInput
      multiline
      numberOfLines={3}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.inkPlaceholder}
      textAlignVertical="top"
      style={{
        backgroundColor: colors.surface,
        borderRadius: radii.btn,
        paddingHorizontal: 14,
        paddingVertical: 14,
        fontSize: 15,
        lineHeight: 22,
        color: colors.ink,
        minHeight: 96,
      }}
    />
  );
}

function ProductCard({
  initialQty,
  initialNote,
}: {
  initialQty: number;
  initialNote: string;
}) {
  const [qty, setQty] = React.useState(initialQty);
  const [note, setNote] = React.useState(initialNote);
  const MAX = 500;

  return (
    <View
      style={{
        width: 352,
        backgroundColor: colors.card,
        borderRadius: 20,
        padding: 20,
        shadowColor: '#111827',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      {/* Top row: icon + identity + trash */}
      <View style={{ flexDirection: 'row', gap: 14, alignItems: 'flex-start' }}>
        <View
          style={{
            width: 52,
            height: 52,
            borderRadius: 12,
            backgroundColor: colors.greenPale,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PackageIcon size={28} color={colors.greenDark} />
        </View>
        <View style={{ flex: 1, minWidth: 0 }}>
          <Text role="eyebrow">YARAMILA</Text>
          <View style={{ height: 2 }} />
          <Text role="title">YaraMila Complex 12-11-18</Text>
          <RNText style={{ fontSize: 14, color: colors.inkMuted, marginTop: 4 }}>
            25 kg bag · Rp 210.000 / bag
          </RNText>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Remove product"
          onPress={() => {}}
          style={({ pressed }) => ({
            padding: 6,
            marginTop: -4,
            marginRight: -6,
            opacity: pressed ? 0.6 : 1,
          })}
        >
          <TrashIcon size={22} color={colors.inkMuted} />
        </Pressable>
      </View>

      {/* Divider */}
      <View
        style={{
          height: 1,
          backgroundColor: colors.hairline,
          marginTop: 18,
          marginBottom: 18,
        }}
      />

      {/* Quantity row */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <RNText style={{ fontSize: 17, fontWeight: '600', color: colors.ink }}>
          Quantity
        </RNText>
        <StepperControl value={qty} onChange={setQty} min={1} max={99} />
      </View>

      {/* Advisory note */}
      <View style={{ marginTop: 22 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <RNText
              style={{
                fontSize: 12,
                fontWeight: '600',
                letterSpacing: 0.72,
                color: colors.inkMuted,
                textTransform: 'uppercase',
              }}
            >
              ADVISORY NOTE
            </RNText>
            <RNText
              style={{
                fontSize: 12,
                fontWeight: '600',
                letterSpacing: 0.72,
                color: colors.greenDark,
                textTransform: 'uppercase',
              }}
            >
              {'  ·  REQUIRED'}
            </RNText>
          </View>
          <RNText style={{ fontSize: 12, color: colors.inkMuted }}>
            {`${note.length}/${MAX}`}
          </RNText>
        </View>
        <QuietTextarea
          value={note}
          onChangeText={setNote}
          placeholder="E.g., Low nitrogen in soil, recommended for better yield"
        />
      </View>
    </View>
  );
}

export const Empty = () => <ProductCard initialQty={1} initialNote="" />;

export const Filled = () => (
  <ProductCard
    initialQty={3}
    initialNote="Sandy loam with low nitrogen. Apply at first tillering, split second dose at panicle initiation."
  />
);

export const Default = Empty;
