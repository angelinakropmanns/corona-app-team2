import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'


export default function Header() {
  return (
    <>
      <HeaderStyled>
        <LinkStyled className="nav" activeClassName="selected" exact to="/">
          Home
        </LinkStyled>
        <LinkStyled className="nav" activeClassName="selected" to="/totalcases">
          Total Cases
        </LinkStyled>
        <LinkStyled className="nav" activeClassName="selected" to="/recovered">
          Recovered
        </LinkStyled>
        <LinkStyled className="nav" activeClassName="selected" to="/bycountry">
          By Country
        </LinkStyled>
      </HeaderStyled>
    </>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  background: #077b8a;
  color: #f5f0e1;
  text-align: center;
  justify-content: space-around;
`
const LinkStyled = styled(NavLink)`
  display: flex;
  border-style: none;
  padding: 10px;
  background-color: #077b8a;
  height: 48px;
  color: #f5f0e1;
  font-size: 0.9em;
  text-decoration: underline;
  align-items: center;

  &.selected {
    background: goldenrod;
    height: 32px;
    align-self: center;
  }
`
