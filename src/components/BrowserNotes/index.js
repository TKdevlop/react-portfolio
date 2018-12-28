export { default } from './BrowserNotes';

const linkedList = {
    data:4,
    next:{
        data:5,
        next:{
            data:6,
            next:{
                data:7,
                next:null
            }
        }
    }
} 
let head = linkedList;
while(true){
    if(head.next== null){
        const {data} = linkedList;
        console.log(data);
        break;
    }
    const {data} = linkedList;
    console.log(data);
    head = head.next

}