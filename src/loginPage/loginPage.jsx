import React, { useState } from 'react';
import './loginPage.css';
import bg from './../asset/Mobile-login.jpg'
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate()
const [error, setError] = useState({
    email:false,
    password:false,
  });

function validate(email, password) {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isPasswordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(password);

console.log(isEmailValid,isPasswordValid)

  return {
    email:!isEmailValid,
    password:!isPasswordValid,
  };
}

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorvalue=validate(email,password)
    setError(errorvalue)

  if(errorvalue.email === false && errorvalue.password === false && email.length !== 0 && password.length !== 0){
      navigate("/home")
    }
  };


  return (
   <>
   <div className='signWrap'>
    <div className="signalign">
      <h2>Sign In</h2>

      <div>
        New User? <a href="/register">Register Here</a>
      </div>


      <form className= "formalign" onSubmit={handleSubmit}>
        <div >
          <input 
          id='text_box'
          placeholder='Username or email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <input
           id='text_box'
          placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className='keepme'>
          
          
          <label>
            <input
            id='check_box'
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Keep me signed in
          </label>
        </div>

{
   <div
      className="position-absolute top-0 end-0 p-3"
      style={{ zIndex: 1050 }}
    >
  <Toast className="bg-danger text-white"  show={error.email||error.password} delay={3000} autohide onClose={() => setError({
    email:false,
    password:false,
  })} >
      {error.email&&<Toast.Body>
        *invalid email format</Toast.Body>}
        {error.password&&<Toast.Body>
        *Password must be minimum 8 characters long  (consist of atleast 1 Capital letter, 1 number & 1 symbol)</Toast.Body>}
    </Toast>
    </div>
}

 {/* {error.email&&<p id='error'>*invalid email format</p>}
          {error.password&&<p id='error'>*Password must be minimum 8 characters long <br/> consist of atleast 1 Capital letter,1 number & 1 symbol)</p>} */}
        <button className="button" type="submit">Sign In</button>
      </form>

      <div className='signtext'>
        or Sign In With
      </div>

      <div className="social-icons">
        <button className="social-btn google">G</button>
        <button className="social-btn facebook">f</button>
        <button className="social-btn linkedin">in</button>
        <button className="social-btn twitter">t</button>
      </div>

      
    </div>
    </div>
    <div className='loginbg'>

        <img className = 'bgimg' src = {bg} alt='background_image'></img>

    </div>
    </>
  );
}

export default LoginPage;