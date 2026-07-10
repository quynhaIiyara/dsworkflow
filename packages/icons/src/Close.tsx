import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const Close = (props: SvgProps) => <Svg viewBox="0 0 24 24" fill="none" stroke={props.color ?? "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={props.width ?? 24} height={props.height ?? 24} {...props}><Path d="M18 6L6 18M6 6l12 12" /></Svg>;
export default Close;