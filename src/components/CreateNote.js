import React from 'react';
import {connect} from 'react-redux';
import CreateNote from '../components/CreateNote';
import { addNewNote } from '../store/actions';

class CreateNoteView extends React.Component {
    constructor(props){
        super(props);
        this.state={
            note:{
                title: "",
                content: "",
                user_id: 1, //To do:  need to fetch user id and save in redux state then pull from it
            }
            // isUpdate: false
        }
    }

    handleInput = event =>{
        this.setState({ ...this.state,
                        note:{...this.state.note, [event.target.name]: event.target.value}});
    }

    handleAddNewNote = event => {
        event.preventDefault();
        console.log("add note props: ",this.props);
        this.props.addNewNote(this.state.note);
        this.props.history.push("/");
    }

    render(){
        return (
            <div className="create-view-container">
                <CreateNote {...this.props}
                            note={this.state.note}
                            isUpdate={this.state.isUpdate}
                            handleInput={this.handleInput}
                            handleAddNewNote={this.handleAddNewNote}
                            />  
            </div>
    )}      
}

const mapStateToProps = state => {
    state = state.rootReducer; // pull values from state root reducer
    return {
        
    }
};

export default connect( mapStateToProps,
                        {addNewNote})(CreateNoteView);