import React from 'react';
import './App.css';
import Button from "./Profile/MyButton";
import Myface from "./Profile/Image";
import NameLastname from "./Profile/name";
function App() {
  const profile={

    photo:'/profile.png',
  
    Name:{firstName:'Youssef', lastName:'Kacem'},
  
    profileLink:'https://www.facebook.com/Youssef.Kacem001',
  };
  return (
    <div className="App">
      <Myface profil={profile} />
      <NameLastname profil={profile}/>
      <Button profil={profile} gofb={()=>{window.location=(profile.profileLink)}}>My Facebook</Button>
      
    </div>
  );
}

export default App;
