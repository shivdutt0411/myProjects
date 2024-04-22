import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Box, Typography ,styled} from '@mui/material';

const BulbStyle = styled(LightbulbOutlinedIcon)({
    fontSize:"120px",
    opacity:".1"

})

const TextStyle = styled(Typography)({
    color:"#80868b",
    fontSize: "22px"
})

const BoxStyle = styled(Box)({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginTop: "20vh"
})

export default function EmptyNote(){
    return(
       <BoxStyle>
            <BulbStyle />
            <TextStyle>Notes you add appear here</TextStyle>
       </BoxStyle>
    )
}