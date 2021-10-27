import './Login.css';
import { Link, useHistory } from "react-router-dom";
import {useState} from 'react';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const getData = JSON.parse(localStorage.getItem('data'));
  const history = useHistory()
  const submit = (e) => {
    e.preventDefault();
      if(getData === null) {
        history.push("/register")
      } else if(getData.name !== name || getData.password !== password){
        alert("Your data isn't match")
      } else {
        history.push("/dashboard")
      }
  }
  return (
    <div className="App">
      <form onSubmit = {submit} className = "Form-box">
        <input type="text" name="username" placeholder="username" 
        onChange = {e => {
          setName(e.target.value)
        }}/>
        <input type="password" name="password" placeholder="password" onChange = {e => {
          setPassword(e.target.value)
        }}/>
        <button>Login</button>
        <div className="loginMobile">
          <span> you don't have an account ?</span><a href="/register" className="linkMobile">Register</a>
        </div>
      </form>
      <div className="welcome">
        <h1>Welcome Back !</h1>
        <p>Login with your personal info<br/>
        and keep connect with us</p>
        <Link to="/Register" className="linkRegister"><button type="submit">Register</button></Link>
      </div>
    </div>
  );
}

export default Login;
