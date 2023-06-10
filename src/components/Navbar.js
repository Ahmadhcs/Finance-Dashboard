import "./Navbar.css"
import home from "../images/home.svg"
import log from "../images/log.svg"
import notif2 from "../images/notif2.svg"
import person1 from "../images/person1.svg"
import person2 from "../images/person2.svg"
import table from "../images/table.svg"


function Navbar(){
    return(
        <div className="flex-row w-96 rounded-3xl m-8 top-0 left-0" id="Nav">
            <div className="Title text-3xl">lll
                
            </div>
            <div className="border" id="Border"></div>

            <nav className="vertical-navbar">
            <ul id="Nav-ul">
            <img style = {{  paddingTop : 28 }}  src={home}></img><li><a href="#">About</a></li>
            <img src={person1}></img><li><a href="#">Profile</a></li>
            <img src={table}></img><li><a href="#">Tables</a></li>
            <img src={notif2}></img><li><a href="#">Notifications</a></li>

            </ul>
            </nav>
            <div className="Auth">
                <div className="Auth-Title">Auth</div>
                <nav className="vertical-navbar">
                <ul id="Nav-ul">
                <img src={log} style = {{  paddingTop : 28 }}></img><li><a href="#">Sign In</a></li>
                <img src={person2}></img> <li><a href="#">Sign Up</a></li>
                </ul>
            </nav>
                
            </div>

        </div>


    )
}

export default Navbar