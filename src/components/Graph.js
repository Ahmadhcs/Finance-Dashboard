import "./Graph.css"



import {Line} from "react-chartjs-2"
import {Chart as ChartJS,
LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js'

ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement)


function Graph(){

    const data = {
        labels: ["M", 'T', 'W', 'T', 'F',"S","S"],
        datasets: [{
            data: [50, 20, 10, 22, 50, 33, 29],
            backgroundColor: 'white',
            color: 'white',
            borderColor: "white"

        }]
    }

    const options =  {
        scales: {
               xAxes: [{gridLines: { color: "white" }}],
               yAxes: [{gridLines: { color: "white" }}]
               }
     }


    return(


        <div className="Big-Card">
            <div className="Card">
                <div style={{width: '00px', height: '500px', paddingTop: "25px", paddingLeft: '100px'}}>
                    <Line  color={"white"} data={data} options={options}>
                    </Line>
                </div>
            </div>
        </div>

   
       


    )
}


export default Graph