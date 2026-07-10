import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const Check = (props: SvgProps) => <Svg viewBox="0 0 24 24" fill="none" stroke={props.color ?? "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={props.width ?? 24} height={props.height ?? 24} {...props}><Path d="M20 6L9 17l-5-5" /></Svg>;
export default Check;