import './App.css';
import React, { useState } from 'react';
// context field
export const UserContext = React.createContext();

// function field
function convertURL(infile) {
  var URL = window.webkitURL || window.URL;
  var url = URL.createObjectURL(infile.target.files[0]);
  return url;
}
// Layout field
function CardInfoForm(setImg_url) {
  return (

    <form>

      <div class="input-group mb-3">
        <label class="input-group-text"> Photo </label>
        <UserContext.Consumer>
          {value => <input type="file" class="form-control" onChange={e => value.setImg_url(convertURL(e))} />}
        </UserContext.Consumer>

      </div>

      <div class="input-group mb-3">
        <span class="input-group-text"> Name </span> <input type="text"
          id="name"
          class="form-control" />
      </div>

      <div class="input-group mb-3">
        <div class="form-check">
          <input class="form-check-input"
            type="radio"
            name='sex' />
          <label class="form-check-label">
            Male </label> </div>

        <div class="form-check">
          <input class="form-check-input"
            type="radio"
            name='sex' />
          <label class="form-check-label">
            Female </label> </div>

        <div class="form-check">
          <input class="form-check-input"
            type="radio"
            name='sex' />
          <label class="form-check-label">
            Other </label> </div> </div>


      <div class="input-group mb-3">
        <div class="form-check">
          <input class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault" />
          <label class="form-check-label"
            for="flexCheckDefault">
            Chinese </label> </div> <div class="form-check">
          <input class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked" />
          <label class="form-check-label"
            for="flexCheckChecked">
            English </label> </div> <div class="form-check">
          <input class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked" />
          <label class="form-check-label"
            for="flexCheckChecked">
            Japanese </label> </div> </div>

      <div class="input-group mb-3">
        <span class="input-group-text"> Start </span> <input type="time"
          id="start_time"
          class="form-control" />
        <span class="input-group-text"> End </span> <input type="time"
          id="end_time"
          class="form-control" />
      </div>

      <div class="input-group">
        <span class="input-group-text"> Note </span> <textarea class="form-control"> </textarea> </div> </form>
  );
}

function CardResult() {
  return (<div>
    <div>result</div>
    <div class="img-thumbnail">
    </div>
    <UserContext.Consumer>
      {value => <img src={value.img_url} />}
    </UserContext.Consumer>
  </div>


  );
}
// Layout field end



function App() {
  const [img_url, setImg_url] = useState();
  const value = { img_url, setImg_url };
  return (
    <UserContext.Provider value={value}>
      <div className="App">
        <div class="row">
          <div class="col-md"><CardInfoForm /></div>
          <div class="col-md"><CardResult /></div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
