import React from 'react';
import { connect } from 'react-redux';

import { getNoteList } from '../store/actions';

import NoteListView from '../views/NoteListView.js';

class NoteList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            noteList: this.props.noteList
            // actionTookPlace: false
        }
    }

    componentDidMount() {    
        this.props.getNoteList();   
    }

    handleNoteClick = (e, note) =>{
        e.preventDefault();
        window.location.href = `/note/${note.id}`
        // this.props.history.push(`/note/${note.id}`);
        // this.props.currentNote=note;
    }

    // handleActionTookPlace(){
    //     console.log("props.actionTookPlace:", this.props.actionTookPlace);  
    //     if (this.props.actionTookPlace !== this.state.actionTookPlace) {
    //         this.props.getNoteList();
    //     }
    // }

    render() { 
        return ( 
            <div className="notelist-view-container"
                 >  
                 {/* {this.handleActionTookPlace()}       */}
                <NoteListView {...this.props}
                            handleNoteClick={this.handleNoteClick}/>
            </div>     
        );
    }
}

const mapStateToProps = state => {
    state = state.rootReducer; // pull values from state root reducer
    return {
        //state items
        noteList: state.noteList,
        currentNote: state.note
    }
};

export default connect(mapStateToProps, { 
    getNoteList,
    // getNote
})(NoteList);
