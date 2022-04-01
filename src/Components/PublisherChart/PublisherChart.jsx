import React, { useState, useEffect } from 'react';
import './PublisherChart.css';
import { Chart } from "react-google-charts";



const PublisherChart = (props) => {

    const [chartData, setChartData] =useState([]);
    const [publisherData, setPublisherData] = useState([]);


    useEffect(() =>{
        let tempChartData = props.allGames;
    identifyPublisherInfo(tempChartData);

}, [props.allGames])
   
    function identifyPublisherInfo(tempChartData){
    
        const duplicatePublisher = tempChartData.map(game => game.publisher);
     

        const duplicatePlatform = tempChartData.map(game => game.platform);
     

        const distinctPlatform = [...new Set(duplicatePlatform)];
        const distinctPublisher = [...new Set(duplicatePublisher)];

        const publisherPlatform = distinctPublisher.concat(distinctPlatform);
        console.log(publisherPlatform);

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
        console.log(publisherData);
        const data = [
            ["Publisher", "Global Sales", {role: "style"}],...publisherData.map(publisherDataSingle => [publisherDataSingle.publisher, publisherDataSingle.gamesSoldGlobally, 'lightblue'])
        ]
    return data
    }


    return (  
        <div>
            {publisherData.length > 0 &&
            <div className='eval-chart-contain'>
                <Chart chartType="PieChart" width="100%" height="375px" data={formatPublisherData(publisherData)} />
            </div>
            }
        </div>
    );
}
 
export default PublisherChart;