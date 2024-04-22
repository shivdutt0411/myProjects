import {Box, TextField,styled,useTheme} from '@mui/material';
import {useState, useRef, useContext} from "react";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { DataContext } from '../../Context/DataProvider';

import {v4 as uuid} from "uuid"



const BoxStyle = styled(Box)({
    display:"flex",
    flexDirection:"column",
    width:"600px",
    boxShadow:"0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/15%)",
    padding:"10px 15px",
    borderRadius: "8px",
    borderColor: "#e0e0e0",
    margin:"auto",
    minHeight:"30px",
    

})



export default function Input(){
    const[hidden, setHidden] = useState(true);

    const{notes, setNotes} = useContext(DataContext);

    const[title, setTitle] = useState("");
    const[note, setNote] = useState("");
    const BoxRef = useRef();

    function onTextAreaClick(){
        setHidden(false);
        BoxRef.current.style.minHeight = "70px"
    }
    function handleClickAway(){
        setHidden(true);
        BoxRef.current.style.minHeight = "30px";
        if(title || note){
        setNotes(prev=>([{id:uuid(), title:title, note:note},...prev]));
       
        setTitle("");
        setNote("");}



    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
        <BoxStyle ref = {BoxRef}>


            <TextField name ="title" value={title} placeholder='Title' variant='standard' InputProps={{disableUnderline: true}} style={{marginBottom: 10, display:hidden?"none":"block"}} onChange={(e)=>setTitle(e.target.value)}/>
            <TextField name="note" value={note} placeholder='Take a note...' variant="standard" InputProps={{disableUnderline:true}} onClick= {onTextAreaClick} multiline onChange={(e)=>setNote(e.target.value)}/>
        </BoxStyle>
        </ClickAwayListener>
    )
}
