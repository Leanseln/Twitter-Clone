import '../assets/HomePage.css'
import { useState } from 'react'

const HomePage = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
        console.log(username,password)
    }

  return (
    <div className='homepage'>
        <div className="container">
            <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" loading='lazy' />
            <h1>Instagram</h1>
            <input 
                type="text" 
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

            <input 
                type="password" 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

            <button 
                className='btnlog'
                onClick={handleClick}
                >Log in</button>

            <div className="line"></div>
        </div>
    </div>
  )
}

export default HomePage