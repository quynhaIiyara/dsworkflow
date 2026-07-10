import{j as p}from"./jsx-runtime-CB_V9I5Y.js";import{T as fe,c as ce,P as ge,e as be,S as me,u as he}from"./index-U7idSPGL.js";import"./index-CTjT7uj6.js";import"./iframe-D2L8uNp9.js";import"./index-Cywu29Xx.js";import"./index-DU-ZXHJ-.js";import"./index-Bhqu_tAV.js";var ye=Object.defineProperty,o=(e,t)=>ye(e,"name",{value:t,configurable:!0});function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},v.apply(null,arguments)}o(v,"_extends");function K(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o(K,"_assertThisInitialized");function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,r){return a.__proto__=r,a},F(e,t)}o(F,"_setPrototypeOf");function Q(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,F(e,t)}o(Q,"_inheritsLoose");function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(e)}o(E,"_getPrototypeOf");function W(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}o(W,"_isNativeFunction");function $(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($=o(function(){return!!e},"_isNativeReflectConstruct"))()}o($,"_isNativeReflectConstruct");function X(e,t,a){if($())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var n=new(e.bind.apply(e,r));return a&&F(n,a.prototype),n}o(X,"_construct");function P(e){var t=typeof Map=="function"?new Map:void 0;return P=o(function(a){if(a===null||!W(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(a))return t.get(a);t.set(a,r)}function r(){return X(a,arguments,E(this).constructor)}return o(r,"Wrapper"),r.prototype=Object.create(a.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),F(r,a)},"_wrapNativeSuper"),P(e)}o(P,"_wrapNativeSuper");var ve={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function Z(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=t[0],n=[],s;for(s=1;s<t.length;s+=1)n.push(t[s]);return n.forEach(function(i){r=r.replace(/%[a-z]/,i)}),r}o(Z,"format");var c=function(e){Q(t,e);function t(a){for(var r,n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return r=e.call(this,Z.apply(void 0,[ve[a]].concat(s)))||this,K(r)}return o(t,"PolishedError"),t}(P(Error));function k(e){return Math.round(e*255)}o(k,"colorToInt");function ee(e,t,a){return k(e)+","+k(t)+","+k(a)}o(ee,"convertToInt");function x(e,t,a,r){if(r===void 0&&(r=ee),t===0)return r(a,a,a);var n=(e%360+360)%360/60,s=(1-Math.abs(2*a-1))*t,i=s*(1-Math.abs(n%2-1)),u=0,d=0,f=0;n>=0&&n<1?(u=s,d=i):n>=1&&n<2?(u=i,d=s):n>=2&&n<3?(d=s,f=i):n>=3&&n<4?(d=i,f=s):n>=4&&n<5?(u=i,f=s):n>=5&&n<6&&(u=s,f=i);var m=a-s/2,h=u+m,g=d+m,M=f+m;return r(h,g,M)}o(x,"hslToRgb");var G={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function te(e){if(typeof e!="string")return e;var t=e.toLowerCase();return G[t]?"#"+G[t]:e}o(te,"nameToHex");var Fe=/^#[a-fA-F0-9]{6}$/,xe=/^#[a-fA-F0-9]{8}$/,Ce=/^#[a-fA-F0-9]{3}$/,Se=/^#[a-fA-F0-9]{4}$/,O=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,we=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,ke=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Be=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function T(e){if(typeof e!="string")throw new c(3);var t=te(e);if(t.match(Fe))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(xe)){var a=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:a}}if(t.match(Ce))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(Se)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var n=O.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var s=we.exec(t.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var i=ke.exec(t);if(i){var u=parseInt(""+i[1],10),d=parseInt(""+i[2],10)/100,f=parseInt(""+i[3],10)/100,m="rgb("+x(u,d,f)+")",h=O.exec(m);if(!h)throw new c(4,t,m);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var g=Be.exec(t.substring(0,50));if(g){var M=parseInt(""+g[1],10),de=parseInt(""+g[2],10)/100,pe=parseInt(""+g[3],10)/100,U="rgb("+x(M,de,pe)+")",w=O.exec(U);if(!w)throw new c(4,t,U);return{red:parseInt(""+w[1],10),green:parseInt(""+w[2],10),blue:parseInt(""+w[3],10),alpha:parseFloat(""+g[4])>1?parseFloat(""+g[4])/100:parseFloat(""+g[4])}}throw new c(5)}o(T,"parseToRgb");function ae(e){var t=e.red/255,a=e.green/255,r=e.blue/255,n=Math.max(t,a,r),s=Math.min(t,a,r),i=(n+s)/2;if(n===s)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var u,d=n-s,f=i>.5?d/(2-n-s):d/(n+s);switch(n){case t:u=(a-r)/d+(a<r?6:0);break;case a:u=(r-t)/d+2;break;default:u=(t-a)/d+4;break}return u*=60,e.alpha!==void 0?{hue:u,saturation:f,lightness:i,alpha:e.alpha}:{hue:u,saturation:f,lightness:i}}o(ae,"rgbToHsl");function q(e){return ae(T(e))}o(q,"parseToHsl");var Ee=o(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),H=Ee;function b(e){var t=e.toString(16);return t.length===1?"0"+t:t}o(b,"numberToHex");function B(e){return b(Math.round(e*255))}o(B,"colorToHex");function re(e,t,a){return H("#"+B(e)+B(t)+B(a))}o(re,"convertToHex");function C(e,t,a){return x(e,t,a,re)}o(C,"hslToHex");function oe(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return C(e,t,a);if(typeof e=="object"&&t===void 0&&a===void 0)return C(e.hue,e.saturation,e.lightness);throw new c(1)}o(oe,"hsl");function ne(e,t,a,r){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof r=="number")return r>=1?C(e,t,a):"rgba("+x(e,t,a)+","+r+")";if(typeof e=="object"&&t===void 0&&a===void 0&&r===void 0)return e.alpha>=1?C(e.hue,e.saturation,e.lightness):"rgba("+x(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new c(2)}o(ne,"hsla");function I(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return H("#"+b(e)+b(t)+b(a));if(typeof e=="object"&&t===void 0&&a===void 0)return H("#"+b(e.red)+b(e.green)+b(e.blue));throw new c(6)}o(I,"rgb");function S(e,t,a,r){if(typeof e=="string"&&typeof t=="number"){var n=T(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof r=="number")return r>=1?I(e,t,a):"rgba("+e+","+t+","+a+","+r+")";if(typeof e=="object"&&t===void 0&&a===void 0&&r===void 0)return e.alpha>=1?I(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new c(7)}o(S,"rgba");var Pe=o(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),Ie=o(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),je=o(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),Te=o(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function N(e){if(typeof e!="object")throw new c(8);if(Ie(e))return S(e);if(Pe(e))return I(e);if(Te(e))return ne(e);if(je(e))return oe(e);throw new c(8)}o(N,"toColorString");function L(e,t,a){return o(function(){var r=a.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):L(e,t,r)},"fn")}o(L,"curried");function A(e){return L(e,e.length,[])}o(A,"curry");function R(e,t,a){return Math.max(e,Math.min(t,a))}o(R,"guard");function se(e,t){if(t==="transparent")return t;var a=q(t);return N(v({},a,{lightness:R(0,1,a.lightness-parseFloat(e))}))}o(se,"darken");var Ae=A(se),Re=Ae;function ie(e,t){if(t==="transparent")return t;var a=q(t);return N(v({},a,{lightness:R(0,1,a.lightness+parseFloat(e))}))}o(ie,"lighten");var Me=A(ie),Oe=Me;function le(e,t){if(t==="transparent")return t;var a=T(t),r=typeof a.alpha=="number"?a.alpha:1,n=v({},a,{alpha:R(0,1,+(r*100-parseFloat(e)*100).toFixed(2)/100)});return S(n)}o(le,"transparentize");var _e=A(le),ze=_e,l={secondary:"#029CFD",lightest:"#FFFFFF",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)"},Y={app:"#F6F9FC",hoverable:ze(.9,l.secondary)},j={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")}},De={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:l.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:j.fonts.base,fontCode:j.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:l.lightest,inputBorderRadius:4},He=De,$e={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:Y.app,appContentBg:l.lightest,appPreviewBg:l.lightest,appBorderColor:l.border,appBorderRadius:4,fontBase:j.fonts.base,fontCode:j.fonts.mono,textColor:l.darkest,textInverseColor:l.lightest,textMutedColor:l.dark,barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:l.lightest,buttonBg:Y.app,buttonBorder:l.medium,booleanBg:l.mediumlight,booleanSelectedBg:l.lightest,inputBg:l.lightest,inputBorder:l.border,inputTextColor:l.darkest,inputBorderRadius:4},V=$e,qe=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})();const{logger:Ne}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{window:_}=qe,Le=o(e=>typeof e!="string"?(Ne.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,"isColorString"),Ue=o(e=>!/(gradient|var|calc)/.test(e),"isValidColorForPolished"),Ge=o((e,t)=>e==="darken"?S(`${Re(1,t)}`,.95):e==="lighten"?S(`${Oe(1,t)}`,.95):t,"applyPolished"),ue=o(e=>t=>{if(!Le(t)||!Ue(t))return t;try{return Ge(e,t)}catch{return t}},"colorFactory");ue("lighten");ue("darken");var Ye=o(()=>!_||!_.matchMedia?"light":_.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getPreferredColorScheme"),z={light:V,dark:He,normal:V},D=Ye(),Ve=o((e={base:D},t)=>{let a={...z[D],...z[e.base]||{},...e,base:z[e.base]?e.base:D};return{...t,...a,barSelectedColor:e.barSelectedColor||a.colorSecondary}},"create");const Je=Ve({base:"light",brandTitle:"Design System  |  quynhaliyara/rn-ds",brandUrl:"/",brandTarget:"_self",fontBase:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',fontCode:'"JetBrains Mono", "SF Mono", Menlo, Consolas, monospace',colorPrimary:"#5FA82D",colorSecondary:"#5FA82D",appBg:"#FFFFFF",appContentBg:"#FFFFFF",appPreviewBg:"#F7F7FA",appBorderColor:"#EEEEF2",appBorderRadius:6,textColor:"#1A1A22",textInverseColor:"#FFFFFF",textMutedColor:"#8A8A96",barTextColor:"#8A8A96",barHoverColor:"#1A1A22",barSelectedColor:"#5FA82D",barBg:"#FFFFFF",inputBg:"#F7F7FA",inputBorder:"#EEEEF2",inputTextColor:"#1A1A22",inputBorderRadius:6,booleanBg:"#EEEEF2",booleanSelectedBg:"#5FA82D"}),J={display:"inline-block",padding:"2px 10px",borderRadius:999,fontSize:12,fontWeight:600,letterSpacing:.2,marginLeft:8,verticalAlign:"middle",border:"1px solid transparent"},y={ready:{bg:"#E5F7EE",fg:"#1E7C4A",bd:"#B8E5C9"},beta:{bg:"#FCF1DC",fg:"#8A6100",bd:"#E8CE94"},deprecated:{bg:"#FCE9E8",fg:"#A32020",bd:"#F0BCB9"},draft:{bg:"#EEEEF2",fg:"#8A8A96",bd:"#DDDDE4"}};function Ke(){var n;const e=he("meta",["meta"]),t=(n=e==null?void 0:e.preparedMeta)==null?void 0:n.parameters,a=t==null?void 0:t.status,r=t==null?void 0:t.since;return!a&&!r?null:p.jsxs("div",{style:{marginTop:-12,marginBottom:16},children:[a?p.jsx("span",{style:{...J,marginLeft:0,marginRight:8,background:(y[a]??y.draft).bg,color:(y[a]??y.draft).fg,borderColor:(y[a]??y.draft).bd},children:a}):null,r?p.jsxs("span",{style:{...J,marginLeft:0,background:"#F7F7FA",color:"#8A8A96",borderColor:"#EEEEF2"},children:["since ",r]}):null]})}function Qe(){return p.jsxs(p.Fragment,{children:[p.jsx(fe,{}),p.jsx(Ke,{}),p.jsx(ce,{}),p.jsx(ge,{}),p.jsx(be,{}),p.jsx(me,{})]})}const ot={tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"light",values:[{name:"light",value:"#FFFFFF"},{name:"surface",value:"#F7F7FA"},{name:"dark",value:"#1A1A22"}]},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i},expanded:!0},docs:{theme:Je,page:Qe,toc:{title:"On this page",headingSelector:"h2, h3"}},options:{storySort:{order:["Get Started",["Introduction","Installation","Agent access (MCP)","Versioning","Changelog"],"Foundations",["Colour","Spacing","Radius","Typography"],"Components",["Button","Status"]]}}},decorators:[e=>p.jsx("div",{style:{fontFamily:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},children:p.jsx(e,{})})]};export{ot as default};
