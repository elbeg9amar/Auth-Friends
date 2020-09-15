import React, {useState, useEffect} from 'react'

import Friend from './Friend'
import PostFriend from './PostFriend'

import {axiosWithAuth} from '../utils/axiosWithAuth'

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
        <div>
        {
            friends.map(friend => {
                return <Friend friend={friend}/>
            })
        }

        <PostFriend setFriends={setFriends}/>

        </div>
    )
}

export default FriendList