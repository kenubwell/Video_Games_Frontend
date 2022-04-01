import React, { useState, useEffect } from 'react';
import './PublisherChart.css';
import { Chart } from "react-google-charts";



const PublisherChart = (props) => {

    const [chartData, setChartData] =useState([]);
    const [consoleData, setConsoleData] = useState([]);
    const [publisherData, serPublisherData] = useState([]);

    useEffect(() =>{
        let tempChartData = props.allGames;
        identifyConsoleInfo(tempChartData);
        distinctPublisher(tempChartData);
}, [props.allGames])

    function identifyConsoleInfo(tempChartData){
        console.log(tempChartData);
        const duplicateConsole = tempChartData.map(game => game.platform);
        console.log(duplicateConsole);

        const distinctConsole = [...new Set(duplicateConsole)];
        console.log(distinctConsole);
        let consolesWithGlobalSales = distinctConsole.map(consoleName => {
            let consoleDataObject ={
                platform : consoleName,

                gamesSoldGlobally: tempChartData.filter(game => game.platform === consoleName).map(game => game.globalSales).reduce((a, b) => a + b, 0)
            }
            return consoleDataObject;
        })

        setConsoleData(consolesWithGlobalSales);
    }

    function distinctPublisher(tempChartData){
        console.log(tempChartData);
        const duplicateConsole = tempChartData.map(game => game.publisher);
        console.log(duplicateConsole);
    }

    function formatConsoleData(consoleData){
        const data = [
            ["Console", "Global Sales", {role: "style"}],
            ...consoleData.map(consoleDataSingle => [consoleDataSingle.platform, consoleDataSingle.gamesSoldGlobally, 'lightblue'])
        ]
    return data
    }


return (  
    <div>
        {consoleData.length > 0 &&
        <div className='console-chart-contain'>
            <Chart chartType="BarChart" width="100%" height="375px" data={formatConsoleData(consoleData)} />
        </div>
        }
    </div>
);
}
 
export default PublisherChart;