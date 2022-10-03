import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CasinoIcon from "@mui/icons-material/Casino";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import NotesIcon from "@mui/icons-material/Notes";
// import { NotesIcon, LogoutIcon } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span> Dashboard</span>
          </li>
          <li>
            <GroupIcon className="icon" />
            <span> Users</span>
          </li>
          <li>
            <ConfirmationNumberIcon className="icon" />
            <span> Plans</span>
          </li>
          <li>
            <CasinoIcon className="icon" />
            <span> Games</span>
          </li>
          <p className="title">OTHERS</p>
          <li>
            <SettingsIcon className="icon" />
            <span> Settings</span>
          </li>
          <li>
            <NotesIcon className="icon" />
            <span> Logs</span>
          </li>
          <p className="title">LOGOUT</p>
          <li>
            <LogoutIcon className="icon" />
            <span> Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="theme"></div>
        <div className="theme"></div>
        <div className="theme"></div>
      </div>
    </div>
  );
}

export default Sidebar;
