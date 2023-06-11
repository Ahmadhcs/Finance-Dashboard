import "./Graph.css"



import {Line} from "react-chartjs-2"
import {Chart as ChartJS,
LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js'

ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement)


function Graph(){

    const data = {
        labels: ["M", 'T', 'W', 'T', 'F',"S","S"],
    }


    return(
   
       


    )
}


export default Graph