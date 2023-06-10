import "./Navbar.css"

function Navbar(){
    return(
        <div className="flex-row w-96 rounded-3xl m-8 top-0 left-0" id="Nav">
            <div className="Title text-3xl">lll
                
            </div>
            <div className="border" id="Border"></div>

            <nav className="vertical-navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </nav>
            <div className="Auth">
                <div className="Auth-Title">Auth</div>
                <nav className="vertical-navbar">
                <ul>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </nav>
                
            </div>

        </div>


    )
}

export default Navbar