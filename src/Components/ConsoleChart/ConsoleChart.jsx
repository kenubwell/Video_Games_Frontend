import React, { useState, useEffect } from 'react';
import './ConsoleChart.css';
import { Chart } from "react-google-charts";



const ConsoleChart = (props) => {

    const [chartData, setChartData] = useState([]);

   useEffect(() => {
       let tempchartData = props.singleGame.map(entry => {
           return [entry.platform, entry.globalSales];
       });
       setChartData(tempchartData);
   }, [props.singleGame])

    return ( 
        <Chart
        chartType="LineChart"
        data={[["Console", "Sales"], ...chartData]}
        width="100%"
        height="400px"
        options={{legend: {position: 'bottom'}}}
        legendToggle
        />
     );
}
 
export default ConsoleChart;