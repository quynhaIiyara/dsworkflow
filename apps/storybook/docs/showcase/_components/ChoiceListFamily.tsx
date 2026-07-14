import React from 'react';
import { Pressable, View, Text as RNText } from 'react-native';
import { colors, spacing } from '@rn-ds/tokens';
import { ChoiceList, Text } from '@rn-ds/components';
import { CheckIcon, SunIcon } from './icons/pack';

// Composite spec pulled from gallery.html #c41–#c44 (ChoiceList family).
// Reject reason (#c41) uses the shipped ChoiceList primitive with a small
// wrapper for the card surface. The other three (Slot picker #c42, Coupon
// sheet row #c43, Country picker #c44) all share the same single-select
// radio pattern but need per-item content shapes (icon + name + hours;
// code + label + amount; flag + name) that ChoiceList doesn't expose yet.
// Notes on the primitive gap at the bottom of the MDX.

// Shared radio dot: 22x22, hairline border, green + check icon when selected.
function Radio({ selected }: { selected: boolean }) {
  return (
    <View
      style={{
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: selected ? colors.green : colors.hairline,
        backgroundColor: selected ? colors.green : 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {selected ? <CheckIcon size={13} color={colors.white} strokeWidth={2.5} /> : null}
    </View>
  );
}

const Frame = ({ children }: { children: React.ReactNode }) => (
  <View style={{ width: 352, gap: spacing.s3 }}>{children}</View>
);

// #c41 — Reject reason: shipped ChoiceList inside a card surface.
export const RejectReason = () => {
  const [value, setValue] = React.useState<string | null>('unreachable');
  return (
    <Frame>
      <View
        style={{
          backgroundColor: colors.card,
          borderRadius: 16,
          paddingHorizontal: 16,
          paddingVertical: 4,
          shadowColor: '#111827',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.06,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        <ChoiceList
          options={[
            { id: 'unreachable', label: 'Farmer could not be reached' },
            { id: 'no-slot', label: 'No available slot for the requested date' },
            { id: 'weather', label: 'Weather rendered visit unsafe' },
          ]}
          value={value}
          onChange={setValue}
        />
      </View>
    </Frame>
  );
};

// #c42 — Slot picker: card-per-option, icon + name + hours + radio.
type Slot = { id: string; name: string; hours: string; state?: 'na' | 'booked' };

function SlotOption({
  slot,
  selected,
  onPress,
}: {
  slot: Slot;
  selected: boolean;
  onPress: () => void;
}) {
  const na = slot.state === 'na';
  const booked = slot.state === 'booked';
  const iconBg = selected ? colors.greenLight : colors.surface;
  const iconFg = selected ? colors.greenDark : colors.inkBody;
  const hoursColor = na ? colors.redText : booked ? colors.amberText : colors.inkMuted;
  const hoursWeight = na || booked ? '600' : '400';

  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected, disabled: na }}
      accessibilityLabel={`${slot.name}, ${slot.hours}`}
      onPress={onPress}
      disabled={na}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        paddingVertical: 13,
        paddingHorizontal: 15,
        backgroundColor: selected ? colors.greenPale : colors.card,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: selected ? colors.green : 'transparent',
        opacity: na ? 0.6 : pressed ? 0.85 : 1,
        shadowColor: '#111827',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
        elevation: 2,
      })}
    >
      <Radio selected={selected} />
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 11,
          backgroundColor: iconBg,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SunIcon size={18} color={iconFg} />
      </View>
      <View style={{ flex: 1, minWidth: 0 }}>
        <Text role="subtitle">{slot.name}</Text>
        <RNText
          style={{
            fontSize: 12.5,
            color: hoursColor,
            fontWeight: hoursWeight as '400' | '600',
            marginTop: 2,
          }}
        >
          {slot.hours}
        </RNText>
      </View>
    </Pressable>
  );
}

export const SlotPicker = () => {
  const [value, setValue] = React.useState('morning');
  const slots: Slot[] = [
    { id: 'morning', name: 'Morning', hours: '10:00 AM – 12:00 PM' },
    { id: 'afternoon', name: 'Afternoon', hours: '2:00 – 4:00 PM' },
    { id: 'late', name: 'Late afternoon', hours: 'Fully booked', state: 'booked' },
    { id: 'evening', name: 'Evening', hours: 'Not available today', state: 'na' },
  ];
  return (
    <Frame>
      {slots.map((s) => (
        <SlotOption
          key={s.id}
          slot={s}
          selected={value === s.id}
          onPress={() => setValue(s.id)}
        />
      ))}
    </Frame>
  );
};

