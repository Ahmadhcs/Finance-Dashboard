import "./Display.css"
import Snap from "./Snap"
function Display(props){


    return(

   
        <div className="bg-white  h-56  rounded-3xl  shadow-2xl" id="box">
            <Snap item={props.item}/>
            <div className="text-xl text-gray-500  font-light mt-12" id="text">{props.name}</div>
            <div className="text-shadow text-black text-3xl  pl-48 font-bold  text-shadow" id="number">{props.value}</div>

           
            <div class="border border-gray-300 mt-10" id="Border"></div>
            <div className="flex pl-6 pt-5 pb-8" id="Bottom">
                <div className="Percent">+55%</div>
                <div className="pl-1" id="Duration">than last week</div>
            </div>

       
        </div>


    )
}


export default Display