import React from "react";
import { Box} from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockContacts} from "../../mockdata/mockdata";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    // To access the teams using contacts
    const columns = [{ field: "id",headerName: "ID", flex: 0.5},
    {field: "registrarId", headerName: "Registrar ID"},
    {field: "name",headerName: "NAMES", flex : 1, cellClassName: "name-column--cell"},
    {field: "age",headerName: "AGE", type:"number",headerAlign: "left",align: "left"},
    {field: "phone",headerName: "PHONE NUMBER", flex : 1},
    {field:"address",headerName:"ADDRESS", flex: 1},
    {field:"city",headerName:"City", flex: 1},
    {field:"zipCode",headerName:"Zip Code", flex: 1},
    // { field: "access",headerName: "ACCESS", flex: 1, renderCell: ({row:{access}}) =>  { return (
    //     <Box width="60%" m="0-auto" p="5px" display = "flex" justifyContent="center" backgroundColor={access ==="admin" ? colors.greenAccent[600]:colors.greenAccent[700]} borderRadius="4px">
    //         {/* {access ==="admin" && <AdminPanelSettingsOutlinedIcon/>}
    //         {access ==="manager" && <LockOpenOutlinedIcon/>}
    //         {access ==="user" && <LockOutlinedIcon/>} */}
    //         {/* <Typography color = {colors.grey[100]} sx={{ml:"5px"}}>
    //             {access}
    //         </Typography> */}
    //     </Box>
    // )}}
];

    return(
        <Box m="20px">
            <Header title="Contacts" subtitle="List of Contacts"/>
            <Box m="40px 0 0 0" height="75vh" sx={{"& .MuiDataGrid-root": {border: "none"},
            "& .MuiDataGrid-cell":{borderBottom:"none"},
            "& .name-column--cell": {color: colors.greenAccent[300]},
            "& .MuiDataGrid-columnHeaders":{backgroundColor: colors.blueAccent[700], borderBottom:"none"},
            "& .MuiDataGrid-virtualScroller": {backgroundColor: colors.primary[400]},
            "& .MuiDataGrid-footerContainer": {borderTop: "none", backgroundColor: colors.blueAccent[700]},
            "& .MuiDataGrid-toolbarContainer .MuiButton-text":{color: `${colors.grey[100]}`}
            }}>
                {/* Accesssing the contacts */}
                <DataGrid rows={mockContacts} columns={columns} components={{Toolbar: GridToolbar}}/>
            </Box>
        </Box>
    )
}

export default Contacts;