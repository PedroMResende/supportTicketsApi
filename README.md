# Service Tickets API (Pure Node.js)
- A REST API built from scratch using pure Node.js, without Express or any external frameworks.
This project was developed as a study exercise to deeply understand low-level HTTP handling, routing, JSON parsing, and in-memory data persistence.

- It simulates a simple service ticket management system, allowing clients to create, list, update, and delete support tickets.

## Features
- Built with raw Node.js (http module only) — no Express, no frameworks
- Custom router implementation
- Dynamic route params (e.g., /tickets/:id)
- Middleware-like logic without middleware libraries
- Manual JSON body parsing
- Local in-memory database using a custom Database class
- RESTful structure
- Tested with Insomnia

## Endpoints Overview 

### GET /tickets 
Return all service tickets. 

### POST /tickets 
Creates a new ticket 

Example: 
```js
{
  "equipment" : "Personal Computer", 
  "description" : "Computer doesn't correctly works", 
  "user_name" : "Rogério" 
}
```

### PUT /tickets/:id
Updates an existing ticket by ID 

### DELETE /tickets/:id 
Deletes a ticket by ID 


## Project Structure 
```code
src/
 ├─ controllers/
 ├─ middlewares/
 ├─ routes/
 ├─ utils/
 ├─ database/
 │   └─ Database.js
 └─ server.js
```

## Database 
A lightweight in-memory database built manually:
- Stores data in a local JSON file
- Handles CRUD operations internally
- No external drivers or ORMs

This helps reinforce understanding of how persistence layers work under the hood.

## Purpose of this project 

This API was created as part of a FullStack course practice, with the goal of learning:
- How HTTP servers work internally
- How frameworks like Express abstract low-level logic
- How routing, params, and parsing are implemented behind the scenes
- How to structure backend applications cleanly even without frameworks

It’s a roots-level Node.js experience — focusing on mastery of fundamentals.

## Running project 
```bash
  npm install
  npm run dev 
```
Server runs by default on
```code
http://localhost:8000
