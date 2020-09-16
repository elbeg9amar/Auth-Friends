import React, { useState } from 'react'
import  styled from 'styled-components'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Styled = styled.div `
   form {
        max-width:350px;
        border-radius:20px;
        margin:auto;
        background: rgba(0,0,0,0.8);
        box-sizing:border-box;
        padding:40px;
        color: #fff;
        margin-top:100px;
        h1{
            text-align:center;
        }
       
        input{
            width:100%;
            box-sizing: border-box;
            padding: 12px 5px;
            background: rgba(0,0,0,0.10);
            outline: none;
            border:none;
            border-bottom: 1px dotted #fff;
            color:#fff;
            border-radius:5px;
            margin:5px;
            font-weight:bold;
            margin-top: 2%;
        }
        select {
            width:100%;
            box-sizing: border-box;
            padding: 12px 5px;
            background:rgba(0,0,0,0.10)
            outline: none;
            border:none;
            border-bottom: 1px dotted #fff;
            color:black;
            border-radius:5px;
            margin:5px;
            font-weight:bold;
            margin-top: 2%;
        }
        button {
            width:100%;
            box-sizing:border-box;
            padding:10px 0;
            margin-top:30px;
            outline:none;
            border:none;
            background: #60adde;
            opacity:0.7;
            border-radius:20px;
            font-size:20px;
            color:#fff;
        }
    }
`
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
        <Styled>
            <h2>Add New Friend</h2>
            <form className="form" onSubmit={onSubmit}>
                Name:&nbsp;
                <input className="input"
                type="text"
                name="name"
                value={addFriend.name}
                onChange={handleChanges}
                />
                Age:&nbsp;
                <input className="input"
                type="number"
                name="age"
                value={addFriend.age}
                onChange={handleChanges}
                />
                Email:&nbsp;
                 <input className="input"
                type="text"
                name="email"
                value={addFriend.email}
                onChange={handleChanges}
                />
                <button>Add Friend</button>
        </form>

        </Styled>
    )
}

export default PostFriend