import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate  } from 'react-router-dom';

export default function LoginForm({setLoggedIn}) {

  const [formData,setformData] = useState({
    email:"",
    password:""
  })
   
  const navigate = useNavigate();


 const [showPassword , setShowPassword] = useState(false);


  function changeHandler(event){
    setformData((prevData)=>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    )

    )
  }

  function submitHandler(event)
  {
      event.preventDefault();
      setLoggedIn(true);
      toast.success("Logged In");
      navigate("/dashboard");
      
  }

  return (
    <form  onSubmit={submitHandler}>
        <label>
            <p>
                Email Address <sup>*</sup>
            </p>
            <input required type='email' value={formData.email} onChange={changeHandler}
             placeholder='enter email' name='email'></input>
        </label>
         <label>
            <p>
                Password <sub>*</sub>
            </p>
            <input required type={showPassword ?("text"):("password")} value={formData.password} onChange={changeHandler}
            placeholder='enter password' name='password'></input>
            <span onClick={()=>{setShowPassword((prev)=>!prev)}}>
                                         {showPassword?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
            </span>

            <Link to="#" ><p>
                forget password</p></Link>
        </label>
        <button>logIn</button>
    </form>
  )
}
