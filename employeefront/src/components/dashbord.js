import React from 'react';
import { Col, Row, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import './dashboardCard.css';
import { Avatar } from '@mui/material';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SpeedIcon from '@mui/icons-material/Speed';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const firstQs = [
    {
        name: 'Capacity Metrics',
        src: <DonutSmallIcon style={{ fontSize: '130px' }} />,
        details: 'Capacity Metrics shows the available and used capacity of the storage system.',
        link: '/',
        chartData: {
            labels: ['Used Capacity', 'Available Capacity'],
            datasets: [{
                data: [70, 30], 
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        chartOptions: {
            plugins: {
                title: {
                    display: true,
                    text: 'Capacity Metrics', 
                    position: 'top'
                },
                legend: {
                    display: true,
                    position: 'bottom' 
                }
            }
        }
    },
    {
        name: 'Performance Metrics',
        src: <SpeedIcon style={{ fontSize: '130px' }} />,
        details: 'Performance Metrics shows the performance data of the storage system.',
        link: '/',
        chartData: {
            labels: ['Used Performance', 'Available Performance'],
            datasets: [{
                data: [60, 40], 
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        chartOptions: {
            plugins: {
                title: {
                    display: true,
                    text: 'Performance Metrics', // Chart title
                    position: 'top'
                },
                legend: {
                    display: true,
                    position: 'bottom' // Position legend at the bottom
                }
            }
        }
    }
];

function Dashboard() {
    return (
        <div className="firstline" style={{ marginTop: '3em' }}>
        <Row className="row">
            {firstQs.map((firstQ, index) => (
                <Col key={index} xs="12" sm="12" lg="12">
                    <Link to={firstQ.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card className="card">
                            <CardBody className="body">
                                <div className="card-content">
                                    <div className="avatar-container">
                                        <Avatar
                                            sx={{
                                                width: '100px',
                                                height: '100px',
                                                bgcolor: 'transparent',
                                                color: '#048888d3',
                                                padding: '10px'
                                            }}
                                        >
                                            {firstQ.src}
                                        </Avatar>
                                    </div>
                                    <div className="title-description-container">
                                        <div>
                                            <CardTitle tag="h4" style={{ fontSize: '1.2rem' }}>{firstQ.name}</CardTitle>
                                            <CardText>{firstQ.details}</CardText>
                                        </div>
                                    </div>
                                    <div className="chart-container">
                                        <div style={{ width: '200px', height: '200px' }}>
                                            <Doughnut data={firstQ.chartData} options={firstQ.chartOptions} />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    </div>
    

    );
}

export default Dashboard;
