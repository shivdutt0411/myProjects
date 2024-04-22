
import {Box, TextField,styled,useTheme,Grid} from '@mui/material';
import { DataContext } from "../../Context/DataProvider";
import { useContext } from "react";
import DisplayDelete from "./DisplayDelete";
import EmptyDelete from "./EmptyDelete";


const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
export default function Delete(){
  const {deleteNotes} = useContext(DataContext);
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
         {deleteNotes.length?<Grid container style={{marginTop:16}}>
         {deleteNotes.map(note=><Grid key = {note.id} item><DisplayDelete key={note.id} note={note} /></Grid>)}
         </Grid> : <EmptyDelete />}


         </Box>
    )
}