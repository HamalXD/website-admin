import React from "react";
import { Box, useTheme } from "@mui/system";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockData} from "../../mockdata/mockdata"
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    // To access the teams using mock data
    const columns = [{ field: "id",headerName: "ID"},
    { field: "name",headerName: "NAMES", flex : 1, cellClassName: "name-column--cell"},
    { field: "age",headerName: "AGE", type:"number",headerAlign: "left",align: "left"},
    { field: "phone",headerName: "PHONE NUMBER", flex : 1},
    { field: "access",headerName: "ACCESS", flex: 1, renderCell: ({row:{access}}) =>  { return (
        <Box width="60%" m="0-auto" p="5px" display = "flex" justifyContent="center" backgroundColor={access ==="admin" ? colors.greenAccent[600]:colors.greenAccent[700]} borderRadius="4px">
            {access ==="admin" && <AdminPanelSettingsOutlinedIcon/>}
            {access ==="manager" && <LockOpenOutlinedIcon/>}
            {access ==="user" && <LockOutlinedIcon/>}
            <Typography color = {colors.grey[100]} sx={{ml:"5px"}}>
                {access}
            </Typography>
        </Box>
    )}}];

    return(
        <Box m="20px">
            <Header title="Team" subtitle="Team Members"/>
            <Box m="40px 0 0 0" height="75vh" sx={{"& .MuiDataGrid-root": {border: "none"},
            "& .MuiDataGrid-cell":{borderBottom:"none"},
            "& .name-column--cell": {color: colors.greenAccent[300]},
            "& .MuiDataGrid-columnHeaders":{backgroundColor: colors.blueAccent[700], borderBottom:"none"},
            "& .MuiDataGrid-virtualScroller": {backgroundColor: colors.primary[400]},
            "& .MuiDataGrid-footerContainer": {borderTop: "none", backgroundColor: colors.blueAccent[700]}
            }}>
                {/* Accessing the teams */}
                <DataGrid rows={mockData} columns={columns}/>
            </Box>
        </Box>
    )
}

export default Team;