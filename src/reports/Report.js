import React, {useState} from "react";
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Bar, Line } from 'react-chartjs-2';

const data = {
    labels: ['Store', 'Stitching', 'Security', 'Procurement', 'Maintainance', 'Dyeing'],
    datasets: [
        {
            label: 'Total cost of Shortfall',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Total Shortfall cost Departmentwise',
        },
    },
};


const data1 = {
    labels: ["Aug'20","Sep'20","Oct'20","Nov'20","Dec'20"],
    datasets: [
        {
            label: 'Sum of Total Cost',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const options1 = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};




const Report = (props) => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList>
                <Tab>Report 1</Tab>
                <Tab>Report 2</Tab>
                <Tab>Report 3</Tab>
                <Tab>Report 4</Tab>
                <Tab>Report 5</Tab>
            </TabList>
            <TabPanel>
                <div style={{"width": "700px"}}>
                    <Bar data={data} options={options} width={100}
                         height={50}/>
                </div>
            </TabPanel>
            <TabPanel>
                <div style={{"width": "700px"}}>
                    <Line data={data1} options={options1} width={100}
                          height={50} />
                </div>
            </TabPanel>
            <TabPanel> </TabPanel>
            <TabPanel> </TabPanel>
            <TabPanel> </TabPanel>
        </Tabs>
    )
}

export default Report;
