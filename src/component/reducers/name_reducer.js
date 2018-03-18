export default function(name=null,action){
    switch(action.type){
        case 'SEND_NAME':
            return name=action.payload
        default:
            return name
    }

}