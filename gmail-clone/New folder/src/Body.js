import React from 'react'
import './Body.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import InboxIcon from '@mui/icons-material/Inbox';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



function Body() {

    const BodyHeader = (Icon, Name, Color) => (
        <div className='body_header' style={{ color: Color, borderBottom: `2px solid ${Color}` }}>
            <Icon style={{ paddingRight: 22 }} />
            <h4>{Name}</h4>

        </div>
    )
    const MailComponent = (subject, content, time, sender) => (
        <div className='mail'>

            <div className='mail_left'>
                <CheckBoxOutlineBlankIcon style={{ paddingRight: 22 }} />
                <StarBorderIcon style={{ paddingRight: 22 }} />
                <LabelImportantIcon style={{ paddingRight: 50 }} />
                <h4 style={{ color: 'black' }} >{sender}</h4>

            </div>


            <div style={{ display: "flex", marginLeft: -310 }}>

                <h4>{subject}</h4>
                <p style={{ color: 'gray', marginLeft: 10 }}>{content}</p>
            </div>

            <h4>{time}..</h4>


        </div>
    )

    return (
        <div className='Body'>
            <div className='body_top_header' style={{ display: "flex", justifyContent: "space-between" }}>
                <div >
                    <CheckBoxOutlineBlankIcon style={{ paddingLeft: 30 }} />
                    <ArrowDropDownIcon style={{ paddingRight: 25 }} />
                    <RefreshIcon style={{ paddingRight: 25 }} />
                    <MoreVertIcon />

                </div>
                <div>
                    <ChevronLeftIcon />
                    <ChevronRightIcon />
                    <SettingsIcon style={{ paddingLeft: 30, paddingRight: 40 }} />
                </div>

            </div>
            <div className='icons_bar'>
                {BodyHeader(InboxIcon, 'Primary', 'red')}
                {BodyHeader(GroupIcon, 'Social')}
                {BodyHeader(LocalOfferIcon, 'Promotions')}
                {BodyHeader(InfoIcon, 'Updates')}

            </div>

            {MailComponent("This is the subject", " This is the content of the mail", "14:29 PM", "kick butawski")}
            {MailComponent("This is the subject", " This is the content of the mail", "14:29 PM", "kick butawski")}
            {MailComponent("This is the subject", " This is the content of the mail", "14:29 PM", "kick butawski")}
            {MailComponent("This is the subject", " This is the content of the mail", "14:29 PM", "kick butawski")}
            {MailComponent("This is the subject", " This is the content of the mail", "14:29 PM", "kick butawski")}
            {MailComponent("This is the subject", " This is the content of the mail", "14:29 PM", "kick butawski")}


        </div>
    )
}

export default Body