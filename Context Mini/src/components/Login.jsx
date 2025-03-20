import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div className='bg-gray-300 m-5 p-5 max-w-md flex flex-col gap-y-3 text-center rounded-sm'>
        <h2 className='font-bold text-xl'>Login</h2>
        <input type ="text" className='bg-white rounded-sm p-2' placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
        <input type ="text" className='bg-white rounded-sm p-2' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button className='bg-black m-auto  rounded-sm p-2 px-3 text-white text-center' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login