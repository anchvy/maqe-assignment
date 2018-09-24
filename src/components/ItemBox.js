import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { SPACING } from '../configs/styles'
import ICON_PIN from '../statics/icon_pin.png'
import ICON_CLOCK from '../statics/icon_clock.png'
import DEFAULT_IMAGE from '../statics/image_default.png'

const DEFAULT_FONT_SIZE = 14
const DEFAULT_BORDER_COLOR = '#d9d9d9'

const DefaultContentBox = styled.div`
  margin-bottom: ${SPACING.SM}px;
  font-size: ${DEFAULT_FONT_SIZE}px;
`

export const Wrapper = styled.div`
  padding: ${SPACING.SM}px;
  background: white;
  border: 1px solid ${DEFAULT_BORDER_COLOR};
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  word-break: break-word;
`
const PostImageBox = styled.div`
  width: 15%;
  margin-right: ${SPACING.SM}px;
`
const PostImage = styled.img`
  width: 100%;
`
const ContentWrapper = styled.div`
  width: 70%;
  margin-right: ${SPACING.SM}px;
`

const Title = styled(DefaultContentBox)`
  font-size: 16px;
  font-weight: bold;
`
const Description = styled(DefaultContentBox)`
  color: #585858;
  line-height: 1.5;
`

const CreatedAtBox = styled(DefaultContentBox)`
  display: flex;
  flex-direction: row;
  font-size: 12px;
`
const CreatedAtImage = styled.img`
  width: 13px;
  height: 13px;
  margin-right: ${SPACING.XS / 2}px;
`
const CreatedAt = styled.div`
  font-style: italic;
  color: #bdbdbd;
`

const AuthorWrapper = styled.div`
  border-left: 1px solid ${DEFAULT_BORDER_COLOR};
  text-align: center;
  width: 15%;
`
const AuthorBox = styled.div``
const AuthorImageBox = styled(DefaultContentBox)``
const AuthorImage = styled.img`
  border-radius: 50%;
  width: 50%;
`

const AuthorName = styled(DefaultContentBox)`
  color: #b61616;
`
const AuthorRole = styled(DefaultContentBox)``
const AuthorPlaceBox = styled(DefaultContentBox)`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  justify-content: center;
`
const AuthorPlaceImage = styled.img`
  width: 12px;
  height: 12px;
  margin-right: ${SPACING.XS / 2}px;
`
const AuthorPlace = styled.div``

class ItemBox extends React.Component {
  render() {
    const { info } = this.props
    const { body, timeSince, image_url: imageUrl, title, author } = info
    const { avatar_url: avatarUrl, name, place, role } = author

    return (
      <Wrapper>
        <Container>
          <PostImageBox>
            <PostImage src={imageUrl} />
          </PostImageBox>
          <ContentWrapper>
            <Title>{title}</Title>
            <Description>{body}</Description>
            <CreatedAtBox>
              <CreatedAtImage src={ICON_CLOCK} />
              <CreatedAt>{timeSince}</CreatedAt>
            </CreatedAtBox>
          </ContentWrapper>
          <AuthorWrapper>
            <AuthorBox>
              <AuthorImageBox>
                <AuthorImage src={avatarUrl} />
              </AuthorImageBox>
              <AuthorName>{name}</AuthorName>
              <AuthorRole>{role}</AuthorRole>
              <AuthorPlaceBox>
                <AuthorPlaceImage src={ICON_PIN} />
                <AuthorPlace>{place}</AuthorPlace>
              </AuthorPlaceBox>
            </AuthorBox>
          </AuthorWrapper>
        </Container>
      </Wrapper>
    )
  }
}

ItemBox.propTypes = {
  info: PropTypes.shape({
    body: PropTypes.string,
    timeSince: PropTypes.string,
    image_url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.shape({
      avatar_url: PropTypes.string,
      name: PropTypes.string,
      place: PropTypes.string,
      role: PropTypes.string,
    }),
  }),
}

ItemBox.defaultProps = {
  info: {
    body: '',
    timeSince: '',
    image_url: DEFAULT_IMAGE,
    title: '',
    author: {
      avatar_url: DEFAULT_IMAGE,
      name: '',
      place: '',
      role: '',
    },
  },
}

export default ItemBox
