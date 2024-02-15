import React from 'react';
import { Col, Row, Card,  CardBody, CardText, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

import AddchartIcon from '@mui/icons-material/Addchart';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import './dashboardCard.css';
import { Avatar } from '@mui/material';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import IosShareIcon from '@mui/icons-material/IosShare';


const firstQs = [
    {
        name: 'Capacity Metrics',
        src: <DonutSmallIcon style={{ fontSize: '100px' }} />,
        text: [{ name: 'Reports' }],
        details: 'Capacity Metrics shows the capacity of the storage system and the capacity of the storage system that is used. ',
        link: '/'
    },
    {
        name: 'Performance Metrics',
        src: <AddchartIcon style={{ fontSize: '100px' }} />,
        text: [{ name: 'Charts' }],
        details: 'Capacity Metrics shows the capacity of the storage system and the capacity of the storage system that is used. ',
        link: ''
    },
    {
        name: 'Alerts',
        src: <ReportProblemIcon style={{ fontSize: '100px' }} />,
        text: [{ name: 'Others' }],
        details: 'Capacity Metrics shows the capacity of the storage system and the capacity of the storage system that is used. ',
        link: ''
    },
    {
        name: 'CIFS/Windows shares',
        src: <IosShareIcon style={{ fontSize: '100px' }} />,
        text: [{ name: 'Reports' }],
        details: 'Capacity Metrics shows the capacity of the storage system and the capacity of the storage system that is used. ',
        link: '/'
    }
];

const quickLinks = [
    {
        name: 'SAN Storage',
        src: <VerticalSplitOutlinedIcon style={{ fontSize: '100px' }} />,
        text: [{ name: 'Reports' }],
        details: 'Capacity Metrics shows the capacity of the storage system and the capacity of the storage system that is used. ',
        link: '/reports'
    },
    {
        name: 'NFS/Linux Shares',
        src: <VerticalSplitOutlinedIcon style={{ fontSize: '100px' }} />,
        text: [{ name: 'Reports' }],
        details: 'Capacity Metrics shows the capacity of the storage system and the capacity of the storage system that is used. ',
        link: '/reports'
    },
    {
        name: 'Object Storage(S3)',
        src: <VerticalSplitOutlinedIcon style={{ fontSize: '100px' }} />,
        text: [{ name: 'Reports' }],
        details: 'Capacity Metrics shows the capacity of the storage system and the capacity of the storage system that is used. ',
        link: '/reports'
    },
    {
        name: 'Storage Archival',
        src: <VerticalSplitOutlinedIcon style={{ fontSize: '100px' }} />,
        text: [{ name: 'Reports' }],
        details: 'Capacity Metrics shows the capacity of the storage system and the capacity of the storage system that is used. ',
        link: '/reports'
    },
    {
        name: 'SAN - Switches / Zoning',
        src: <VerticalSplitOutlinedIcon style={{ fontSize: '100px' }} />,
        text: [{ name: 'Reports' }],
        details: 'Capacity Metrics shows the capacity of the storage system and the capacity of the storage system that is used. ',
        link: '/reports'
    }
];

const serviceCatalogs = [
    {
        name: 'SLI',
        src: <QueryStatsOutlinedIcon style={{ fontSize: '200px' }} />,
        text: [{ name: 'Others' }],
        details: 'Capacity Metrics shows the capacity of the storage system and the capacity of the storage system that is used. ',
        link: '/approval'
    },
    {
        name: 'Topology',
        src: <QueryStatsOutlinedIcon style={{ fontSize: '200px' }} />,
        text: [{ name: 'Others' }],
        details: 'Capacity Metrics shows the capacity of the storage system and the capacity of the storage system that is used. ',
        link: '/approval'
    }
];


function Dashboard() {
    return (
        <div>
            <div className="firstline" style={{ marginTop: '3em' }}>
                <Row className="row">
                    {firstQs.map((firstQ) => (
                        <Col xs="12" sm="6" lg="4" key={firstQ.name}>
                            <Link to={firstQ.link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Card className="card">
                                    <CardBody className="body">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                                            <div style={{ height: '30%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Avatar
                                                    sx={{
                                                        width: '70px',
                                                        height: '70px',
                                                        borderRadius: '0',
                                                        bgcolor: 'transparent',
                                                        color: '#048888d3'
                                                    }}
                                                >
                                                    {firstQ.src}
                                                </Avatar>
                                            </div>
                                            <div style={{ textAlign: 'center', marginTop: '1em' }}>
                                                <CardTitle tag="h4">{firstQ.name}</CardTitle>
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
            <div className="secondLine" style={{ marginTop: '3em' }}>
                <Row className="row">
                    {quickLinks.map((quicklink) => (
                        <Col xs="12" sm="6" lg="4" key={quicklink.name}>
                            <Link to={quicklink.link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Card className="card secondCard">
                                    <CardBody className="body">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                                            <div style={{ height: '30%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Avatar
                                                    sx={{
                                                        width: '70px',
                                                        height: '70px',
                                                        borderRadius: '0',
                                                        bgcolor: 'transparent',
                                                        color: '#048888d3'
                                                    }}
                                                >
                                                    {quicklink.src}
                                                </Avatar>
                                            </div>
                                            <div style={{ textAlign: 'center', marginTop: '1em' }}>
                                                <CardTitle tag="h4">{quicklink.name}</CardTitle>
                                                <CardText>{quicklink.details}</CardText>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="newTable" style={{ marginTop: '3em' }}>
                <Row className="row">
                    {serviceCatalogs.map((servicecatalog) => (
                        <Col xs="12" sm="6" lg="4" key={servicecatalog.name}>
                            <Link to={servicecatalog.link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Card className="card thirdCard">
                                    <CardBody className="body">
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                                            <div style={{ height: '30%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Avatar
                                                    sx={{
                                                        width: '70px',
                                                        height: '70px',
                                                        borderRadius: '0',
                                                        bgcolor: 'transparent',
                                                        color: '#048888d3'
                                                    }}
                                                >
                                                    {servicecatalog.src}
                                                </Avatar>
                                            </div>
                                            <div style={{ textAlign: 'center', marginTop: '1em' }}>
                                                <CardTitle tag="h4">{servicecatalog.name}</CardTitle>
                                                <CardText>{servicecatalog.details}</CardText>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}




export default Dashboard;