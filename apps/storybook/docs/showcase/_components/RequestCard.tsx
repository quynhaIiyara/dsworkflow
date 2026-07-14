import React from 'react';
import { Pressable, View, Text as RNText } from 'react-native';
import { colors, spacing } from '@rn-ds/tokens';
import { Text } from '@rn-ds/components';
import {
  AlertIcon,
  CalendarIcon,
  CheckCircleIcon,
  CrIcon as ChevronRight,
  LeafIcon,
  MapPinIcon,
} from './icons/pack';

// Composite spec pulled verbatim from shell.html `.rqc` (design/design-system/
// docs-site/shell.html:229-248). Sizes that ARE in the token scale now come
// from Text roles — `cardTitle` (18) for the farmer name and `dense` (13) for
// the meta rows. Off-scale sizes (11 for the chip label, 12.5 for the slot
// banner, 13.5 for the service line) still use the `style` escape hatch;
// these are half-px design choices that don't belong in the token scale.

type Slot = 'ok' | 'warn' | 'no';

const slotTheme: Record<Slot, { bg: string; fg: string; label: string }> = {
  ok: { bg: colors.greenPale, fg: colors.greenDark, label: 'Slots available on this date' },
  warn: { bg: colors.amberPale, fg: colors.amberText, label: 'You have visits that day. Reschedule if it clashes.' },
  no: { bg: colors.redPale, fg: colors.redText, label: 'No free slots on this date. Select another date.' },
};

type Status =
  | { tone: 'pending'; label: string }
  | { tone: 'overdue'; label: string };

const statusTheme = {
  pending: { dot: colors.amber, fg: colors.amber },
  overdue: { dot: colors.red, fg: colors.red },
};

type Req = {
  orderId: string;
  farmer: string;
  service: string;
  location: string;
  when: string;
  status: Status;
  slot: Slot | null;
  urgent?: boolean;
};

function StatusChip({ tone, label }: Status) {
  const theme = statusTheme[tone];
  return (
    <View
      accessibilityRole="text"
      accessibilityLabel={`${tone}: ${label}`}
      style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
    >
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          backgroundColor: theme.dot,
        }}
      />
      <RNText
        style={{
          fontSize: 11,
          fontWeight: '700',
          letterSpacing: 0.66,
          color: theme.fg,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </RNText>
    </View>
  );
}

function MetaRow({
  icon,
  children,
  urgent,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  urgent?: boolean;
}) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 9 }}>
      <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </View>
      <Text role="dense" color={urgent ? 'redText' : 'inkBody'}>
        {children}
      </Text>
    </View>
  );
}

function SlotBanner({ tone }: { tone: Slot }) {
  const theme = slotTheme[tone];
  const Icon = tone === 'ok' ? CheckCircleIcon : AlertIcon;
  return (
    <View
      style={{
        marginTop: 13,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 8,
        backgroundColor: theme.bg,
      }}
    >
      <Icon size={16} color={theme.fg} />
      <RNText style={{ fontSize: 12.5, fontWeight: '600', color: theme.fg, flex: 1 }}>
        {theme.label}
      </RNText>
    </View>
  );
}

function SelectNewDateButton() {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Select new date"
      onPress={() => {}}
      style={({ pressed }) => ({
        marginTop: 11,
        height: 44,
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.hairline,
        backgroundColor: colors.card,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: pressed ? 0.75 : 1,
      })}
    >
      <Text role="cta" size="md">
        Select new date
      </Text>
    </Pressable>
  );
}

function RequestCard({ req }: { req: Req }) {
  const showSelectDate = req.slot === 'warn' || req.slot === 'no';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Open request ${req.orderId}`}
      onPress={() => {}}
      style={({ pressed }) => ({
        width: 352,
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        shadowColor: '#111827',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
        elevation: 2,
        opacity: pressed ? 0.9 : 1,
      })}
    >
      <View style={{ flex: 1, minWidth: 0 }}>
        {/* Top: identity block + status chip */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <View style={{ flex: 1, minWidth: 0 }}>
            <Text role="eyebrow">{`Order ${req.orderId}`}</Text>
            <View style={{ height: 4 }} />
            <Text role="cardTitle">{req.farmer}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                marginTop: 3,
              }}
            >
              <LeafIcon size={15} color={colors.inkBody} />
              <RNText style={{ fontSize: 13.5, color: colors.inkBody }}>
                {req.service}
              </RNText>
            </View>
          </View>
          <StatusChip tone={req.status.tone} label={req.status.label} />
        </View>

        {/* Meta: divider + rows */}
        <View
          style={{
            marginTop: 14,
            paddingTop: 14,
            borderTopWidth: 1,
            borderTopColor: colors.hairline,
            gap: 7,
          }}
        >
          <MetaRow icon={<MapPinIcon size={18} color={colors.inkMuted} />}>
            {req.location}
          </MetaRow>
          <MetaRow
            icon={
              <CalendarIcon
                size={18}
                color={req.urgent ? colors.red : colors.inkMuted}
              />
            }
            urgent={req.urgent}
          >
            {req.when}
          </MetaRow>
        </View>

        {req.slot ? <SlotBanner tone={req.slot} /> : null}
        {showSelectDate ? <SelectNewDateButton /> : null}
      </View>

      <View style={{ marginTop: 2 }}>
        <ChevronRight size={20} color={colors.inkPlaceholder} strokeWidth={2} />
      </View>
    </Pressable>
  );
}

const Frame = ({ children }: { children: React.ReactNode }) => (
  <View style={{ gap: spacing.s3 }}>{children}</View>
);

export const Default = () => (
  <Frame>
    <RequestCard
      req={{
        orderId: 'SO-24815',
        farmer: 'Suhandi Wijaya',
        service: 'Soil health test',
        location: 'Karawang, West Java',
        when: 'Requested in 3 days',
        status: { tone: 'pending', label: 'Pending' },
        slot: 'ok',
      }}
    />
  </Frame>
);

export const SlotAvailable = Default;

export const Busy = () => (
  <Frame>
    <RequestCard
      req={{
        orderId: 'SO-24820',
        farmer: 'Dewi Lestari',
        service: 'Leaf colour reading',
        location: 'Subang, West Java',
        when: 'Requested for Fri, 17 Jul',
        status: { tone: 'pending', label: 'Pending' },
        slot: 'warn',
      }}
    />
  </Frame>
);

export const NoSlots = () => (
  <Frame>
    <RequestCard
      req={{
        orderId: 'SO-24822',
        farmer: 'Pak Hartono',
        service: 'Soil health test',
        location: 'Cianjur, West Java',
        when: 'Requested for Mon, 20 Jul',
        status: { tone: 'pending', label: 'Pending' },
        slot: 'no',
      }}
    />
  </Frame>
);

export const Overdue = () => (
  <Frame>
    <RequestCard
      req={{
        orderId: 'SO-24788',
        farmer: 'Siti Rahayu',
        service: 'Soil health test',
        location: 'Karawang, West Java',
        when: 'Requested 5 days ago, overdue, auto-cancels soon',
        status: { tone: 'overdue', label: 'Overdue' },
        slot: 'ok',
        urgent: true,
      }}
    />
  </Frame>
);
