import Input from "./input"
import { Box, TextField, styled, useTheme, Grid } from '@mui/material';
import { DataContext } from "../../Context/DataProvider";
import { useContext } from "react";
import DisplayNotes from "./DispalyNote";
import EmptyNote from "./EmptyNote";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function Notes() {
  const { notes, setNotes } = useContext(DataContext);
  function onDragEnd(result) {
    const {source, destination, type} = result
    if (!destination) {
      return;
    }
    if(source.droppableId===destination.droppableId && source.index===destination.index) return;

    const items = [...notes];
    const sourceIndex = source.index;
    const destinationIndex = destination.index;
    const[removed] = items.splice(sourceIndex,1);
    items.splice(destinationIndex,0,removed);


    setNotes(items);




  }
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Input />
      {notes.length ?
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <Grid container style={{ marginTop: 16 }}
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {
                  notes.map((note, index) =>
                    <Draggable key={note.id} draggableId={note.id} index={index}>
                      {(provided, snapshot) => (
                        <Grid item
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          <DisplayNotes note={note} />
                          
                        </Grid>
                        
                      )}
                     
                    </Draggable>
                    
                  )}
                  {provided.placeholder}
              </Grid>
              
            )}
            
          </Droppable>
        </DragDropContext> : <EmptyNote />}


    </Box>
  )
}