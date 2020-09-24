import  React from 'react';
import './styles/Note.css';
// import '../../public/mdhtmlform';

const DeleteNoteView = props =>{
    return(
        <div className="delete-class">
            <h2>Are you sure you want to delete this?</h2>
            <div className="delete-buttons">
                <button className="delete-yes-button"
                        onClick={props.handleDeleteNote
                        }>Delete</button>
                <button className="delete-no-button"
                        onClick={()=>
                        this.props.deleteModal.style.display ="none"
                        }>No</button>  
            </div>   
        </div>
    )
}

export default DeleteNoteView;