import React, { useState, useEffect } from 'react';
import './SampleEvaluationChart.css';
import { Chart } from "react-google-charts";

const SampleEvaluationChart = (props) => {
    const [chartData, setChartData] =useState([]);
    const [publisherData, setPublisherData] = useState([]);

    useEffect(() =>{
        let tempChartData = props.allGames.filter(function(element){
            return element.year === 2016;
        })
    identifyPublisherInfo(tempChartData);
    console.log(tempChartData);
}, [props.allGames])
   


    function identifyPublisherInfo(tempChartData){
        console.log(tempChartData);
        const duplicatePublisher = tempChartData.map(game => game.publisher);
        console.log(duplicatePublisher);

        const distinctPublisher = [...new Set(duplicatePublisher)];

        let publishersWithGlobalSales = distinctPublisher.map(publisherName => {
            let publisherDataObject ={
                publisher : publisherName,

                gamesSoldGlobally: tempChartData.filter(game => game.publisher === publisherName).map(game => game.globalSales).reduce((a, b) => a + b, 0)
            }
            return publisherDataObject;
        })

        setPublisherData(publishersWithGlobalSales);
    }

    function formatPublisherData(publisherData){
        const data = [
            ["Publisher", "Global Sales", {role: "style"}],
            ...publisherData.map(publisherDataSingle => [publisherDataSingle.publisher, publisherDataSingle.gamesSoldGlobally, 'lightblue'])
        ]
    return data
    }


    return (  
        <div>
            {publisherData.length > 0 &&
            <>
                <h1>Plubisher By Global Sales in Millions</h1>
                <Chart chartType="ColumnChart" width="100%" height="400px" data={formatPublisherData(publisherData)} />
            </>
            }
        </div>
    );
}
 
export default SampleEvaluationChart;