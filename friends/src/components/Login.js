import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'

import styled from 'styled-components'

const StyleLogin = styled.div `
    font-family:sans-serif;
    background-image: url('https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-size:cover;
    display:flex;
    background-size: cover;
    justify-content:center;
    align-items:center;
    height:100vh;
    color:white;
    form {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        width:400px;
        padding:40px;
        background: rgba(0,0,0,0.8);
        box-sizing:border-box;
        box-shadow: 0 15px 25px rgba(0,0,0,0.5);
        border-radius:10px;
    }
    h3 {
        color: #fff;
        text-align: center;
    }
    input {
        width:100%;
        padding: 10px 0 ;
        font-size: 16px;
        color: #fff;
        margin-bottom:30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline:none;
        background: transparent;
    }
    button {
        background: transparent;
        border:none;
        outline:none;
        color: #fff;
        background: #03a9f4;
        padding: 10px 20px;
        cursor: pointer;
        border-radius:5px;
    }

`

const initialValue = {
    username:'',
    password:''
}
const Login = () => {
    const [value,setValue] = useState(initialValue)
    const history= useHistory()

    const handleChanges = e => {
        setValue({...value,[e.target.name]:e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login',value)
        .then(res => {
           localStorage.setItem('token',res.data.payload)
           history.push('/friends')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <StyleLogin>
        <form onSubmit={onSubmit}>
          Username:&nbsp;
          <input
            type="text"
            name="username"
            value={value.username}
            onChange={handleChanges}
          />
          Password:&nbsp;
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChanges}
          />
          <button>Log in</button>
        </form>
      </StyleLogin>
    )
}

export default Login