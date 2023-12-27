import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <div className="flex justify-center items-center">
      <Template
      title={"Welcome Back"}
      desc1={"Build your skills with our platform"}
      desc2={"Educational content from top universities, colleges and professionals"}
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login