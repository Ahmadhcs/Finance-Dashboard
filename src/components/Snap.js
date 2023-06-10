import "./Snap.css"
import cash from "../images/money.png"
import chart from "../images/chart.png"
import person from "../images/person.png"
import add from "../images/add.png"




function Snap(props){

    let image = [person, add, cash, chart]
    let current = image[3];

    if(props.item === "person"){
        current = image[0]

    }else if(props.item === "add"){
        current = image[1]
    }else if(props.item === "cash"){
        current= image[2]
    }

    return(
        <div className="Square">
            <img src={current} id="pic" ></img>
            

        </div>
    )
}

export default Snap