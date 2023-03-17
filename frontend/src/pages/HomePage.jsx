import '../assets/HomePage.css'
import { useState } from 'react'
import {FaEyeSlash, FaEye} from 'react-icons/fa'

const HomePage = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [showPassword,toggleShowPassword] = useState(false) 
    const handleClick = (e) => {
        e.preventDefault()
        console.log(username,password)
    }
    const handleShow = () => {
        toggleShowPassword(!showPassword)
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
            <div className="password">
                <input 
                    type={showPassword ? 'text': 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    /> {showPassword ? <FaEye className='silip' onClick={handleShow}/>: <FaEyeSlash className='silip' onClick={handleShow}/>}
            </div>
            <button
                className='btnlog'
                onClick={handleClick}
                >Log in</button>

            <div className="line"></div>

            <a href="#">Forgot Password?</a>
        </div>
        <div className="bottombox">
            <p>Don't have an account? <a href="">Sign up</a></p>
        </div>
    </div>
  )
}

export default HomePage