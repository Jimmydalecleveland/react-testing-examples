import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  background-color: hotpink;
  color: white;
`

// 3 different ways to use Emotion CSS-in-JS
const EmotionComponent = () => {
  return (
    <div>
      <p css={{color: 'hotpink'}} />
      <p css={css`
        color: 'hotpink';
      `}
      />
      <StyledButton>Some Text</StyledButton>
    </div>
  )
}

export default EmotionComponent
