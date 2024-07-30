# Glowing Enigma Social API 

## Description
Link to demo video: https://drive.google.com/file/d/1yDQYrnYpGTg3IAshQG_b0R6Il2c6zSQX/view?usp=sharing <br><br>

Glowing Enigma is a social netowork API, consisting of a User and Thought models.<br> This network API allows the user to connect to express and use mongoose as our database handler. <br>
By using Mongoose, I learned how can we further organize route elements and turned them into functions. <br>
Calling those functions inside the routes makes it a more well organized and understandable code. <br>
Mongoose helped me understand better the routing and use of the models and controllers folders in the MVC paradigm. 

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Add the express and mongoose packages to the package.json file. <br>
Run command "npm install" inside the terminal <br>
After that you successfully installed all the packages needed for the demo of the social network API's.
## Usage

Run "npm start" inside the terminal. <br>
Once server is running on localhost:3001 you can test out the following API routes: <br><br>
/api/users: GET all users. POST a new user. GET, PUT and DELETE a user by _id<br>
![alt text](<images/get and get one ch18.gif>)<br><br>
/api/thoughts: GET all thoughts. POST a new thought. GET, PUT and DELETE a thought by _id <br><br>
![alt text](<images/thoughts routes.gif>) <br><br>
A full demo on every route is available at the next link: https://drive.google.com/file/d/1yDQYrnYpGTg3IAshQG_b0R6Il2c6zSQX/view?usp=sharing

## License
MIT license