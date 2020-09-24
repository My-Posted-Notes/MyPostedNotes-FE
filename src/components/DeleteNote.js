import React from 'react';
import {connect} from 'react-redux';
import {deleteNote}  from '../store/actions';
import '../views/styles/App.css';
import DeleteNoteView from '../views/DeleteNoteView';

class DeleteNote extends React.Component {

    handleDeleteNote = event => {
        event.preventDefault();
        this.props.deleteNote(this.props.currentNote['id']);        
        this.props.history.push("/");
    }

    render(){
        return (
            <DeleteNoteView {...this.props}
                            handleDeleteNote={this.handleDeleteNote}/>
            // <div className="delete-class">
            //     <h2>Are you sure you want to delete this?</h2>
            //     <div className="delete-buttons">
            //         <button className="delete-yes-button"
            //                 onClick={
            //                     this.handleDeleteNote
            //                 }>Delete</button>
            //         <button className="delete-no-button"
            //                 onClick={()=>
            //                    this.props.deleteModal.style.display ="none"
            //                 }>No</button>  
            //     </div>   
            // </div>
    )}      
}

const mapStateToProps = state => {
    state = state.rootReducer; // pull values from state root reducer
    return {
        currentNote: state.note
    }
};

export default connect( mapStateToProps,{deleteNote})(DeleteNote);