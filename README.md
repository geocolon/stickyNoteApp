# WebSocket messenger
I created this project to understand how to use socket.io, I wanted to create an instant messenger app.

This is an application uses WebSocket (Socket.io) technology to create a person to person(s) instant messenger web app. The frontend is powered by React, Redux, Socket.io client. The server is a NodeJS Express server, using MongoDB and Passport for creating an account.

Once you have created a account and use the messenger feature, all messages will be deleted once all parties are sign out.

Please go to the deployed version here. => <a href="https://new-socket-messegner.herokuapp.com/">WebSocket</a>

### How to use it.

Please create your own account at <a href="https://new-socket-messegner.herokuapp.com/">WebSocket</a> for full access to try it out for yourself. Create an incognito window in your browser to log into the demo account.

Username: mkim
Password: abcdef1234


### Installing

If you are cloning this repo and wanted to locally host both the client and the server, please open terminal window then ```cd``` to where you cloned this project. 

### Server

* Next cd into the server folder. Then type ```npm install``` to install to download the dependencies. 
* Next, create 3 terminal windows and type 3 different commands in each new window. 
* In the 1st window please write ```mongod```, hit return and you should see MongoDB running in your terminal now. 
* 2nd window writes the word ```mongo``` then hit return. The same result as before should show up as the mongo database starts up. 

### Client

* In your 3rd terminal ```cd``` into the client folder, then write ```npm install``` to add the dependencies.
* Once the ```node_modules``` is downloaded write ```cd ..```, then write ```npm run dev```. 

* The server will be available on ```loaclhost/8080``` and on your defult web browser ```local/3000``` will show up as well.

### Built With

* Client folder // jwt-decode, react, react-redux, redux-form, socket.io-client.
* Server // socket.io, express, jsonwebtoken, bcryptjs, mocha, chai, heroku.
