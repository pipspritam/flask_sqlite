import React from "react";
import { Grid, Typography, Link, Paper } from "@mui/material";
import serverSVG from "./server.svg";


const firstQs = [
  "Capacity Metrics",
  "Performance Metrics",
  "Alerts",
  "CIFS/Windows shares",
  "SAN Storage",
  "NFS/Linux Shares",
  "Object Storage(S3)",
  "Storage Archival",
  "SAN - Switches / Zoning",
  "SLI",
  "Topology",
];

function Dashboard() {
  return (
    <Grid container spacing={4} sx={{ padding: 8 }}>
      {firstQs.map((firstQ, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "100%",
                width: "100%",
                transition: "all 0.2s",
                "&:hover": {
                  boxShadow: "0px 0px 8px rgba(4, 136, 136, 0.2)",
                },
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "50%", padding: "16px" }}>
                <div>
                  <Typography variant="h5" sx={{ color: "#048888d3", mb: 2 }}>
                    {firstQ}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: "gray" }}>
                    {`Details for ${firstQ}`}
                  </Typography>
                </div>
                <div>
                  <Link
                    href="/"
                    underline="none"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      border: "1px solid #048888d3",
                      borderRadius: 4,
                      p: "8px 16px",
                      color: "#048888d3",
                      "&:hover": {
                        backgroundColor: "#048888d3",
                        color: "white",
                      },
                    }}
                  >
                    Manage Access
                  </Link>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "50%" }}>
                <img src={serverSVG} alt="Server" style={{ maxWidth: "100%", maxHeight: "100%" }} />
              </div>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Dashboard;
