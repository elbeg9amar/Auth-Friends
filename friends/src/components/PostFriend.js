import React, { useState } from 'react'

import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialFried = {
    id: 1,
    name: '',
    age: '' ,
    email: ''
}
const PostFriend = (setFriends) => {
    const [addFriend, setAddFriend] = useState(initialFried)

    const handleChanges = e => {
        setAddFriend({...addFriend,[e.target.name]:e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        const newFriend = {
            name: addFriend.name.trim(),
            age: addFriend.age,
            email: addFriend.email.trim(),
            id: addFriend.id +1
        }
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setAddFriend(initialFried)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                type="text"
                name="name"
                value={addFriend.name}
                onChange={handleChanges}
                />
                <input
                type="number"
                name="age"
                value={addFriend.age}
                onChange={handleChanges}
                />
                 <input
                type="text"
                name="email"
                value={addFriend.email}
                onChange={handleChanges}
                />
                <button>Add Friend</button>
        </form>

        </div>
    )
}

export default PostFriend