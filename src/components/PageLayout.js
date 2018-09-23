import React from 'react'
import styled from 'styled-components'
import NavigationBar from './NavigationBar'
import { MAX_SCREEN_SIZE } from '../configs/styles'

const Wrapper = styled.div``

const Container = styled.div`
  padding-top: 60px;
  max-width: ${MAX_SCREEN_SIZE}px;
  margin: auto;
`

class PageLayout extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavigationBar />
        <Container>{this.props.children}</Container>
      </Wrapper>
    )
  }
}

export default PageLayout
