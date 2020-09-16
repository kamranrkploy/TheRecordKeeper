import {GET_NOTES} from '../actions';

export default function(state={} , actions){
    switch(actions.type){
        case GET_NOTES: return actions.payload;
    }
}