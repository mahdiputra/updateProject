export const loginId = (x)=>{ //  nama function dr front end home
    return{
        type: 'idLogin', // baalk;l mereturn id login , di cek di reducer
        payload: x //x dapat dari fronent saat kit ambnggil function dari front end
    }
}

export const Nama = (x)=>{
    return{
        type: 'idNama',
        payload : x
    }
}