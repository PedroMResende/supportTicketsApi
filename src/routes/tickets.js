import {create} from "../controllers/ticketControllers/create.js"; 

export const tickets = [
    {
        method: "POST", 
        path: "/tickets", 
        controller: create, 
    }, 

]

