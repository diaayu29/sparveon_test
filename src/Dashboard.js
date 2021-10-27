import Calendar from 'react-calendar'
import './Dashboard.css';
import gambar from './asset_walk.png';
import face1 from './face1.jpg';
import face2 from './face2.jpg';
import face3 from './face3.jpg';
import face4 from './face4.jpg';
import song from './song.mp3';
import { useState } from 'react';

function Dashboard() {
  const logout = () => {
    localStorage.clear();
    window.location.pathname = ("/");
  }
  let audio = new Audio(song)
  function playAudio() {
    if(!document.getElementsByClassName("checkbox")[0].checked) {
      audio.play()
    } else if(document.getElementsByClassName("checkbox")[0].checked) {
      audio.pause()
    }
  }

  const [openBar, setOpenBar] = useState("navMobile")
  const openBarFunction = () => {
  setOpenBar("navMobile active")
  console.log("open")
  }
  const closeBarFunction = () => {
  setOpenBar("navMobile")
  console.log("close")
  }

  return (
    <div className="App">
      <div className="main">
      <i className="fas fa-bars" onClick = {openBarFunction}></i>
      <div className = {openBar}>
        <a href="#" className="active">Dashboard</a>
        <a href="#">Notifications</a>
        <a href="#">Account</a>
        <a href="#">Settings</a>
        <a href="/" onClick={logout}>Logout</a>
        <i className="fas fa-times" onClick = {closeBarFunction}></i>
      </div>
        <div className = "icon">
          <i className="fas fa-tachometer-alt"></i>
          <i className="fas fa-bell"></i>
          <i className="fas fa-cog"></i>
          <i className="fas fa-sign-out-alt" onClick = {logout}></i>
        </div>
        <div className="center">
        <input placeholder="search" className="input-search"></input>
        <i className="fas fa-search"></i>
          <div className = "welcomeBack">
            <div className="text">
              <h1>Welcome Back</h1>
              <p>Find your style and work with us !</p>
            </div>
            <img src={gambar} alt="women walk" className="women_walk"/>
          </div>
          <div className="playButton">
            <div className = "playMusic">
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="label" onClick = {playAudio}>
                <div className="ball"></div>
              </label>
              <h3>Play Music</h3>
            </div>
            <div className = "buttonOff">
              <h3>Add Option</h3>
            </div>
          </div>
          <div className="calendar">
            <h2>Calendar</h2>
            <Calendar className="calendar_react"/>
          </div>
        </div>
        <div className="more">
        <div className="iconMore">
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle"></i>
        </div>
          <h2>Members</h2>
          <div className="memberFace">
            <div className = "1">
              <img src = {face1} alt = "face1" />
              <h4>Rara</h4>
            </div>
            <div className = "2">
              <img src = {face2} alt = "face2" />
              <h4>Andre</h4>
            </div>
            <div className = "3">
              <img src = {face3} alt = "face3" />
              <h4>Rian</h4>
            </div>
            <div className = "4">
              <img src = {face4} alt = "face4" />
              <h4>Adi</h4>
            </div>
          </div>
          <div className = "option">
            <div className="option1">
              <button className="Details">Details</button>
              <button className="addMembers">Add Member</button>
            </div>
            <div className="option2">
              <button className="getNews">Get News</button>
              <button className="moreInfo">More Info</button>
            </div>
          </div>
          <div className="messages">
            <h2>New Messages</h2>
            <div className="notification">
              <div className="profileMessages">
                <img src={face1} alt="notif1"></img>
              </div>
              <div className="messagesIsi">
                <h5>Rara</h5>
                <p className="textEllipsis">Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="notification">
              <div className="profileMessages">
                <img src={face3} alt="notif1"></img>
              </div>
              <div className="messagesIsi">
                <h5>Rian</h5>
                <p className="textEllipsis">Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="notification">
              <div className="profileMessages">
                <img src={face2} alt="notif1"></img>
              </div>
              <div className="messagesIsi">
                <h5>Andre</h5>
                <p className="textEllipsis">Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
