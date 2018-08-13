const initial_state = 0 // liat initial karena id beruopa integer 

export default(state = initial_state,action) =>{ 
    switch(action.type){ //action akan mencek di index
        case 'idLogin': //satt tipe id login
            return action.payload; 

            default:
             return state;
    }
}