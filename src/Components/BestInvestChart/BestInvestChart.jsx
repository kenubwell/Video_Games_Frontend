import React, { useState, useEffect } from "react";
import './BestInvestChart.css';
import { Chart } from "react-google-charts";

const BestInvestChart = (props) => {

    const [chartData, setChartData] =useState([]);
    const [platformData, setPlatformData] = useState([]);

    useEffect(() =>{
        let tempChartData = props.allGames.filter(function(element){
            return element.year >= 2013;
        })
    identifyPlatformInfo(tempChartData);
}, [props.allGames])
console.log(chartData)


    function identifyPlatformInfo(tempChartData){
        console.log(tempChartData);
        const duplicatePlatform = tempChartData.map(game => game.platform);
        console.log(duplicatePlatform);

        const distinctPlatform = [...new Set(duplicatePlatform)];

        let platformsWithGlobalSales = distinctPlatform.map(platformName => {
            let platformDataObject ={
                platform : platformName,

                gamesSoldGlobally: tempChartData.filter(game => game.platform === platformName).map(game => game.globalSales).reduce((a, b) => a + b, 0)
            }
            return platformDataObject;
        })

        setPlatformData(platformsWithGlobalSales);
    }

    function formatPlatformData(platformData){
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
            <h1>Platform By Global Sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={formatPlatformData(platformData)} />
        </>
        }
    </div>
);
}
 
export default BestInvestChart;

