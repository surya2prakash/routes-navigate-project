import React from 'react'
import Template from '../component/Template'

import logImg from '../assets/login.png'

export default function Login({setLoggedIn}) {
  return (
    <div>
      <Template
      title="Welcome Back"
      desc1="Build skill for today,tomorrow , and beyond"
      desc2="Eduacation to future-proof your career"
      image={logImg}
      formType="login"
      setLoggedIn={setLoggedIn}/>
      
    </div>
  )
}
