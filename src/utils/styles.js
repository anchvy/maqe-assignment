import { css } from 'styled-components'

/**
 * Get box shadow css style
 *
 * @param {number} horizontalOffset
 * @param {number} verticalOffset
 * @param {number} blurRadius
 * @param {number} spreadRadius
 * @param {string} color
 * @param {boolean} [isInnerShadow = false]
 * @return {array}
 */
export const getStyleBoxShadow = (
  horizontalOffset,
  verticalOffset,
  blurRadius,
  spreadRadius,
  color,
  isInnerShadow = false
) =>
  ['-webkit-box-shadow', '-moz-box-shadow', 'box-shadow'].map(
    type =>
      css`
        ${type}: ${isInnerShadow ? 'inset' : ''} ${horizontalOffset}px ${verticalOffset}px
          ${blurRadius}px ${spreadRadius}px ${color};
      `
  )
