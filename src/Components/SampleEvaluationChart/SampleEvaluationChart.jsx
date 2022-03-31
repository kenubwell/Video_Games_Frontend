import React, { useState, useEffect } from 'react';
import './SampleEvaluationChart.css';
import { Chart } from "react-google-charts";

const SampleEvaluationChart = (props) => {
    const [chartData, setChartData] =useState([]);
    const [platformData, setPlaformData] = useState([]);

    useEffect(() =>{
        let tempChartData = props.allGames.filter(function(element){
            return element.year == 2016;
        }).map(entry => {
        return [entry.publisher, entry.globalSales];
    });
    setChartData(tempChartData);
}, [props.allGames])

    useEffect(() =>{
        
    })

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

    function formatPlaformData(platformData){
        const data = [
            ["Platform", "Global Sales", {role: "style"}],
            ...platformData.map(platformDataSingle => [platformDataSingle.platform, platformDataSingle.gamesSoldGlobally, 'lightblue'])
        ]
    return data
    }


    return (  
        <div>
            {platformData.length > 0 &&
            <>
                <h1>PLatform By Global Sales in Millions</h1>
                <Chart chartType="ColumnChart" width="100%" height="400px" data={formatPlaformData(platformData)} />
            </>
            }
        </div>
    );
}
 
export default SampleEvaluationChart;