// #c43 — Coupon sheet row: code + label + amount + radio-on-right.
type Coupon = { id: string; code: string; label: string; amount: string };

function CouponOption({
  coupon,
  selected,
  onPress,
}: {
  coupon: Coupon;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      accessibilityLabel={`${coupon.code}, ${coupon.label}, ${coupon.amount}`}
      onPress={onPress}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 14,
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: colors.hairline,
        opacity: pressed ? 0.85 : 1,
      })}
    >
      <Radio selected={selected} />
      <View style={{ flex: 1, minWidth: 0 }}>
        <RNText style={{ fontSize: 14, fontWeight: '700', letterSpacing: 0.14, color: colors.ink }}>
          {coupon.code}
        </RNText>
        <RNText style={{ fontSize: 12.5, color: colors.inkMuted, marginTop: 2 }}>
          {coupon.label}
        </RNText>
      </View>
      <Text role="dense" weight="semibold" color="greenDark">
        {coupon.amount}
      </Text>
    </Pressable>
  );
}

export const CouponRow = () => {
  const [value, setValue] = React.useState('harvest');
  const coupons: Coupon[] = [
    { id: 'harvest', code: 'HARVEST10', label: 'Harvest season discount', amount: '− Rp 20.000' },
    { id: 'bulk', code: 'BULK5', label: 'Bulk sample discount', amount: '− 5%' },
    { id: 'first', code: 'FIRST', label: 'First-visit discount', amount: '− Rp 15.000' },
  ];
  return (
    <Frame>
      <View
        style={{
          backgroundColor: colors.card,
          borderRadius: 16,
          paddingHorizontal: 16,
          shadowColor: '#111827',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.06,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        {coupons.map((c, i) => (
          <View
            key={c.id}
            style={i === coupons.length - 1 ? { borderBottomWidth: 0 } : undefined}
          >
            <CouponOption
              coupon={c}
              selected={value === c.id}
              onPress={() => setValue(c.id)}
            />
          </View>
        ))}
      </View>
    </Frame>
  );
};

// #c44 — Country picker row: flag + name + ring-in-ring radio (::before pattern).
// Uses emoji flags (matches gallery.html), 22x16 with a small shadow.
type Country = { id: string; flag: string; name: string };

function RingRadio({ selected }: { selected: boolean }) {
  // Ring-in-ring: outer 22x22 green fill, inner 3px white ring, per .opt-row::before.
  if (!selected) {
    return (
      <View
        style={{
          width: 22,
          height: 22,
          borderRadius: 11,
          borderWidth: 2,
          borderColor: colors.hairline,
        }}
      />
    );
  }
  return (
    <View
      style={{
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: colors.green,
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: 12,
          height: 12,
          borderRadius: 6,
          borderWidth: 3,
          borderColor: colors.white,
          backgroundColor: colors.green,
        }}
      />
    </View>
  );
}

function CountryOption({
  country,
  selected,
  onPress,
}: {
  country: Country;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      accessibilityLabel={country.name}
      onPress={onPress}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        minHeight: 52,
        paddingVertical: 15,
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: colors.hairline,
        opacity: pressed ? 0.85 : 1,
      })}
    >
      <RingRadio selected={selected} />
      <RNText style={{ fontSize: 20, lineHeight: 22 }}>{country.flag}</RNText>
      <Text role="body" color="ink">
        {country.name}
      </Text>
    </Pressable>
  );
}

export const CountryPicker = () => {
  const [value, setValue] = React.useState('id');
  const countries: Country[] = [
    { id: 'id', flag: '🇮🇩', name: 'Indonesia' },
    { id: 'th', flag: '🇹🇭', name: 'Thailand' },
    { id: 'vn', flag: '🇻🇳', name: 'Vietnam' },
    { id: 'ph', flag: '🇵🇭', name: 'Philippines' },
  ];
  return (
    <Frame>
      <View style={{ paddingHorizontal: 16 }}>
        {countries.map((c, i) => (
          <View
            key={c.id}
            style={i === countries.length - 1 ? { borderBottomWidth: 0 } : undefined}
          >
            <CountryOption
              country={c}
              selected={value === c.id}
              onPress={() => setValue(c.id)}
            />
          </View>
        ))}
      </View>
    </Frame>
  );
};

export const Default = RejectReason;
