import React, { useState, useEffect } from 'react';
import './SampleEvaluationChart.css';
import { Chart } from "react-google-charts";

const SampleEvaluationChart = (props) => {
    const [chartData, setChartData] =useState([]);

    useEffect(() =>{
        let tempChartData = props.allGames.filter(function(element){
            return element.year == 2016;
        }).map(entry => {
        return [entry.publisher, entry.globalSales];
    });
    setChartData(tempChartData);
}, [props.allGames])
console.log(chartData)

    return (  
        <div className='console-chart-contain'>
        <Chart
        chartType="Bar"
        data={[["Publisher", "Sales"], ...chartData]}
        width="100%"
        height="350px"
        options={{legend: {position: 'bottom'}}}
        legendToggle
        />
    </div>
    );
}
 
export default SampleEvaluationChart;