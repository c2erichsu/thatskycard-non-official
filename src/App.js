import './App.css';
import React, { useContext, useState } from 'react';
import CardInfoForm from './component/CardInfoForm';
import CardResult from './component/CardResult';

// context field
export const UserContext = React.createContext();



// Layout field



// Layout field end



function App() {
  const [name, setName] = useState();
  const [img_url, setImg_url] = useState();
  const value = { img_url, setImg_url };
  return (
    <UserContext.Provider value={{name, setName, img_url, setImg_url}}>
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
