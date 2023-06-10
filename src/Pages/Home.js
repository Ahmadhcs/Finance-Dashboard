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
                <Display item={"person"} name={"Today's Users"} value={"2,300"}/>
                
                <Display item={"add"} name={"New Clients"} value={"300"}/>
                <Display item={"cash"} name={"Today's Money"} value={"$53K"} />
                <Display item={"chart"} name={"Sales"} value={"$103,432"} />
            </div>

        </div>
          

        </div>
        
        
        
           
        </>
    )
}

export default Home;