import  React from 'react';
import './styles/Note.css';

const NoteListView =(props) =>{
    console.log(props.noteList);

    return (
        <div className="notelist-wrapper">                      
            {/* <h1>Your Notes:</h1> */}
            <div className="note-cards-container">               
                {props.noteList.map(note => (
                    
                    <div key={note.id} className="note-card-container">
                        <i id="pin"></i>
                        <div className="note-card"
                            onClick={(e)=>props.handleNoteClick(e, note)}
                            >
                            
                            <h2 className="mdhtmlform-html note-title"
                            data-mdhtml-group="0">{note.title}</h2>
                            <hr></hr>
                            <p className="mdhtmlform-html note-textBody"
                            data-mdhtml-group="1">{note.content}</p>
                        </div>
                    </div>   
 
                    
                ))}
            </div>
        </div>
    )
}

export default NoteListView;