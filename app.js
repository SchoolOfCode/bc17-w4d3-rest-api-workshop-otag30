import express from "express";

import {
  deleteAstronautById,
  updateAstronautById,
  getAstronautsByName,
  replaceAstronautById,
  getAstronauts,
  createAstronaut,
  getAstronautById,
} from "./models/astronauts.js";

const app = express();

app.use(express.json());

/* 

All json responses for this tasks should follow the pattern:

res.json({
  "success": boolean,
  "payload": returnedData
})

*/

// Task 1

/* Write a request handler to return the correct response when a `GET` request is received to `/astronauts`. Choose the appropriate 
function from the imported functions at the top of the `app.js` to get your data. */

/*Define the Route Handler
Add a route handler for the GET request to /astronauts using the getAstronauts function.
Add the Route Handler:
Use app.get('/astronauts', async (req, res) => { ... }) to define the route.
Inside the handler, call getAstronauts to fetch the data.
Send the response using res.json(). */
app.get('/astronauts', async (req, res) => {
  try {
    const astronauts = await getAstronauts(); //// Fetch data using the helper function
    res.json({success: true, payload: astronauts}); //Send successful JSON response
  } catch (error) {
    res.status(500).json({ success: false, payload: error.message }); // Handle errors
  }
}
)
/* Start the Server
To handle incoming requests, we need to start the server by listening on a specific port.*/
app.listen(3000, () => {
  console.log("server is running on port 3000");
}
)
/*Testing the Route
Using Postman:
Open Postman and create a new GET request.
Set the URL to http://localhost:3000/astronauts.
Send the request and verify the response.



// Task 2

/* Write a request handler to return the correct response and perform the correct action when a `POST` request is received to 
`/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action. */

/*Define the Route Handler
Defines the route handler for the POST request to /astronauts.*/
app.post('/astronauts', async (req, res) => {
  try {
    const newAstronaut = await createAstronaut(req.body); // Pass the request body to the createAstronaut function, Calls the createAstronaut function with the data from the request body.
    res.status(201).json({ success: true, payload: newAstronaut}); // Send a successful response, Sends a response with a 201 Created status code and the created astronaut data.
  } catch (error) {
  res.status(400).json({ success: false, payload: error.message}); //Sends an error response with a 400 Bad Request status code if something goes wrong.
  }
 } 
 )/* {
    "success": true,
    "payload": {}
} someting is wrong */



// Task 3

/* Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the 
appropriate path. */
app.get('/astronauts/:id', async (req, res) => {//the path includes the :id
  try {
    const astronautById = await getAstronautById(req.params.id); // Get the ID from the request parameters and pass it to the function
    res.json({ success: true, payload: astronautById });// Return the fetched astronaut
  } catch (error) {
    res.status(500).json({ success: false, payload: error.message}); // Handle errors
  }
})//used astronaut 1113 to retrieve by id and worked in Postman.


// Task 4

/* Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 5

/* Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 6

/* Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler 
listen to requests at the appropriate path. */

export default app;
