## Introduction

This is an Express Node.js app that shows how to carry out CRUD operations.

Run `npm start` to start up the server in production mode, and 
`npm run dev` to start up the server in development mode.

[Modules] (#modules)

## Modules {#modules}

The necessary modules installed are:

- axios
- cors
- dotenv
- express
- json-server

## JSON SERVER

The json-server is used to create a mock REST API. You create a posts.json 
file that will serve as a mock database to transfer file between the 
server and the client.

To start up the json-server, run `npx json-server -p 3500 -w posts.json`.

The json-server is configured to run on port 3500
