import React from 'react';
import { connect } from 'react-redux';
import '../views/styles/App.css';
// import '../../public/mdhtmlform';

import { getNote, deleteNote } from '../store/actions';
import DeleteNote from './DeleteNote';

class Note extends React.Component {

    componentDidMount() {
        this.props.getNote(this.props.match.params.id);
    }

    deleteModal = document.getElementsByClassName('delete-modal');

    render() { 
        // console.log(this.props.currentNote)
        return (
            <div className="note-container">
                <div className="edit-delete-links">
                    <h3 onClick={()=>{this.props.history.push(`/edit/${this.props.currentNote['_id']}`)}}>Edit</h3>
                    <h3 onClick={()=>{
                        this.deleteModal[0].style.display ="block"   
                        }}>Delete</h3> 
                </div>
                
                <div className="note-display-panel">
                    <h3 className="mdhtmlform-html note-title"
                        data-mdhtml-group="0"
                        >{this.props.currentNote.title}</h3>
                    <p className="mdhtmlform-html note-textBody"
                        data-mdhtml-group="1">{this.props.currentNote.content}</p>
                </div>
                
                <div className="delete-modal">
                    <div className="delete-modal-popup">
                        <DeleteNote {...this.props}
                                    deleteModal={this.deleteModal[0]}/>
                    </div>  
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    state = state.rootReducer; // pull values from state root reducer
    return {
        currentNote: state.note
    }
};

export default connect(mapStateToProps, { 
    getNote, 
    deleteNote })(Note);
