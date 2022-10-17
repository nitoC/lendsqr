import React from 'react';
import { useState } from 'react';

function Login({users, page, auth}) {
    const [login, setLogin] = useState({
        email:'',
        password:''
    })

    const handleEmail = (e)=>{
        console.log(e.target.value)
        setLogin({
            ...login, email:e.target.value
        })

    }
    const handlePass = (e)=>{
        console.log('pass')
        setLogin({
            ...login, password:e.target.value
        })
        
    }
    const handleSubmit = (e)=>{
            e.preventDefault()
            console.log(users,'users')
            console.log(typeof login.email)
            console.log(typeof users[1].email)
        let result = users.filter(a=> a.email===login.email)
        console.log(result, 'logg')
        if(result[0]){
            page('dashboard')
            auth(result[0])
        }
        
    }
    return ( 
        <div className='login__wrapper'>
         <div className=" login-header">
            <div className="logo">
                <img className="logo__image" src="assets/logos/group.png" alt="Logo" />
            </div>
        </div>
        <div className="login">
            <div className="login__svg">

            </div>
            <div className="login__form">
                <div className="login__header">
                    Welcome!
                </div>
                <div className="login__subheader">
                    Enter details to login
                </div>
                <form className='form'>
                    <div className="login-input__wrapper">
                        <input onChange={handleEmail} type="text" className="login__input" placeholder='Email'/>
                    </div>
                    <div className="login-input__wrapper">
                        <input onChange={handlePass} type="password" className="login__input" placeholder='Password' />
                        <span className="login__text">
                            SHOW
                        </span>
                    </div>
                    <div className="login-forgot__text">
                        FORGOT PASSWORD
                    </div>
                    <button onClick={handleSubmit} className="login__btn">
                        LOG IN 
                    </button>
                </form>
            </div>
        </div>
        </div>
     );
}

export default Login;