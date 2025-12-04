import {create} from "../controllers/ticketController/create.js"; 
import { index } from "../controllers/ticketController/index.js";
import {update} from "../controllers/ticketController/update.js"; 

export const tickets = [
    {
        method: "POST", 
        path: "/tickets", 
        controller: create, 
    }, 
    {
        method: "GET", 
        path: "/tickets", 
        controller: index
    }, 
    {
        method: "PUT", 
        path: "/tickets/:id", 
        controller: update
    }, 
]

