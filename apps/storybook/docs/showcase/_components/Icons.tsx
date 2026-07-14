// Aliases the composite demos have historically imported. The real pack lives
// in ./icons/pack — 54 stroke-based icons extracted from the FieldForce design
// prototypes. Everything below is a thin re-export so composites stay legible
// (`<PinIcon />` reads better than `<MapPinIcon />` at the call site).
export {
  MapPinIcon as PinIcon,
  CalendarIcon,
  ClockIcon,
  LeafIcon,
  PhoneIcon,
  MessageIcon,
  AlertIcon,
  CheckIcon,
  XIcon,
  CrIcon as ChevronRight,
  CdIcon as ChevronDown,
  PackageIcon,
  TicketIcon,
  StarIcon,
  NavigateIcon,
  PlayIcon,
  DotsIcon as MenuIcon,
} from './icons/pack';
