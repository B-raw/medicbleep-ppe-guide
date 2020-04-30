import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors'

const RoundedButton = ({text}) => {
  return (
    <RoundedButtonStyles>{text}</RoundedButtonStyles>
  )
}

const RoundedButtonStyles = styled.button`
  background-color: ${colors.green};
  color: white;
  ${'' /* font-size: 1rem; */}
  padding: 0.5rem 2rem;
  display: flex;
  border-radius: 12px;
`

export default RoundedButton
