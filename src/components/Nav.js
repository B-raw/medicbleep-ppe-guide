import React from 'react';
import medic_bleep_logo from '../assets/medic_bleep_logo.png'
import styled from 'styled-components';
import RoundedButton from './RoundedButton';

const Nav = () => {

  return (
    <NavStyles>
      <img src={medic_bleep_logo} alt="medic bleep logo" />
      <ul>
        <li>
          About
        </li>
        <li>
          FAQ
        </li>
        <RoundedButton text="Contact Us"/>
      </ul>
    </NavStyles>
  )

}

const NavStyles = styled.div`
  display: flex;
  }
  li {
     list-style-type: none;
  }
  img {
    height:80px
  }
`

export default Nav;
