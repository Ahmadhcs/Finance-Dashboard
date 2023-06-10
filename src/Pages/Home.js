import Display from "../components/Display";
import Navbar from "../components/Navbar";
import Snap from "../components/Snap";
import "./Home.css"
import Top from "../components/Top";
function Home(){
    return(
        <>
        
        <div className="Fixing">
            <Navbar id="Nav" />

        <div className="Dash">
            <h1>dashhhh</h1>
            <Top />

        <div id="Displays">
                <Display item={"person"}/>
                
                <Display item={"add"} />
                <Display item={"cash"} />
                <Display item={"chart"} />
            </div>

        </div>
          

        </div>
        
        
        
           
        </>
    )
}

export default Home;