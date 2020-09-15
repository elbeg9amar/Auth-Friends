import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'

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
        <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            value={value.username}
            onChange={handleChanges}
          />
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChanges}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login