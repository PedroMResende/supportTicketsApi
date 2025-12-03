export function index({req,res,database}) { 
    const { status } = req.query ; 



    const tickets = database.select("tickets"); 
    
    const statusTickets = tickets.filter((ticket) => ticket.status === status); 
    
    return res.end(JSON.stringify(statusTickets))
}