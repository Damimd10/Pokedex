interface ColorRange {
  dark?: string
  light?: string
  primary?: string
}

interface PaletteColor {
  black: ColorRange
  blue: ColorRange
  brown: ColorRange
  gray: ColorRange
  green: ColorRange
  pink: ColorRange
  purple: ColorRange
  red: ColorRange
  white: ColorRange
  yellow: ColorRange
}

export { ColorRange, PaletteColor }
