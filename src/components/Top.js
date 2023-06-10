import "./Top.css"
import  { useState } from 'react';
import person from "../images/sign.png";
import notif from "../images/notif.png";
import setting from "../images/setting.png"

function Top(){

    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
    return( 
        <div className="Buttons">
             <input type="text" value={inputValue} onChange={handleInputChange} id="textbox" placeholder="Type Here"/>
             <nav id="Ya">
                <ul id="top">
                    <li id="need"><img src={person} id="sign"></img><p>Sign In</p></li>
                    <li id="small-li"><img src={setting} id="sign-small"></img></li>
                    <li id="small-li"><img src={notif} id="sign-small"></img></li>


                </ul>
             </nav>
        </div>
        

    )
    }

export default Top