import "./Topbar.css";
import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';



 const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Gamaadmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsIcon />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon />
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon />
                </div>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="tA" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar;