import './Register.css';
import { Link, useHistory } from 'react-router-dom'
import React, {useState} from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const id = new Date().getTime()+(5*24*60*60*1000);

  let history = useHistory();
  
  const submit = (e) => {
    e.preventDefault();
    if(document.getElementsByClassName("username")[0].value === '' || document.getElementsByClassName("email")[0].value === '' || document.getElementsByClassName("password")[0].value === '') {
      alert("field all columns")
    } else {
      localStorage.clear()
      localStorage.setItem('data', JSON.stringify({
        id: id,
        name: name,
        email: email,
        password: password,
        isAuthenticated: true
      }));
      history.push("/");
    }
  }

  return (
    <div className="App">
      <div className="loginForm">
        <h1>Hello Friends</h1>
        <p>Create account <br/>
        and start journey with us!</p>
        <Link to="/" className="linkLogin"><button>Login</button></Link>
      </div>
      
      <form onSubmit= {submit} className = "FormBox">
        <input type="text" placeholder="username" className="username" onChange = {e => setName(e.target.value)}/>
        <input type="text" placeholder="email" className="email" onChange = {e => setEmail(e.target.value)}/>
        <input type="password" placeholder="password" className="password" onChange = {e => setPassword(e.target.value)}/>
        <button><a href="/">Register</a></button>
        <div className="registerMobile">
          <span>Already have account ? </span><a href="/" className="linkMobile">Login</a>
        </div>
      </form>
    </div>
  );
}

export default Register;
