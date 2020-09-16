import {GET_NOTES} from '../actions';
import {database} from '../firebase';

export function getNotes(){
    return dispatch => {
        database.on('value' , snapshot => {
            dispatch({
                type : GET_NOTES ,
                payload : snapshot.val()
            });
        });
    }
}