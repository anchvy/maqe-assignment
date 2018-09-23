import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ItemBox, { Wrapper as TemplateWrapper } from './ItemBox'
import { EMPTY_FUNCTION, EMPTY_ARRAY } from '../utils/constant'
import { SPACING } from '../configs/styles'
import Pagination from './Pagination'

const Wrapper = styled.div`
  padding: 20px;
`

const Container = styled.div``
const ItemListWrapper = styled.div``
const ItemWrapper = styled.div`
  margin-bottom: ${SPACING.SM}px;

  &:nth-child(even) > ${TemplateWrapper} {
    background: #f2f2f2;
  }
`

const Title = styled.div`
  margin-bottom: ${SPACING.SM}px;
`
const HeaderTitle = styled(Title)`
  font-weight: bold;
  font-size: 22px;
`
const SubHeaderTitle = styled(Title)`
  font-size: 20px;
`

const PaginationWrapper = styled.div`
  margin: ${SPACING.MD}px 0;
`

class PageTemplate extends React.Component {
  componentDidMount() {
    const { fetchPostList, list } = this.props
    if (list.length === 0) fetchPostList()
  }

  render() {
    const { list } = this.props
    const itemBoxComponents = list.map(item => (
      <ItemWrapper key={`item-${item.id}`}>
        <ItemBox info={item} />
      </ItemWrapper>
    ))

    return (
      <Wrapper>
        <Container>
          <HeaderTitle>MAQE Forums</HeaderTitle>
          <SubHeaderTitle>Subtitle</SubHeaderTitle>
          <Title>Posts</Title>
          <ItemListWrapper>{itemBoxComponents}</ItemListWrapper>
          <PaginationWrapper>
            <Pagination start={1} end={10} />
          </PaginationWrapper>
        </Container>
      </Wrapper>
    )
  }
}

PageTemplate.propTypes = {
  list: PropTypes.array,
  fetchPostList: PropTypes.func,
}

PageTemplate.defaultProps = {
  list: EMPTY_ARRAY,
  fetchPostList: EMPTY_FUNCTION,
}

export default PageTemplate
