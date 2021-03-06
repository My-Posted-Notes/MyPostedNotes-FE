import axios from 'axios';

// USER
export const CHECKING_EMAIL = 'CHECKING_EMAIL';
export const EMAIL_CHECKED = 'EMAIL_CHECKED';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SAVE_CURRENT_USER = 'SAVE_CURRENT_USER';
export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const SAVE_USER_PROFILE = 'SAVE_USER_PROFILE';
// export const SAVE_USERNAME = 'SAVE_USERNAME';
// export const SAVE_PROFILEPIC = 'SAVE_PROFILEPIC';
export const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT';

// export const GET_USER_NAME_START = 'GET_USER_NAME_START';
// export const GET_USER_NAME_SUCCESS = 'GET_USER_NAME_SUCCESS';

// NOTE - FETCH NOTE LIST
export const NOTES_FETCH_START = 'NOTES_FETCH_START';
export const NOTES_FETCH_COMPLETE = 'NOTES_FETCH_COMPLETE';
export const NOTES_FETCH_FAILURE = 'NOTES_FETCH_FAILURE';

// NOTE - ADD NOTE
export const NOTE_ADD_START = 'NOTE_ADD_START';
export const NOTE_ADD_COMPLETE = 'NOTE_ADD_COMPLETE';
export const NOTE_ADD_FAILURE = 'NOTE_ADD_FAILURE';

// NOTE - GET NOTE
export const NOTE_GET_START = 'NOTE_GET_START';
export const NOTE_GET_COMPLETE = 'NOTE_GET_COMPLETE';
export const NOTE_GET_FAILURE = 'NOTE_GET_FAILURE';

// NOTE - EDIT NOTE
export const NOTE_EDIT_START = 'NOTE_EDIT_START';
export const NOTE_EDIT_COMPLETE = 'NOTE_EDIT_COMPLETE';
export const NOTE_EDIT_FAILURE = 'NOTE_EDIT_FAILURE';

//NOTE - DELETE NOTE
export const NOTE_DELETE_START = 'NOTE_DELETE_START';
export const NOTE_DELETE_COMPLETE = 'NOTE_DELETE_COMPLETE';
export const NOTE_DELETE_FAILURE = 'NOTE_DELETE_FAILURE';


export const getNoteList = () => dispatch => {
    dispatch({ type: NOTES_FETCH_START });
    // console.log(process.env.REACT_APP_BACKEND_URL);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/note/`)
        .then(response => {
            dispatch({ type: NOTES_FETCH_COMPLETE, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: NOTES_FETCH_FAILURE, payload: err });
        });
};

export const addNewNote = (note) => dispatch => {
    dispatch({ type: NOTE_ADD_START });

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/note/`, note)
        .then(response => {
            dispatch({ type: NOTE_ADD_COMPLETE, payload: response.data });
        }).catch(err => {
            dispatch({ type: NOTE_ADD_FAILURE, payload: err });
        });
}

export const getNote = (id) => dispatch => {
    dispatch({ type: NOTE_GET_START });
    const promise = axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/note/${id}/`);
    promise
        .then(response => {
            dispatch({ type: NOTE_GET_COMPLETE, payload: response.data });
            // console.log("got it!");
        })
        .catch(err => {
            dispatch({ type: NOTE_GET_FAILURE, payload: err });
        });
};

export const editNote = (note) => dispatch => {
    dispatch({ type: NOTE_EDIT_START });
    const promise = axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/note/${note['id']}`, note);
    promise
        .then(response => {
            // console.log(id);
            dispatch({ type: NOTE_EDIT_COMPLETE, payload: response.data });
            // console.log("got it!");
            
        })
        .catch(err => {
            dispatch({ type: NOTE_EDIT_FAILURE, payload: err });
        });
};

export const deleteNote = (id) => dispatch => {
    dispatch({ type: NOTE_DELETE_START });
    const promise = axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/note/${id}`);
    promise
        .then(response => {
            dispatch({ type: NOTE_DELETE_COMPLETE  });
        })
        .catch(err => {
            dispatch({ type: NOTE_DELETE_FAILURE, payload: err });
        });
};