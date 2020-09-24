import React from 'react';
import {connect} from 'react-redux';
import EditNoteView from '../views/EditNoteView';
import {editNote}  from '../store/actions';

class EditNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            note:{ ...this.props.currentNote}
        }
    }

    handleInput = event =>{
        event.preventDefault();
        this.setState({ ...this.state,
                        note:{...this.state.note, [event.target.name]: event.target.value}});
    }

    handleEditNote = event => {
        event.preventDefault();
        this.props.editNote(this.state.note);
        this.props.history.push("/");
    }

    render(){
        return (
            <div className="create-view-container">
                <EditNoteView {...this.props}
                            note={this.state.note}
                            handleInput={this.handleInput}
                            handleEditNote={this.handleEditNote} />

            </div>
    )}      
}

const mapStateToProps = state => {
    state = state.rootReducer; // pull values from state root reducer
    return {
        currentNote: state.note
    }
};

export default connect( mapStateToProps,
                        {editNote
                        })(EditNote);