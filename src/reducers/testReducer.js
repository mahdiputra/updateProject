const INITIAL_STATE = 'hello bro'
export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'ubah isi':
         return action.payload;
        default :
         return state;
    }
}