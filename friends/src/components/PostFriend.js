import React, { useState } from 'react'

import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialFriend = {
    id: 6,
    name: '',
    age: '' ,
    email: ''
}
const PostFriend = (setFriends) => {
    const [addFriend, setAddFriend] = useState(initialFriend)

    const handleChanges = e => {
        setAddFriend({...addFriend,[e.target.name]:e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        const newFriend = {
            name: addFriend.name.trim(),
            age: addFriend.age,
            email: addFriend.email.trim(),
            id: addFriend.id + 1
        }
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .catch(err => {
                console.log(err)
            })
        setAddFriend(initialFriend)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                Name:&nbsp;
                <input 
                type="text"
                name="name"
                value={addFriend.name}
                onChange={handleChanges}
                />
                Age:&nbsp;
                <input
                type="number"
                name="age"
                value={addFriend.age}
                onChange={handleChanges}
                />
                Email:&nbsp;
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