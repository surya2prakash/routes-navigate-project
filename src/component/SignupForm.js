import React, {  useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';




export default function SignupForm({setLoggedIn}) {

    const [formData,setformData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const navigate = useNavigate();

    const [accountType,setaccountType] = useState("student");
   
    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setConfirmPassword] = useState(false);

    function changeHandler(event){
        setformData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }


    function submitHandler(event){
       event.preventDefault();

       if(formData.password !== formData.confirmPassword){
          toast.error("password Not match");
          return;
       }
       setLoggedIn(true);
       toast.success("Account Created")
       navigate("/dashboard")
    }

  return (
   <div>
       {/* account type ka use karke haam buttons ke transition ko mange krenge */}
         <div >
            <button onClick={()=>{setaccountType ("student")}}>
                Student
            </button>
            <button onClick={()=>{setaccountType("instructor")}}>
                Instructor
            </button>
         </div>
         <form onSubmit={submitHandler}>
            <div>
               <label>
                    <p>First Name <sup>*</sup></p>
                    <input required type='text' name='firstName' onChange={changeHandler}
                       placeholder='Enter First Name' value={formData.firstName}></input>
               </label>
                <label>
                    <p>Last Name <sup>*</sup></p>
                    <input required type='text' name='lastName' onChange={changeHandler}
                       placeholder='Enter last Name' value={formData.lastName}></input>
               </label>
               </div>
                <label>
                    <p>Email Address <sup>*</sup></p>
                    <input required type='email' name='email' onChange={changeHandler}
                       placeholder='Enter Email Address' value={formData.email}></input>
               </label>
               <div>
                     <label>
                    <p> Create Password <sup>*</sup></p>
                    <input required type={showPassword?("text"):("password")} name='password' onChange={changeHandler}
                       placeholder='Enter Password' value={formData.password}></input>
                       <span onClick={()=>{setShowPassword((prev)=>!prev)}}>
                                       {showPassword?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
                                   </span>
               </label>
                 <label>
                    <p> Confirm Password <sup>*</sup></p>
                    <input required type={showPassword?("text"):("password")} name='confirmPassword' onChange={changeHandler}
                       placeholder='Enter Confirm Password' value={formData.confirmPassword}></input>
                       <span onClick={()=>{setConfirmPassword((prev)=>!prev)}}>
                                                                  {showConfirmPassword?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
                                   </span>
               </label>
               </div>
               <button>Create Account</button>
         </form>
   </div>
  )
}
