import {create} from "../controllers/ticketController/create.js"; 
import { index } from "../controllers/ticketController/index.js";
import {update} from "../controllers/ticketController/update.js"; 
import {updateStatus} from "../controllers/ticketController/updateStatus.js"; 
import {remove} from "../controllers/ticketController/remove.js" ; 



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
    {
        method: "PATCH", 
        path: "/tickets/:id/close", 
        controller: updateStatus
    }, 
    {
        method: "DELETE", 
        path: "/tickets/:id", 
        controller: remove
    }
]

