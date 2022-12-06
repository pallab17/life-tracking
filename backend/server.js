// express package take use korar jonno ei line ta likhchi
const express = require("express"); 
//notes.js file take use korar jonno eita likhchi
const notes = require("./data/notes");
// .env file  take use korar jonno ei line ta likhchi
const dotenv=require('dotenv');

// exppress module r ekta object banachi ekhane object mane xeroxcopy lagche
const app  = express();
//step before using the dotenv file
dotenv.config();

// now creating the api

//api.get basically backend theke data take frontend e ene data take serve kore
app.get("/",(req,res) => {
    res.send("api dourache..");

}
)
// notes .js r jonno abar api endpoint banachi
app.get("/api/notes",(req,res) => {
    res.json(notes);

}
)

// line number 18 r api ta sob kota json file e view te dekhache ebar 
// amra chaichi je sudhu je note r id ta likhbo sudhu otar content ei
// asuk tai ei api ta create korchi
app.get("/api/notes/:id",(req,res) => {
    //the way we can fetch the id from the url is by using req,paramters
    // if we write req.param it is going to have the all the paramters of the id
   
    //Dhor tui ekta API call korchis https://www.google.com/pallab123
   //And Google er backend e API route erokom define kora:"/:username"
//Then https://www.google.com/pallab123  tui req.params.username diye access korte parbi
    const note=notes.find((n) => n._id===req.params.id);
    res.json(note);

}
)

// PORT variable r under e env file theke PORT r value take anchi aar na pele default 5000 bosachi
const PORT=process.env.PORT || 5000;



// now creating web server

app.listen(PORT,console.log(`server started on PORT ${PORT} `));

//package.json file e script e under e alias banalam ekta jate barbar lomba commaand na likhte hoy execute korar jonno 
// "start": "node backend/server.js" eita


// after installing nodemon
//package.json file e script e under e alias banalam ekta jate barbar lomba commaand na likhte hoy execute korar jonno 
// "start": "nodemon backend/server.js" eita