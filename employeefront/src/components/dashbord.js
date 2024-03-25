import React from 'react';
import { Col, Row, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

import './dashboardCard.css';
import { Avatar } from '@mui/material';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import IosShareIcon from '@mui/icons-material/IosShare';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';


const firstQs = [
    {
        name: 'Capacity Metrics',
        src: <DonutSmallIcon style={{ fontSize: '100px' }} />,
        details: 'Capacity Metrics shows the available and used capacity of the storage system.',
        link: '/'
    },
    {
        name: 'Performance Metrics',
        src: <SpeedIcon style={{ fontSize: '100px' }} />,
        details: 'Performance Metrics shows the performance data of the storage system.',
        link: '/'
    },
    {
        name: 'Alerts',
        src: <ReportProblemIcon style={{ fontSize: '100px' }} />,
        details: 'Alerts display notifications about system errors or warnings.',
        link: '/'
    },
    {
        name: 'CIFS/Windows shares',
        src: <IosShareIcon style={{ fontSize: '100px' }} />,
        details: 'CIFS/Windows shares provide access to files on the network.',
        link: '/'
    }, {
        name: 'SAN Storage',
        src: <StorageIcon style={{ fontSize: '100px' }} />,
        details: 'SAN Storage provides high-speed data storage.',
        link: '/'
    }
];

function Dashboard() {
    return (
        <div className="firstline" style={{ marginTop: '3em' }}>
            <Row className="row">
                {firstQs.map((firstQ, index) => (
                    <Col key={index} xs="12" sm="6" lg="4">
                        <Link to={firstQ.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="card">
                                <CardBody className="body">
                                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                       
                                        <div style={{ width: '40%', display: 'flex', justifyContent: 'center', borderRight: '2px solid #048888d3', marginRight: '10px' }}>
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
                                        
                                        <div style={{ width: '60%', paddingLeft: '10px' }}>
                                            <div style={{ marginBottom: '0.5em' }}>
                                                <CardTitle tag="h4" style={{ fontSize: '1.2rem', marginBottom: '0', marginTop: '0' }}>{firstQ.name}</CardTitle>
                                            </div>
                                            <CardText>{firstQ.details}</CardText>
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
