import React from "react";
import { Col, Row, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import VerticalSplitOutlinedIcon from "@mui/icons-material/VerticalSplitOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import "./dashboardCard.css";
import { Avatar } from "@mui/material";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import IosShareIcon from "@mui/icons-material/IosShare";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ArchiveIcon from "@mui/icons-material/Archive";
import HubIcon from "@mui/icons-material/Hub";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";

const firstQs = [
  {
    name: "Capacity Metrics",
    src: <DonutSmallIcon style={{ fontSize: "80px" }} />,
    details:
      "Capacity Metrics shows the available and used capacity of the storage system.",
    link: "/",
  },
  {
    name: "Performance Metrics",
    src: <SpeedIcon style={{ fontSize: "80px" }} />,
    details:
      "Performance Metrics shows the performance data of the storage system.",
    link: "/",
  },
  {
    name: "Alerts",
    src: <ReportProblemIcon style={{ fontSize: "80px" }} />,
    details: "Alerts display notifications about system errors or warnings.",
    link: "/",
  },
  {
    name: "CIFS/Windows shares",
    src: <IosShareIcon style={{ fontSize: "80px" }} />,
    details: "CIFS/Windows shares provide access to files on the network.",
    link: "/",
  },
  {
    name: "SAN Storage",
    src: <StorageIcon style={{ fontSize: "80px" }} />,
    details: "SAN Storage provides high-speed data storage.",
    link: "/",
  },
  {
    name: "NFS/Linux Shares",
    src: <VerticalSplitOutlinedIcon style={{ fontSize: "80px" }} />,
    details: "NFS/Linux Shares provide access to files for Linux systems.",
    link: "/",
  },
  {
    name: "Object Storage(S3)",
    src: <Inventory2Icon style={{ fontSize: "80px" }} />,
    details:
      "Object Storage(S3) offers scalable storage for large amounts of data.",
    link: "/",
  },
  {
    name: "Storage Archival",
    src: <ArchiveIcon style={{ fontSize: "80px" }} />,
    details: "Storage Archival is used for long-term data retention.",
    link: "/",
  },
  {
    name: "SAN - Switches / Zoning",
    src: <SettingsInputCompositeIcon style={{ fontSize: "80px" }} />,
    details:
      "SAN - Switches / Zoning manage connections in a storage area network.",
    link: "/",
  },
  {
    name: "SLI",
    src: <QueryStatsOutlinedIcon style={{ fontSize: "80px" }} />,
    details:
      "SLI (Service Level Indicator) monitors the performance of services.",
    link: "/",
  },
  {
    name: "Topology",
    src: <HubIcon style={{ fontSize: "80px" }} />,
    details: "Topology shows the arrangement of network devices.",
    link: "/",
  },
];

function Dashboard() {
  return (
    <>
      {/* <div className="firstline" style={{ marginTop: "3em" }}>
        <Row className="row">
          {firstQs.map((firstQ, index) => (
            <Col key={index} xs="12" sm="6" lg="4">
              <Link
                to={firstQ.link}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card className="card">
                  <CardBody className="body">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          height: "30%",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingTop: "10px",
                        }}
                      >
                        <Avatar
                          sx={{
                            width: "70px",
                            height: "70px",
                            bgcolor: "transparent",
                            color: "#048888d3",
                            padding: "10px",
                          }}
                        >
                          {firstQ.src}
                        </Avatar>
                      </div>
                      <div style={{ textAlign: "center", marginTop: "1em" }}>
                        <CardTitle tag="h4" style={{ fontSize: "1.2rem" }}>
                          {firstQ.name}
                        </CardTitle>
                        <CardText>{firstQ.details}</CardText>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div> */}

      <div className=" grid grid-cols-1 md:grid-cols-3  gap-4 p-8">
        {firstQs.map((firstQ, index) => {
          return (
            <div className=" bg-white transition-all duration-200 shadow-sm hover:shadow-xl hover:shadow-[#04888833] p-8 border border-[#048888d3] rounded-lg flex items-center justify-between">
              <div className="max-w-96">
                <h1 className=" text-[#048888d3] text-2xl font-semibold mb-2">
                  Client Access Management
                </h1>
                <p className=" mb-4 font-medium text-gray-600">
                  You have done 72% more sales today. Check your new badge in
                  your profile.
                </p>
                <a
                  href={"/"}
                  className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-[#048888d3] focus:outline-none focus:ring active:text-[#048888d3] hover:bg-[#048888d3] hover:text-white"
                >
                  <span className="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span className="text-sm font-medium transition-all group-hover:ms-4">
                    {" "}
                    Manage Access{" "}
                  </span>
                </a>
              </div>
              <div className=" w-40 ">
                <img src="/server.svg" alt="" className=" w-full h-auto" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
