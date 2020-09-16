import React from 'react'

import  styled from 'styled-components'

const Styled = styled.div`
    width:25%;
    border-style:dashed;
    display:flex;
    flex-direction: column;
    margin-bottom:3%;
    background-color: black;
    color:white;
    
`

const Friend = ({friend}) => {
    
    return (
    <Styled>
        <p>Name : {friend.name}</p>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
    </Styled>
    )
}

export default Friend