import  React from 'react';
import './styles/Note.css';

const CreateNoteView = props =>{
    return (
        <div className="create-edit-form">
            <h1>Create New Note:</h1>
            <br></br>
            <textarea  type="text"
                    className="mdhtmlform-md title-input"
                    data-mdhtmlform-group="0"
                    name="title"
                    value={props.note.title}
                    placeholder="Note Title"
                    onChange={props.handleInput}/>
            <br></br>
            <textarea  type="text"
                    className="mdhtmlform-md textBody-input"
                    data-mdhtmlform-group="1"
                    name="content"
                    value={props.note.content}
                    placeholder="Note Content"
                    onChange={props.handleInput}/>
            <br></br>
            <button className="save-input-button"
                    onClick={props.handleAddNewNote}>Save</button>  
        </div>
      
    )
}

export default CreateNoteView;