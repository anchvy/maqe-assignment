import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { STYLE_FLEX_CENTER, SPACING } from '../configs/styles'
import { getNumber } from '../utils/number'

const Wrapper = styled.div``
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
`

const ItemNumberBox = styled.div`
  width: 30px;
  height: 30px;
`

const ItemNumber = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 ${SPACING.XS / 2}px;
  font-size: 14px;
  cursor: pointer;

  ${STYLE_FLEX_CENTER};

  ${props =>
    props.active
      ? css`
          border-radius: 50%;
          background: #b61616;
          color: white;
        `
      : ''};
`

const ItemText = styled.div`
  height: 30px;
  font-size: 14px;
  cursor: pointer;
  margin: 0 ${SPACING.SM}px;

  ${STYLE_FLEX_CENTER};
`

class Pagination extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      activePage: 1,
    }

    this.onClickPageItem = this.onClickPageItem.bind(this)
    this.onClickNextItem = this.onClickNextItem.bind(this)
    this.onClickPreviousItem = this.onClickPreviousItem.bind(this)
  }

  onClickNextItem() {
    this.setState(prevState => ({
      activePage: prevState.activePage + 1,
    }))
  }

  onClickPreviousItem() {
    this.setState(prevState => ({
      activePage: prevState.activePage - 1,
    }))
  }

  onClickPageItem(event) {
    const { currentTarget } = event
    const page = parseInt(currentTarget.getAttribute('data-page'), 10)

    this.setState({
      activePage: page,
    })
  }

  validatePageNumber() {
    let startPage = getNumber(this.props.start, true)
    let endPage = getNumber(this.props.end, true)

    if (startPage <= 0 || endPage <= 0) {
      startPage = 0
      endPage = 0
    } else if (startPage > endPage) {
      startPage = endPage
    }

    return { startPage, endPage }
  }

  render() {
    const { activePage } = this.state
    const { startPage, endPage } = this.validatePageNumber()

    if (startPage === 0 || endPage === 0) return null

    const ItemNumberComponents = []
    for (let page = startPage; page <= endPage; page += 1) {
      ItemNumberComponents.push(
        <ItemNumberBox
          key={`pagination-page-${page}`}
          data-page={page}
          onClick={this.onClickPageItem}
        >
          <ItemNumber active={activePage === page}>{page}</ItemNumber>
        </ItemNumberBox>
      )
    }

    return (
      <Wrapper>
        <Container>
          {activePage !== startPage && (
            <ItemText onClick={this.onClickPreviousItem}>Previous</ItemText>
          )}
          {ItemNumberComponents}
          {activePage !== endPage && <ItemText onClick={this.onClickNextItem}>Next</ItemText>}
        </Container>
      </Wrapper>
    )
  }
}

Pagination.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
}

Pagination.defaultProps = {
  start: 0,
  end: 0,
}

export default Pagination
