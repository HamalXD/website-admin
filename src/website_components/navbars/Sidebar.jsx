import React from 'react'
import { useState } from 'react';
import { MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, Typography, useTheme} from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../Theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem active={selected === title} style={{color : colors.grey[100]}} onClick={()=> setSelected(title)} icon={icon}>
    <Typography>{title}</Typography>
    <Link to={to}/>
    </MenuItem>
  )
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected,setSelected] = useState("Dashboard");

  return (
    <Box sx = {{"& .pro-sidebar-inner": {background: `${colors.primary[400]} !important`},
    "& .pro-icon-wrapper":{backgroundColor: "transparent !important"},
    "& .pro-inner-item": {padding: "5px 35px 5px 20px !important"},
    "& .pro-inner-item: hover": {color:"#868dfb !important"},
    "& .pro-menu-item.active": {color:"#6870fa !important"}
    }}>
      {/* User */}
        <Box mb="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img alt='profile-user' width="100px" height="100px" src={`../../3cbe358da04295d7346fa8aed48fa8c4.jpg`} style={{cursor: "pointer" ,borderRadius : "50%"}}/>
          </Box>
          <Box textAlign="center">
            <Typography variant='h2' color={colors.grey[100]} fontWeight="bold" sx={{m: "10px 0 0 0"}}>Samman Hamal</Typography>
            <Typography variant='h3' color={colors.greenAccent[500]}>Main Administrator</Typography>
          </Box>
        </Box>
      {/* Menu*/}
      <Box paddingLeft="10%">
        <Link to="/dashboard">
        <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
        </Link>
        <Typography variant='h6' color= {colors.grey[300]} sx={{m: "15px 0 0 0"}}>Data</Typography>
        <Link to="/team">
        <Item title="Manage Teams" to="/team" icon={<GroupsOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
        </Link>
        <Link to="/contacts">
        <Item title="Contacts" to="/contacts" icon={<ContactsOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
        </Link>
        <Link to="/invoices">
        <Item title="Invoice" to="/invoices" icon={<ReceiptLongOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
        </Link>
        <Typography variant='h6' color= {colors.grey[300]} sx={{m: "15px 0 0 0"}}>Pages</Typography>
        <Link to="/form">
        <Item title="User Forms" to="/forms" icon={<AccountCircleOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
        </Link>
        <Link to="/FAQ">
        <Item title="FAQ" to="/faq" icon={<HelpOutlineOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
        </Link>
      </Box>
    </Box>
  )
}

export default SideBar;