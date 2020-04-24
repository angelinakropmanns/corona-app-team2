import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Headline.propTypes = {
children:PropTypes.node,
}


export default function Headline({children}) {

    
    return (
    <HeadlineStyled>{children}</HeadlineStyled>
    )
   }


const HeadlineStyled = styled.h2`
margin-bottom: 12px;
`