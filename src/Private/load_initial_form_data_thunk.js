import {host} from "../host";

function load_initial_form_data_thunk(dispatch)
{
    dispatch({type: "LOAD_INITIAL_FORM_DATA_SEND"});
    fetch(host + "/take/php/private_auth.php", {credentials: "include"}) 
        .then(data=>data.json())
        .then(data=>{
            dispatch({type: "LOAD_INITIAL_FORM_DATA_RECEIVED", data});
        });
}

export default load_initial_form_data_thunk;