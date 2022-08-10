import * as React from 'react';
import './styles/MainComponent.css';

const MainComponent = () => {
  return (
<>
<div className="navbar">
  <div>
   <img className='house' alt="housevector" src='/vector.png'/>
  </div>
<form>
  <label className="capitalLabel" for="cars">WSP</label>
  <br />
  <select className="selectCapital" name="cars" id="cars">
    <option className="optionCapital" value="option1">Sustainable Capital</option>
  </select>
</form>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
</div>

<div className="row">
  <div className="side">
    <h2>About Me</h2>
    <h5>Photo of me:</h5>
    <div className="fakeimg" style={{height:"200px"}}>Image</div>
    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    <h3>More Text</h3>
    <p>Lorem ipsum dolor sit ame.</p>
    <div className="fakeimg" style={{height:"60px"}}>Image</div>
    <div className="fakeimg" style={{height:"60px"}}>Image</div>
    <div className="fakeimg" style={{height:"60px"}}>Image</div>
  </div>
  <div className="main">
    <h2>TITLE HEADING</h2>
    <h5>Title description, Dec 7, 2017</h5>
    <div className="fakeimg" style={{height:"200px"}}>Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    <h2>TITLE HEADING</h2>
    <h5>Title description, Sep 2, 2017</h5>
    <div className="fakeimg" style={{height:"200px"}}>Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
</>

  )
}


export default MainComponent;