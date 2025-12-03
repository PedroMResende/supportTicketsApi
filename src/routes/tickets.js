import {create} from "../controllers/ticketController/create.js"; 
import { index } from "../controllers/ticketController/index.js";

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
]

