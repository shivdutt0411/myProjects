import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataContext } from '../../Context/DataProvider';
import {useContext, useEffect} from "react";


const StyledCard = styled(Card)({
    width:"240px",
    margin:"8px",
    boxShadow:"none",
    border:"1px solid #e0e0e0",
    borderRadius:"8px"
})

export default function DisplayArchive({note}) {
  const{notes, setNotes, archiveNotes,setArchiveNotes,deleteNotes, setDeleteNotes} = useContext(DataContext);
  function handleArchive(){
    const updatedNotes =archiveNotes.filter(data=>data.id!=note.id);
    setNotes(prev=>([note,...prev]));
    setArchiveNotes(updatedNotes);

  }

  
  function handleDelete(){
    const updatedNotes =archiveNotes.filter(data=>data.id!=note.id);
    setDeleteNotes(prev=>([note,...prev]));
    setArchiveNotes(updatedNotes);

  }
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div">
          {note.title}
        </Typography>
        <Typography variant="body2">
            {note.note}
        </Typography>
      </CardContent>
      <CardActions>
      <UnarchiveIcon fontSize="small" style={{marginLeft:"auto"}} sx={{'&:hover' :{cursor:'pointer'}}} onClick = {()=>handleArchive()}/>
      <DeleteOutlinedIcon fontSize="small" sx={{'&:hover' :{cursor:'pointer'}}} onClick={()=>handleDelete()}/>
       
      </CardActions>
    </StyledCard>
  );
}