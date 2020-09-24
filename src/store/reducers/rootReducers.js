import {
    NOTES_FETCH_START,
    NOTES_FETCH_COMPLETE,
    NOTES_FETCH_FAILURE,

    NOTE_ADD_START,
    NOTE_ADD_COMPLETE,
    NOTE_ADD_FAILURE,
    
    NOTE_GET_START,
    NOTE_GET_COMPLETE,
    NOTE_GET_FAILURE,
    
    NOTE_EDIT_START,
    NOTE_EDIT_COMPLETE,
    NOTE_EDIT_FAILURE,

    NOTE_DELETE_START,
    NOTE_DELETE_COMPLETE,
    NOTE_DELETE_FAILURE,
} from "../actions";
  
const initialState = {
    noteList: [],
    isGettingNoteList: false,
    isAdding: false,
    isGettingNote:false,
    isDeleting: false,
    isEditing: false,
    note:{},
    id: null,
    error: "",
    user_id: 0,
    
    // actionTookPlace: false
  };
  
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTES_FETCH_START:
            // console.log(initialState);
            return { ...state, isGettingNoteList: true };
        case NOTES_FETCH_COMPLETE:
            return { ...state, isGettingNoteList: false, noteList: action.payload, actionTookPlace: false};
        case NOTES_FETCH_FAILURE:
        // console.log(action.payload);
            return { ...state, isGettingNoteList: false, error: action.payload };

        case NOTE_ADD_START:
            return { ...state, isAdding: true };
        case NOTE_ADD_COMPLETE:
            return { ...state, isAdding: false, actionTookPlace: true};
        case NOTE_ADD_FAILURE:
        // console.log(action.payload);
            return { ...state, isAdding: false, error: action.payload };

        case NOTE_GET_START:
            return { ...state, isGettingNote: true };
        case NOTE_GET_COMPLETE:
            return { ...state, isGettingNote: false, note: action.payload};
        case NOTE_GET_FAILURE:
        // console.log(action.payload);
            return { ...state, isGettingNote: false, error: action.payload };

        case NOTE_EDIT_START:
            return { ...state, isEditting: true };
        case NOTE_EDIT_COMPLETE:
            return { ...state, isEditting: false, note: action.payload, actionTookPlace: true };
        case NOTE_EDIT_FAILURE:
        // console.log(action.payload);
            return { ...state, isEditting: false, error: action.payload };

        case NOTE_DELETE_START:
            return { ...state, isDeleting: true };
        case NOTE_DELETE_COMPLETE:
            return { ...state, isDeleting: false, actionTookPlace: true};
        case NOTE_DELETE_FAILURE:
        // console.log(action.payload);
            return { ...state, isDeleting: false, error: action.payload };
        
        default:
            return state;
    }
};
