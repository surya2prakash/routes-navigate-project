import React from 'react'
import { Link} from 'react-router-dom'
import Logo from '../assets/Logo.svg'

import './Navbar.css'
import toast from 'react-hot-toast';




export default function Navbar(props) {

    let isLoggedIn=props.isLoggedIn;
    let setLoggedIn=props.setLoggedIn;


  return (
    <div className='main'>
       <Link to="/"> 
          <img src={Logo} alt='no' loading='lazy'></img>
       </Link>
         <nav >
            <ul className='navLink'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
                
            </ul>
         </nav>

         {/* buttons logIn ,signUp ,Logout ,DashBoard */}
         <div className='btns'>
              { !isLoggedIn &&
                <Link to="/login">
                    <button>
                        LogIn
                    </button>
                </Link>
              }
              { !isLoggedIn &&
                <Link to="/signup">
                    <button>
                        SignUp
                    </button>
                </Link>
              }
              { isLoggedIn &&
                <Link to="/">
                    <button onClick={()=>{setLoggedIn(false)
                        toast.success("Logged Out")
                    }}>
                        LogOut
                    </button>
                </Link>
              }
              {  isLoggedIn &&
                <Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
              }
         </div>
    </div>
  )
}
