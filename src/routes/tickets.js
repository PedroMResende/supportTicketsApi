import {create} from "../controllers/ticketController/create.js"; 

export const tickets = [
    {
        method: "POST", 
        path: "/tickets", 
        controller: create, 
    }, 

]

