import React, { useState, useEffect } from 'react';
import './SampleEvaluationChart.css';
import { Chart } from "react-google-charts";

const SampleEvaluationChart = (props) => {
    const [chartData, setChartData] =useState([]);
    const [plaformData, setPlaformData] = useState([]);

    useEffect(() =>{
        let tempChartData = props.allGames.filter(function(element){
            return element.year == 2016;
        }).map(entry => {
        return [entry.publisher, entry.globalSales];
    });
    setChartData(tempChartData);
}, [props.allGames])

    function identifyPlatformInfo(chartData){

        const duplicatePlatforms = chartData.map(game => game.plaform);

        const distinctPlatforms = [...new Set(duplicatePlatforms)];

        let plaformsWithGlobalSales = distinctPlatforms.map(platformName => {
            let platformDataObject ={
                platform : platformName,

                gamesSoldGlobally: chartData.filter(game => game.plaform == platformName).map(game => game.globalSales).reduce((a, b) => a + b, 0)
            }
            return platformDataObject;
        })

        setPlaformData(plaformsWithGlobalSales);
    }

    function formatPlaformData(plaformData){
        const data = [
            ["Platform", ]
        ]
    }

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