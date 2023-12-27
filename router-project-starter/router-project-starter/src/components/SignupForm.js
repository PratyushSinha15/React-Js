import React,{useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

const SignupForm = ({setIsLoggedIn}) => {
  
      const [formData, setFormData] = useState({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: ''
      })
  
      function changeHandler(event){
          setFormData((prevData)=>{
              return {
                  ...prevData,
                  [event.target.name]: event.target.value
              }
          })
      }

      const [showPassword, setShowPassword] = useState(false)
      const [showConfirmPassword, setShowConfirmPassword] = useState(false)





  return (
    <div>
       <div>
        <button>Student</button>
        <button>Instructor</button>
       </div>

       <form>
        {/* contains first an d last name */}
          <div>

            <label>
              <p>First Name<sub>*</sub></p>
              <input required 
              type="text" 
              placeholder="Enter first name"
              name='firstname'
              onChange={changeHandler}
              value={formData.firstname}
              />
            </label>

            <label>
              <p>Last Name<sub>*</sub></p>
              <input required 
              type="text" 
              placeholder="Enter last name"
              name='lastname'
              onChange={changeHandler}
              value={formData.lastname}
              />
            </label>
          </div>
            
            {/* contains email */}
          <div>
            <label>
              <p>Email Address<sub>*</sub></p>
              <input required 
              type="email" 
              placeholder="Enter email id"
              name='email'
              onChange={changeHandler}
              value={formData.email}
              />
            </label>
          </div> 

          {/* contains password and confirm password */}
          <div>
            <label>
              <p>Crearte Password<sub>*</sub></p>
              <input required 
              type={showPassword?("text"):("password")}
              placeholder="Enter password"
              name='password'
              onChange={changeHandler}
              value={formData.password}
              />
              <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
              </span>

            </label>

            <label>
              <p>Confirm Password<sub>*</sub></p>
              <input required 
              type={showConfirmPassword?("text"):("password")} 
              placeholder="Enter password"
              name='confirmPassword'
              onChange={changeHandler}
              value={formData.confirmPassword}
              />
              <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                {showConfirmPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
              </span>
            </label>
          </div> 
          <button type="submit">Create Account</button> 
       </form>
    </div>
  )
}

export default SignupForm