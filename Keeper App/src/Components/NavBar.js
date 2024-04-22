import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const HeaderStyle = styled(Typography)({
    color: "#5f6368",
    fontSize: "24px",
    marginLeft: "20px"

})
export default function HeaderBar({AppBar,open, handleDrawerOpen}) {
    const logo = "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";
    return <AppBar open={open}>
        <Toolbar>
            <IconButton
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                    marginRight: 2,
                }}
            >
                <MenuIcon />
                
            </IconButton>
            <img src={logo} alt="logo" style={{width: 30}}></img>
            <HeaderStyle>Keep</HeaderStyle>
        </Toolbar>
    </AppBar>
}