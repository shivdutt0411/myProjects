import * as React from 'react';
import {List,styled} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Link } from 'react-router-dom';

const StyledButton = styled(ListItemButton)({
    '&:hover':{
        backgroundColor:"#F4B400"
    }
})

export default function NavElement({open}) {
    const navList = [
        {id:1, name:"Notes", icon:<LightbulbOutlinedIcon />, route:"/"},
        {id:4, name:"Archive", icon:<ArchiveOutlinedIcon />, route:"/archive"},
        {id:5, name: "Trash", icon:<DeleteOutlinedIcon />,route:"/delete"}
    ]
    return <List>
        {navList.map((ele) => (
            <ListItem key={ele.id} disablePadding sx={{ display: 'block' }}>
                <Link to={ele.route} style={{textDecoration:'none', color:'inherit'}}>
                <StyledButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                    }} 
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        {ele.icon}
                    </ListItemIcon>
                    <ListItemText primary={ele.name} sx={{ opacity: open ? 1 : 0 }} />
                </StyledButton>
                </Link>
            </ListItem>
        ))}
    </List>
}