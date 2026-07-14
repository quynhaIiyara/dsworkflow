import React from 'react';
import { Pressable, View, Text as RNText } from 'react-native';
import { colors, spacing } from '@rn-ds/tokens';
import { Text } from '@rn-ds/components';
import {
  CheckIcon,
  ClockIcon,
  CrIcon as ChevronRight,
  DotsIcon,
  MapPinIcon,
  MessageIcon,
  NavigateIcon,
  PhoneIcon,
  PlayIcon,
} from './icons/pack';

// Composite spec pulled verbatim from shell.html `.svc` (design/design-system/
// docs-site/shell.html:198-223). Sizes in the token scale (18 farmer name,
// 13 meta line) now come from Text roles — `cardTitle` and `dense`. Off-scale
// sizes (11 chip label, 12.5 time slot + location) still use the `style`
// escape hatch — half-px values that don't belong in the token scale.

type Tone = 'confirmed' | 'in-progress' | 'incomplete' | 'completed';

const toneTheme: Record<Tone, { dot: string; text: string }> = {
  confirmed: { dot: colors.green, text: colors.greenDark },
  'in-progress': { dot: colors.blue, text: colors.blueDark },
  incomplete: { dot: colors.red, text: colors.redText },
  completed: { dot: colors.inkMuted, text: colors.inkMuted },
};

type Booking = {
  time: string;
  farmer: string;
  initials: string;
  service: string;
  orderId: string;
  location: string;
  status: { tone: Tone; label: string };
};

function StatusChip({ tone, label }: { tone: Tone; label: string }) {
  const theme = toneTheme[tone];
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
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
          textTransform: 'uppercase',
          color: theme.text,
        }}
      >
        {label}
      </RNText>
    </View>
  );
}

function Avatar({ initials, tone }: { initials: string; tone: Tone }) {
  const isRunning = tone === 'in-progress';
  const isDone = tone === 'completed';
  const bg = isDone ? colors.surface : isRunning ? colors.card : colors.greenPale;
  const fg = isDone ? colors.inkPlaceholder : isRunning ? colors.inkBody : colors.greenDark;
  return (
    <View
      style={{
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: bg,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text role="cardTitle" style={{ color: fg }}>
        {initials}
      </Text>
    </View>
  );
}

function QuickAction({
  icon,
  label,
  tone,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  tone: Tone;
  onPress: () => void;
}) {
  const isRunning = tone === 'in-progress';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => ({
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: isRunning ? colors.card : colors.surface,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: pressed ? 0.75 : 1,
      })}
    >
      {icon}
    </Pressable>
  );
}

function PrimaryAction({
  label,
  tone,
  icon,
}: {
  label: string;
  tone: 'start' | 'complete';
  icon: React.ReactNode;
}) {
  const bg = tone === 'start' ? colors.green : colors.blue;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={() => {}}
      style={({ pressed }) => ({
        flex: 1,
        height: 44,
        borderRadius: 8,
        backgroundColor: bg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        opacity: pressed ? 0.85 : 1,
      })}
    >
      {icon}
      <Text role="cta" size="md" color="white">
        {label}
      </Text>
    </Pressable>
  );
}

