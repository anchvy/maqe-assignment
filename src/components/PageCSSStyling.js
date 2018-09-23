import React from 'react'
import styled from 'styled-components'
import { MAX_SCREEN_SIZE, STYLE_FLEX_CENTER } from '../configs/styles'
import { getStyleBoxShadow } from '../utils/styles'

const MAIN_COLOR = '#66c3e9'
const ALPHABET_BOX_BACKGROUND_COLOR = '#f7f7f7'

const Wrapper = styled.div`
  padding: 20px;
`

const Container = styled.div`
  height: ${MAX_SCREEN_SIZE}px;
  border-radius: 30px;
  background: white;
  border: 12px solid ${MAIN_COLOR};
  padding: 12px;

  ${getStyleBoxShadow(15, 14, 38, -14, 'rgba(0, 0, 0, 0.41)')};
`

const ContentBox = styled.div`
  background-image: linear-gradient(${MAIN_COLOR}, #9dd5d1);
  border-radius: 12px;
  height: 100%;
  position: relative;
  ${STYLE_FLEX_CENTER};
`

const BackgroundBox = styled.div`
  background: white;
  width: 50%;
  height: 50%;
  opacity: 0.2;
`

const ItemWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  ${STYLE_FLEX_CENTER};
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  height: 90%;
`

const ItemBox = styled.div`
  width: 50%;
  height: 50%;
  ${STYLE_FLEX_CENTER};
`

const AlphabetBox = styled.div`
  width: 80%;
  height: 80%;
  background: ${ALPHABET_BOX_BACKGROUND_COLOR};
  border: 0.1px solid ${ALPHABET_BOX_BACKGROUND_COLOR};
  border-radius: 5px;

  color: ${MAIN_COLOR};
  font-size: 15vw;
  text-shadow: -2px 2px 0px rgba(150, 150, 150, 1);

  ${getStyleBoxShadow(16, 6, 70, -15, 'rgba(0, 0, 0, 0.75)', true)} ${STYLE_FLEX_CENTER};
`

const PageCSSStyling = () => (
  <Wrapper>
    <Container>
      <ContentBox>
        <BackgroundBox />
        <ItemWrapper>
          <ItemContainer>
            <ItemBox>
              <AlphabetBox>M</AlphabetBox>
            </ItemBox>
            <ItemBox>
              <AlphabetBox>A</AlphabetBox>
            </ItemBox>
            <ItemBox>
              <AlphabetBox>Q</AlphabetBox>
            </ItemBox>
            <ItemBox>
              <AlphabetBox>E</AlphabetBox>
            </ItemBox>
          </ItemContainer>
        </ItemWrapper>
      </ContentBox>
    </Container>
  </Wrapper>
)

export default PageCSSStyling
