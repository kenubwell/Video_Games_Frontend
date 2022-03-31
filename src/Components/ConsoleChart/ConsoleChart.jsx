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
        const duplicateConsole = tempChartData.map(game => game.console);
        console.log(duplicateConsole);

        const distinctConsole = [...new Set(duplicateConsole)];

        let consolesWithGlobalSales = distinctConsole.map(consoleName => {
            let consoleDataObject ={
                console : consoleName,

                gamesSoldGlobally: tempChartData.filter(game => game.console === consoleName).map(game => game.globalSales).reduce((a, b) => a + b, 0)
            }
            return consoleDataObject;
        })

        setConsoleData(consolesWithGlobalSales);
    }

    function formatConsoleData(consoleData){
        const data = [
            ["Console", "Global Sales", {role: "style"}],
            ...consoleData.map(consoleDataSingle => [consoleDataSingle.console, consoleDataSingle.gamesSoldGlobally, 'lightblue'])
        ]
    return data
    }


return (  
    <div>
        {consoleData.length > 0 &&
        <>
            <h1>Console By Global Sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={formatConsoleData(consoleData)} />
        </>
        }
    </div>
);
}
 
export default ConsoleChart;