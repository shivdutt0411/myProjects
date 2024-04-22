import { useContext, createContext, useState } from "react";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
    const[notes, setNotes] = useState([]);
    const[archiveNotes, setArchiveNotes] = useState([]);
    const[deleteNotes, setDeleteNotes] = useState([]);
    return (
        <DataContext.Provider value={{notes, setNotes, archiveNotes, setArchiveNotes,deleteNotes, setDeleteNotes}}>
            {children}

        </DataContext.Provider>
    )
}

