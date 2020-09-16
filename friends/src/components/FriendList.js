import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import Friend from './Friend'
import PostFriend from './PostFriend'


import {axiosWithAuth} from '../utils/axiosWithAuth'

const Styled = styled.div`
    background-image: url('https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-size:cover;
    .friend {
        display:flex;
        flex-wrap:wrap;
        justify-content: space-evenly;
    }
`

const FriendList = () => {
    const [friends,setFriends] = useState([])
  

    useEffect(() =>{
        getData()
    })

    const getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <Styled>
            <h2>Friend List</h2>
            <div className="friend">
            {
                friends.map(friend => {
                    return <Friend key={friend.id} friend={friend}/>
                })
             }
            </div>
            <div className="inputs">
                <PostFriend setFriends={setFriends}/>
            </div>
        </Styled>


    )
}

export default FriendList