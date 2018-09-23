import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MAX_SCREEN_SIZE } from '../configs/styles'
import { getStyleBoxShadow } from '../utils/styles'

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  ${getStyleBoxShadow(0, 0, 10, 0, 'rgba(0, 0, 0, 0.25)')};
  z-index: 1;
  background: white;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: #979797;
  max-width: ${MAX_SCREEN_SIZE}px;
  margin: auto;
  padding: 20px;
`

const StyledLink = styled(Link)`
  &:focus,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: underline;
  }
`

const MenuItem = styled.div`
  margin: 0 20px;
`

const MENU_CONFIGS = [
  {
    title: 'CSS STYLING',
    path: '/',
  },
  {
    title: 'TEMPLATE AND STYLING',
    path: '/template',
  },
]

const NavigationBar = () => (
  <Wrapper>
    <Container>
      {MENU_CONFIGS.map(menu => (
        <MenuItem key={`navbar-menu-${menu.path}`}>
          <StyledLink to={menu.path}>{menu.title}</StyledLink>
        </MenuItem>
      ))}
    </Container>
  </Wrapper>
)

export default NavigationBar
