import React from 'react';

// Components
import "./Header.css";

// Materialized Icons
import FlagIcon from '@material-ui/icons/Flag';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

function Header(){
    return(
        <div className="header">

            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" alt=""/>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right"></div>
        </div>
    );
}

export default Header;