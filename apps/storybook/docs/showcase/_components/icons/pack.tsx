import React from 'react';
import { colors } from '@rn-ds/tokens';

export type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  title?: string;
};

// The showcase runs under react-native-web only. Inline <svg> renders as an
// HTML SVG element; on native RN this would need `react-native-svg`. That's a
// deliberate scope limit — see 00-Overview.mdx.
function makeIcon(viewBox: string, paths: React.ReactNode) {
  return function Icon({ size = 22, color = colors.inkBody, strokeWidth = 2, title }: IconProps) {
    const props = {
      width: size,
      height: size,
      viewBox,
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round' as const,
      strokeLinejoin: 'round' as const,
      role: title ? 'img' : undefined,
      'aria-label': title,
    };
    return React.createElement('svg', props, paths);
  };
}

export const HomeIcon = makeIcon('0 0 24 24', <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></>);
export const CalendarIcon = makeIcon('0 0 24 24', <><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/></>);
export const InboxIcon = makeIcon('0 0 24 24', <><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></>);
export const ClockIcon = makeIcon('0 0 24 24', <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>);
export const ClipboardIcon = makeIcon('0 0 24 24', <><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h6"/></>);
export const CheckCircleIcon = makeIcon('0 0 24 24', <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></>);
export const CheckIcon = makeIcon('0 0 24 24', <><path d="M20 6 9 17l-5-5"/></>);
export const XIcon = makeIcon('0 0 24 24', <><path d="M18 6 6 18M6 6l12 12"/></>);
export const ClIcon = makeIcon('0 0 24 24', <><path d="m15 18-6-6 6-6"/></>);
export const CrIcon = makeIcon('0 0 24 24', <><path d="m9 18 6-6-6-6"/></>);
export const MapPinIcon = makeIcon('0 0 24 24', <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></>);
export const PhoneIcon = makeIcon('0 0 24 24', <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></>);
export const MessageIcon = makeIcon('0 0 24 24', <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>);
export const NavigateIcon = makeIcon('0 0 24 24', <><polygon points="3 11 22 2 13 21 11 13 3 11"/></>);
export const BellIcon = makeIcon('0 0 24 24', <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>);
export const UserIcon = makeIcon('0 0 24 24', <><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></>);
export const SproutIcon = makeIcon('0 0 24 24', <><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></>);
export const LeafIcon = makeIcon('0 0 24 24', <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></>);
export const PackageIcon = makeIcon('0 0 24 24', <><path d="M16.5 9.4 7.5 4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></>);
export const TicketIcon = makeIcon('0 0 24 24', <><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M13 5v2M13 17v2M13 11v2"/></>);
export const AlertIcon = makeIcon('0 0 24 24', <><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></>);
export const InfoIcon = makeIcon('0 0 24 24', <><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></>);
export const WifiOffIcon = makeIcon('0 0 24 24', <><path d="M2 2l20 20M8.5 16.5a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 4.17-2.65M10.66 5c4.01-.36 8.14.9 11.34 3.76M16.85 11.25a10 10 0 0 1 2.22 1.68M5 13a10 10 0 0 1 5.24-2.76M12 20h.01"/></>);
export const FilterIcon = makeIcon('0 0 24 24', <><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></>);
export const SunIcon = makeIcon('0 0 24 24', <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></>);
export const SunsetIcon = makeIcon('0 0 24 24', <><path d="M12 10V2M4.9 10.9l1.4 1.4M2 18h2M20 18h2M17.7 12.3l1.4-1.4M22 22H2M16 18a4 4 0 0 0-8 0M8 6l4 4 4-4"/></>);
export const MoonIcon = makeIcon('0 0 24 24', <><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></>);
export const DotsIcon = makeIcon('0 0 24 24', <><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></>);
export const GlobeIcon = makeIcon('0 0 24 24', <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></>);
export const HelpIcon = makeIcon('0 0 24 24', <><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/></>);
export const LogoutIcon = makeIcon('0 0 24 24', <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></>);
export const BranchIcon = makeIcon('0 0 24 24', <><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/><circle cx="18" cy="6" r="3"/></>);
export const CameraIcon = makeIcon('0 0 24 24', <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3.2"/></>);
export const ImageIcon = makeIcon('0 0 24 24', <><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></>);
export const VideoIcon = makeIcon('0 0 24 24', <><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2"/></>);
export const FileIcon = makeIcon('0 0 24 24', <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></>);
export const UploadIcon = makeIcon('0 0 24 24', <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></>);
export const PlusIcon = makeIcon('0 0 24 24', <><path d="M12 5v14M5 12h14"/></>);
export const MinusIcon = makeIcon('0 0 24 24', <><path d="M5 12h14"/></>);
export const TrashIcon = makeIcon('0 0 24 24', <><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></>);
export const SearchIcon = makeIcon('0 0 24 24', <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>);
export const PlayIcon = makeIcon('0 0 24 24', <><polygon points="6 3 20 12 6 21 6 3"/></>);
export const InfoMenuIcon = makeIcon('0 0 24 24', <><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></>);
export const FlashIcon = makeIcon('0 0 24 24', <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>);
export const FlipIcon = makeIcon('0 0 24 24', <><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></>);
export const CalendarCheckIcon = makeIcon('0 0 24 24', <><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"/><path d="M3 10h18M8 2v4M16 2v4M16 19l2 2 4-4"/></>);
export const CdIcon = makeIcon('0 0 24 24', <><path d="m6 9 6 6 6-6"/></>);
export const RefreshIcon = makeIcon('0 0 24 24', <><path d="M21 12a9 9 0 1 1-2.64-6.36L21 8"/><path d="M21 3v5h-5"/></>);
export const StarIcon = makeIcon('0 0 24 24', <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>);
export const EyeIcon = makeIcon('0 0 24 24', <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></>);
export const DownloadIcon = makeIcon('0 0 24 24', <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></>);
export const TagIcon = makeIcon('0 0 24 24', <><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1.5"/></>);
export const FlaskIcon = makeIcon('0 0 24 24', <><path d="M9 3h6M10 3v6.5L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V3"/><path d="M7 15h10"/></>);
export const HourglassIcon = makeIcon('0 0 24 24', <><path d="M5 22h14M5 2h14M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2"/></>);

export const iconList: { slug: string; name: string; component: (props: IconProps) => JSX.Element }[] = [
  { slug: 'i-home', name: 'HomeIcon', component: HomeIcon },
  { slug: 'i-calendar', name: 'CalendarIcon', component: CalendarIcon },
  { slug: 'i-inbox', name: 'InboxIcon', component: InboxIcon },
  { slug: 'i-clock', name: 'ClockIcon', component: ClockIcon },
  { slug: 'i-clipboard', name: 'ClipboardIcon', component: ClipboardIcon },
  { slug: 'i-check-circle', name: 'CheckCircleIcon', component: CheckCircleIcon },
  { slug: 'i-check', name: 'CheckIcon', component: CheckIcon },
  { slug: 'i-x', name: 'XIcon', component: XIcon },
  { slug: 'i-cl', name: 'ClIcon', component: ClIcon },
  { slug: 'i-cr', name: 'CrIcon', component: CrIcon },
  { slug: 'i-map-pin', name: 'MapPinIcon', component: MapPinIcon },
  { slug: 'i-phone', name: 'PhoneIcon', component: PhoneIcon },
  { slug: 'i-message', name: 'MessageIcon', component: MessageIcon },
  { slug: 'i-navigate', name: 'NavigateIcon', component: NavigateIcon },
  { slug: 'i-bell', name: 'BellIcon', component: BellIcon },
  { slug: 'i-user', name: 'UserIcon', component: UserIcon },
  { slug: 'i-sprout', name: 'SproutIcon', component: SproutIcon },
  { slug: 'i-leaf', name: 'LeafIcon', component: LeafIcon },
  { slug: 'i-package', name: 'PackageIcon', component: PackageIcon },
  { slug: 'i-ticket', name: 'TicketIcon', component: TicketIcon },
  { slug: 'i-alert', name: 'AlertIcon', component: AlertIcon },
  { slug: 'i-info', name: 'InfoIcon', component: InfoIcon },
  { slug: 'i-wifi-off', name: 'WifiOffIcon', component: WifiOffIcon },
  { slug: 'i-filter', name: 'FilterIcon', component: FilterIcon },
  { slug: 'i-sun', name: 'SunIcon', component: SunIcon },
  { slug: 'i-sunset', name: 'SunsetIcon', component: SunsetIcon },
  { slug: 'i-moon', name: 'MoonIcon', component: MoonIcon },
  { slug: 'i-dots', name: 'DotsIcon', component: DotsIcon },
  { slug: 'i-globe', name: 'GlobeIcon', component: GlobeIcon },
  { slug: 'i-help', name: 'HelpIcon', component: HelpIcon },
  { slug: 'i-logout', name: 'LogoutIcon', component: LogoutIcon },
  { slug: 'i-branch', name: 'BranchIcon', component: BranchIcon },
  { slug: 'i-camera', name: 'CameraIcon', component: CameraIcon },
  { slug: 'i-image', name: 'ImageIcon', component: ImageIcon },
  { slug: 'i-video', name: 'VideoIcon', component: VideoIcon },
  { slug: 'i-file', name: 'FileIcon', component: FileIcon },
  { slug: 'i-upload', name: 'UploadIcon', component: UploadIcon },
  { slug: 'i-plus', name: 'PlusIcon', component: PlusIcon },
  { slug: 'i-minus', name: 'MinusIcon', component: MinusIcon },
  { slug: 'i-trash', name: 'TrashIcon', component: TrashIcon },
  { slug: 'i-search', name: 'SearchIcon', component: SearchIcon },
  { slug: 'i-play', name: 'PlayIcon', component: PlayIcon },
  { slug: 'i-info-menu', name: 'InfoMenuIcon', component: InfoMenuIcon },
  { slug: 'i-flash', name: 'FlashIcon', component: FlashIcon },
  { slug: 'i-flip', name: 'FlipIcon', component: FlipIcon },
  { slug: 'i-calendar-check', name: 'CalendarCheckIcon', component: CalendarCheckIcon },
  { slug: 'i-cd', name: 'CdIcon', component: CdIcon },
  { slug: 'i-refresh', name: 'RefreshIcon', component: RefreshIcon },
  { slug: 'i-star', name: 'StarIcon', component: StarIcon },
  { slug: 'i-eye', name: 'EyeIcon', component: EyeIcon },
  { slug: 'i-download', name: 'DownloadIcon', component: DownloadIcon },
  { slug: 'i-tag', name: 'TagIcon', component: TagIcon },
  { slug: 'i-flask', name: 'FlaskIcon', component: FlaskIcon },
  { slug: 'i-hourglass', name: 'HourglassIcon', component: HourglassIcon },
];
