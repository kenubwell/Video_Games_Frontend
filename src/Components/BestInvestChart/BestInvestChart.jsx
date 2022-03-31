import React, { useState, useEffect } from "react";
import './BestInvestChart.css';
import { Chart } from "react-google-charts";

const BestInvestChart = (props) => {

    const [chartData, setChartData] =useState([]);

    useEffect(() =>{
        let tempChartData = props.allGames.filter(function(element){
            return element.year >= 2013;
        }).map(entry => {
        return [entry.platform, entry.globalSales];
    });
    setChartData(tempChartData);
}, [props.allGames])
console.log(chartData)

    return (  
        <div className='console-chart-contain'>
        <Chart
        chartType="Bar"
        data={[["Console", "Sales"], ...chartData]}
        width="100%"
        height="350px"
        options={{legend: {position: 'bottom'}}}
        legendToggle
        />
    </div>
    );
}
 
export default BestInvestChart;

