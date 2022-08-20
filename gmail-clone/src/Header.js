import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src='https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg' alt='gmail' />


            </div>
            <div className='header_middle'>
                <SearchIcon />
                <Input disableUnderline type='text' placeholder='Search mail' style={{ width: '100%' }} />
                <ArrowDropDownIcon />
            </div>
            <div className='header_right'>
                <AppsIcon/>
                <NotificationsIcon/>
                <Avatar
                    alt="Remy Sharp"
                    src="data:image/jpeg;base64,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"
                    sx={{ width: 36, height: 36 }}
                />
            </div>


        </div>
    )
}

export default Header