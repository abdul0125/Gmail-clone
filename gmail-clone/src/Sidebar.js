import React from 'react'
import './Sidebar.css'
import SendIcon from '@mui/icons-material/Send';
import InboxIcon from '@mui/icons-material/Inbox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {

    const component =(IconSidebar,Name_options,Count)=>(
        <div className='Sidebar_component'>
            <IconSidebar style={{marginRight:15}}/>
            {/* <p> */}
                {Name_options}
                {/* </p> */}<div style={{marginRight:150}}></div>
                {Count?+Count:""}
        </div>
    )

  return (
    <div className='Sidebar'>


            
        <div className='Compose' >
        
            <AddIcon/>

            Compose

        </div>
            


        {component(InboxIcon,'Inbox')}
        {component(StarIcon,'Starred')}
        {component(AccessTimeIcon,'Snoozed')}
        {component(LabelImportantIcon,'Important')}
        {component(SendIcon,'sent')}

    
    

    </div>
  )
}

export default Sidebar