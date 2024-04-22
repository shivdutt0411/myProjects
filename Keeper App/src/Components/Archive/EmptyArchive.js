import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { Box, Typography ,styled} from '@mui/material';

const BulbStyle = styled(ArchiveOutlinedIcon)({
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

export default function EmptyArchive(){
    return(
       <BoxStyle>
            <BulbStyle />
            <TextStyle>Your archived notes appear here</TextStyle>
       </BoxStyle>
    )
}