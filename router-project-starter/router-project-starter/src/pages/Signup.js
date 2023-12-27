import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'


const Signup = (setIsLoggedIn) => {
  return (
    <div className="flex justify-center items-center">
      <Template
      title={"Join the millions of learners from around the world who are already learning on Udemy!"}
      desc1={"Build your skills with our platform"}
      desc2={"Educational content from top universities, colleges and professionals"}
      image={signupImg}
      formtype={"signup"}
      setIsLoggedIn={setIsLoggedIn}

      
      />
    </div>
  )
}

export default Signup
