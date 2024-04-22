import SwipeDrawer from "./SwipeDrawer";
import Notes from "./Notes/Note";
import Archive from "./Archive/Archive";
import Delete from "./Delete/Delete";
import {Box} from '@mui/material';
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function Home(){
    return (
        <BrowserRouter>
        <Box style={{display:"flex",width:"100%"}}>
           <SwipeDrawer />
           <Routes>
              <Route path="/" element={<Notes />}></Route>
              <Route path="/archive" element={<Archive />}></Route>
              <Route path="/delete" element={<Delete />}></Route>
           </Routes>
    
    </Box>
    </BrowserRouter>
    )
}