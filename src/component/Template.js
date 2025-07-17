import React from 'react'
import frameImage from "../assets/frame.png"
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function Template(props) {
    let title=props.title;
    let desc1 = props.desc1;
    let desc2 = props.desc2;
    let image = props.image;
    let formtype = props.formtype;
    let setLoggedIn = props.setLoggedIn;
  return (
    <div>
          <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {
                formtype ==="signup" ? (<SignupForm setLoggedIn={setLoggedIn}/>) :
                (<LoginForm setLoggedIn={setLoggedIn}/>)
            }
               <div>
                   <div></div>
                   <div>OR</div>
                   <div></div>
               </div>
               <button>Sign in with Google</button>
          </div>

          <div>
               <img src={frameImage} alt='not' width={558} height={504} loading='lazy'></img>
               <img src={image} alt='not' width={558} height={504} loading='lazy'></img>
          </div>

    </div>
  )
}
