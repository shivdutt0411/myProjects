import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import {RestoreFromTrashOutlined, DeleteForeverOutlined} from '@mui/icons-material';

import { DataContext } from '../../Context/DataProvider';
import {useContext} from "react";


const StyledCard = styled(Card)({
    width:"240px",
    margin:"8px",
    boxShadow:"none",
    border:"1px solid #e0e0e0",
    borderRadius:"8px"
})

export default function DisplayDelete({note}) {
  const{notes, setNotes, setArchiveNotes,deleteNotes, setDeleteNotes} = useContext(DataContext);
  function handleRestore(){
    const updatedNotes =deleteNotes.filter(data=>data.id!=note.id);
    setNotes(prev=>([note,...prev]));
    setDeleteNotes(updatedNotes);

  }

  
  function handlePermanentDelete(){
    const updatedNotes =deleteNotes.filter(data=>data.id!=note.id);
    setDeleteNotes(updatedNotes);

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
      <RestoreFromTrashOutlined  fontSize="small" style={{marginLeft:"auto"}} sx={{'&:hover' :{cursor:'pointer'}}} onClick = {handleRestore}/>
      <DeleteForeverOutlined fontSize="small" sx={{'&:hover' :{cursor:'pointer'}}} onClick={handlePermanentDelete}/>
       
      </CardActions>
    </StyledCard>
  );
}