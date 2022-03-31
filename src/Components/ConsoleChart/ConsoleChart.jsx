import React, { useState, useEffect } from 'react';
import './ConsoleChart.css';
import { Chart } from "react-google-charts";



const ConsoleChart = (props) => {

    const [chartData, setChartData] = useState([]);

   useEffect(() => {
       let tempchartData = props.displayGames.map(entry => {
           return [entry.platform, entry.globalSales];
       });
       setChartData(tempchartData);
   }, [props.displayGames])

    return ( 
        <div className='console-chart-contain'>
            <Chart
            chartType="LineChart"
            data={[["Console", "Sales"], ...chartData]}
            width="100%"
            height="350px"
            options={{legend: {position: 'bottom'}}}
            legendToggle
            />
        </div>
     );
}
 
export default ConsoleChart;