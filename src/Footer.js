import React from 'react'
import styled from 'styled-components/macro'

export default function Footer() {
  let date = new Date()
  return (
    <FooterStyled>
      <DateStyled>Stand: {date.toLocaleDateString('de-DE')}</DateStyled>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  background-color: #077b8a;
  color: #f5f0e1;
  display: flex;
  align-items: end;
`
const DateStyled = styled.p`
  font-size: 0.85em;
  margin-left: 16px;
  margin-bottom: 4px;
`
