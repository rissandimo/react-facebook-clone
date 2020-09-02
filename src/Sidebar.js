import React from 'react';

// Components
import SidebarRow from './SidebarRow';

// Materialize
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import './Sidebar.css';
function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarRow src='https://avatars1.githubusercontent.com/u/5117934?s=460&u=b23a7d00e05bb10509a3ca7d8db9d3f1b6333e94&v=4' title='Omid Nassir'/>
            <SidebarRow 
              Icon={LocalHospitalIcon}
               title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
        </div>
    );
}

export default Sidebar;