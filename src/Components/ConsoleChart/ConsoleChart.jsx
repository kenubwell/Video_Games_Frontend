import React, { useState, useEffect } from 'react';
import './ConsoleChart.css';
import { Chart } from "react-google-charts";



const ConsoleChart = (props) => {

    const [chartData, setChartData] =useState([]);
    const [consoleData, setConsoleData] = useState([]);

    useEffect(() =>{
        let tempChartData = props.displayGames;
        identifyConsoleInfo(tempChartData);
}, [props.displayGames])

    function identifyConsoleInfo(tempChartData){
        console.log(tempChartData);
        const duplicateConsole = tempChartData.map(game => game.platform);
        console.log(duplicateConsole);

        const distinctConsole = [...new Set(duplicateConsole)];

        let consolesWithGlobalSales = distinctConsole.map(consoleName => {
            let consoleDataObject ={
                platform : consoleName,

                gamesSoldGlobally: tempChartData.filter(game => game.platform === consoleName).map(game => game.globalSales).reduce((a, b) => a + b, 0)
            }
            return consoleDataObject;
        })

        setConsoleData(consolesWithGlobalSales);
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
        <>
            <Chart chartType="BarChart" width="100%" height="400px" data={formatConsoleData(consoleData)} />
        </>
        }
    </div>
);
}
 
export default ConsoleChart;