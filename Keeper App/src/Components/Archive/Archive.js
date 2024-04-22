
import {Box, TextField,styled,useTheme,Grid} from '@mui/material';
import { DataContext } from "../../Context/DataProvider";
import { useContext } from "react";
import DisplayArchive from "./DisplayArchive";
import EmptyArchive from "./EmptyArchive";


const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
export default function Archive(){
  const {archiveNotes} = useContext(DataContext);
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
         {archiveNotes.length?<Grid container style={{marginTop:16}}>
         {archiveNotes.map(note=><Grid key = {note.id} item><DisplayArchive key={note.id} note={note} /></Grid>)}
         </Grid> : <EmptyArchive />}


         </Box>
    )
}