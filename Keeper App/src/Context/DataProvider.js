import { useContext, createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
    const [notes, setNotes] = useState([]);
    const [archiveNotes, setArchiveNotes] = useState([]);
    const [deleteNotes, setDeleteNotes] = useState([]);
    

    useEffect(() => {
        try {
            const note = JSON.parse(window.localStorage.getItem('note'));
            
            const archive = JSON.parse(localStorage.getItem('archive'));
            const deleteNote = JSON.parse(localStorage.getItem('delete'));
            setNotes(note);
            setArchiveNotes(archive);
            setDeleteNotes(deleteNote);
        } catch (error) {
            console.error('Error while parsing data from local storage:', error);
            // Optionally, handle the error, such as setting default values
            setNotes([]);
            setArchiveNotes([]);
            setDeleteNotes([]);
        }
    }, []);
    
    useEffect(() => {
        try {
            localStorage.setItem('note', JSON.stringify(notes));
        } catch (error) {
            console.error('Error while serializing notes data:', error);
            // Optionally, handle the error
        }
    }, [notes]);
    
    useEffect(() => {
        try {
            localStorage.setItem('archive', JSON.stringify(archiveNotes));
        } catch (error) {
            console.error('Error while serializing archiveNotes data:', error);
            // Optionally, handle the error
        }
    }, [archiveNotes]);
    
    useEffect(() => {
        try {
            localStorage.setItem('delete', JSON.stringify(deleteNotes));
        } catch (error) {
            console.error('Error while serializing deleteNotes data:', error);
            // Optionally, handle the error
        }
    }, [deleteNotes]);
    


    return (
        <DataContext.Provider value={{ notes, setNotes, archiveNotes, setArchiveNotes, deleteNotes, setDeleteNotes }}>
            {children}

        </DataContext.Provider>
    )
}



