# Sticky Note
![Sticky Note Desktop](../images/Sticky-Note.png)

I wanted to create an application that mimic post it notes. I love using post it notes in my work to orient myself on a project but I always find that they are easily lost and usually in one place. Making this application solved having my notes saved to the cloud so I can have access to our post it notes.

Please go to the deployed version here. => <a href="https://new-stickynote.herokuapp.com/">Sticky Note</a>

### How to use it.

Please create your own account at <a href="https://new-stickynote.herokuapp.com/">Sticky Note</a> for full access to try it out for yourself. Check out the demo account. 

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

* Client folder // jwt-decode, react, react-redux, redux-form.
* Server // express, jsonwebtoken, bcryptjs, heroku.
