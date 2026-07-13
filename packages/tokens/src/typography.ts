// AUTO-GENERATED from design-tokens.json — do not edit by hand.
export const typography = {
  "size": {
    "xs": 10,
    "sm": 12,
    "md": 14,
    "lg": 18,
    "xl": 24,
    "xxl": 32
  },
  "weight": {
    "regular": "400",
    "medium": "500",
    "semibold": "600",
    "bold": "700"
  },
  "lineHeight": {
    "tight": 1.2,
    "normal": 1.4,
    "relaxed": 1.6
  },
  "role": {
    "headline": {
      "fontSize": 26,
      "lineHeight": 32,
      "fontWeight": "700",
      "letterSpacing": -0.52
    },
    "title": {
      "fontSize": 22,
      "lineHeight": 28,
      "fontWeight": "700",
      "letterSpacing": -0.22
    },
    "section": {
      "fontSize": 15,
      "lineHeight": 20,
      "fontWeight": "700",
      "letterSpacing": -0.15
    },
    "subtitle": {
      "fontSize": 15,
      "lineHeight": 20,
      "fontWeight": "600"
    },
    "body": {
      "fontSize": 14,
      "lineHeight": 20,
      "fontWeight": "500"
    },
    "label": {
      "fontSize": 13,
      "lineHeight": 16,
      "fontWeight": "400"
    },
    "caption": {
      "fontSize": 12,
      "lineHeight": 16,
      "fontWeight": "500",
      "letterSpacing": 0.72
    },
    "tab": {
      "fontSize": 11,
      "lineHeight": 14,
      "fontWeight": "500"
    },
    "eyebrow": {
      "fontSize": 10,
      "lineHeight": 14,
      "fontWeight": "600",
      "letterSpacing": 0.8,
      "textTransform": "uppercase"
    },
    "cta": {
      "fontSize": 15,
      "lineHeight": 18,
      "fontWeight": "700"
    }
  }
} as const;
export type TypographyToken = keyof typeof typography;
