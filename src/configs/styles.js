import { css } from 'styled-components'

export const MAX_SCREEN_SIZE = 1024

export const STYLE_FLEX_CENTER = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
const DEFAULT_SPACE = 8
export const SPACING = {
  XS: DEFAULT_SPACE,
  SM: DEFAULT_SPACE * 2,
  MD: DEFAULT_SPACE * 3,
  LG: DEFAULT_SPACE * 4,
}
