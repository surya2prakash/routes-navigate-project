import React from 'react'
import Template from '../component/Template'
import signImg from "../assets/signup.png"

export default function SignUp({setLoggedIn}) {
  return (
     <Template
          title="Welcome Back"
          desc1="Build skill for today,tomorrow , and beyond"
          desc2="Eduacation to future-proof your career"
          image={signImg}
          setLoggedIn={setLoggedIn}
          formtype="signup"/>
          
  )
}
