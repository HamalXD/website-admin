import React from "react";
import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopNavBar from "./website_components/navbars/TopNavbar";
import { Routes, Route } from "react-router-dom";
import SideBar from "./website_components/navbars/Sidebar";
import Dashboard from "./website_components/dashboard/Dashboard";
import Team from "./website_components/teams/Teams";
import Contacts from "./website_components/Contacts/Contacts";
import Invoices from "./website_components/invoices/Invoices"
import Form from "./website_components/forms/forms";
import FAQ from "./website_components/FAQ/faq";


function App() {
  const [theme,colorMode] = useMode();

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app">
        <SideBar/>
        <main className="content">
          <TopNavBar/>
          <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;


