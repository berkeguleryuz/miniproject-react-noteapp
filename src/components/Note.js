import { NotesContext } from '../contexts/notesContext';
import { useContext } from "react";

const Note = ({note}) => {
    const {dispatch} = useContext(NotesContext);
    const removeNote = (id) => {
    dispatch({
        type: "REMOVE_NOTE",
        id: id
    })
    // setNotes(notes.filter((note) => note.id !== id));
}

return (
    <li onClick={() => removeNote(note.id)} key={note.id}>
        <h1 className="title">
            {note.title}
        </h1>
        <p>{note.description}</p>
    </li>
);
}

export default Note;