function ScheduledServiceCard({ booking }: { booking: Booking }) {
  const isRunning = booking.status.tone === 'in-progress';
  const isDone = booking.status.tone === 'completed';

  const clockColor = isRunning ? colors.inkBody : isDone ? colors.inkPlaceholder : colors.greenDark;
  const cardBg = isRunning ? colors.blueWash : colors.card;
  const cardOpacity = isDone ? 0.86 : 1;
  const iconColor = isRunning ? colors.inkBody : colors.greenDark;

  return (
    <View
      style={{
        width: 352,
        backgroundColor: cardBg,
        borderRadius: 16,
        paddingVertical: 15,
        paddingHorizontal: 16,
        shadowColor: '#111827',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
        elevation: 2,
        opacity: cardOpacity,
      }}
    >
      {/* Top row */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}>
          <ClockIcon size={14} color={clockColor} />
          <RNText style={{ fontSize: 12.5, fontWeight: '600', color: colors.inkBody }}>
            {booking.time}
          </RNText>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 9 }}>
          <StatusChip tone={booking.status.tone} label={booking.status.label} />
          <DotsIcon size={20} color={colors.inkPlaceholder} />
        </View>
      </View>

      {/* Main row */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 13,
          marginTop: 13,
        }}
      >
        <Avatar initials={booking.initials} tone={booking.status.tone} />
        <View style={{ flex: 1, minWidth: 0 }}>
          <Text role="cardTitle">{booking.farmer}</Text>
          <View style={{ height: 3 }} />
          <Text role="dense">
            {`${booking.service} · ${booking.orderId}`}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              marginTop: 6,
            }}
          >
            <MapPinIcon size={13} color={colors.inkMuted} />
            <RNText style={{ fontSize: 12.5, color: colors.inkMuted }}>
              {booking.location}
            </RNText>
          </View>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <ChevronRight size={18} color={colors.inkPlaceholder} />
        </View>
      </View>

      {/* Action row */}
      {!isDone ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            borderTopWidth: 1,
            borderTopColor: colors.hairline,
            marginTop: 15,
            paddingTop: 15,
          }}
        >
          {isRunning ? (
            <>
              <QuickAction
                tone={booking.status.tone}
                icon={<PhoneIcon size={19} color={iconColor} />}
                label="Call farmer"
                onPress={() => {}}
              />
              <PrimaryAction
                label="Complete service"
                tone="complete"
                icon={<CheckIcon size={16} color={colors.white} strokeWidth={2.4} />}
              />
            </>
          ) : (
            <>
              <QuickAction
                tone={booking.status.tone}
                icon={<PhoneIcon size={19} color={iconColor} />}
                label="Call farmer"
                onPress={() => {}}
              />
              <QuickAction
                tone={booking.status.tone}
                icon={<MessageIcon size={19} color={iconColor} />}
                label="Message farmer"
                onPress={() => {}}
              />
              <QuickAction
                tone={booking.status.tone}
                icon={<NavigateIcon size={19} color={iconColor} />}
                label="Directions"
                onPress={() => {}}
              />
              <PrimaryAction
                label="Start service"
                tone="start"
                icon={<PlayIcon size={16} color={colors.white} />}
              />
            </>
          )}
        </View>
      ) : null}
    </View>
  );
}

const Frame = ({ children }: { children: React.ReactNode }) => (
  <View style={{ gap: spacing.s3 }}>{children}</View>
);

export const Confirmed = () => (
  <Frame>
    <ScheduledServiceCard
      booking={{
        time: '8:00 – 11:00 AM',
        farmer: 'Dewi Lestari',
        initials: 'DW',
        service: 'Soil health test',
        orderId: 'SO-24790',
        location: 'Karawang, West Java',
        status: { tone: 'confirmed', label: 'Confirmed' },
      }}
    />
  </Frame>
);

export const InProgress = () => (
  <Frame>
    <ScheduledServiceCard
      booking={{
        time: '11:30 AM – 1:30 PM',
        farmer: 'Bambang Sutrisno',
        initials: 'BS',
        service: 'Leaf colour reading',
        orderId: 'SO-24812',
        location: 'Kec. Berbah, Sleman',
        status: { tone: 'in-progress', label: 'In progress' },
      }}
    />
  </Frame>
);

export const Incomplete = () => (
  <Frame>
    <ScheduledServiceCard
      booking={{
        time: '2:00 – 3:30 PM',
        farmer: 'Surya Narayana',
        initials: 'SN',
        service: 'Field advisory visit',
        orderId: 'SO-24777',
        location: 'Kec. Turi, Sleman',
        status: { tone: 'incomplete', label: 'Incomplete' },
      }}
    />
  </Frame>
);

export const Completed = () => (
  <Frame>
    <ScheduledServiceCard
      booking={{
        time: '4:00 – 5:00 PM',
        farmer: 'Siti Rahayu',
        initials: 'SR',
        service: 'Comprehensive SHT',
        orderId: 'SO-24788',
        location: 'Karawang, West Java',
        status: { tone: 'completed', label: 'Completed' },
      }}
    />
  </Frame>
);

export const Default = Confirmed;
