import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Box, Typography ,styled} from '@mui/material';

const BulbStyle = styled(DeleteOutlinedIcon)({
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

export default function EmptyDelete(){
    return(
       <BoxStyle>
            <BulbStyle />
            <TextStyle>No notes in trash</TextStyle>
       </BoxStyle>
    )
}