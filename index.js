// WriteFile

// const fs = require('fs');

// fs.writeFile("he.txt", "Welcome" ,(err)=>{
//     if (err) {
//         console.error("Error");

//     }
//     else{
//         console.log("Done");

//     }
// } )


// Append File

// const { error, log } = require('console');
// const fs = require('fs');

// fs.appendFile("he.txt"," Aitisam" , (err)=>{
//     if (err) {
//         console.error("Error")
//     }
//     else{
//         console.log("Done no  error");

//     }
// })


// RenameFile

// const fs = require('fs');

// fs.rename("he.txt" , "aitisam.txt" , function(err){
//     if (err) {
//         console.error("Error");
//     } else {
//      console.log(" File name Sucessful changed");

//     }
// })


// Copy File 



// fs.copyFile("aitisam.txt", "./folder/aitisam1.txt", function (err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Done");

//     }
// })




// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//     {
//         console.log("Maddleware ha ya");
//         next();
//     }
// });
// app.get('/', function (req, res) {
//     res.send("Welcome Aitisam");
// })

// app.listen(3000);




//  Middle ware work & Error handling

// const express = require('express');
// const app = express();

// // Middleware
// // app.use((req, res, next) => {
// //     console.log("Middleware ha ya");
// //     next();
// // });

// // Route
// app.get('/', (req, res , next) => {
//     return next(new Error ("Error Occur"));

// });

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send("Something went wrong!");
// });

// // Start Server
// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });



// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3000;

// //middleware to  parse form  data
// app.use(express.json());k
// app.use(bodyParser.urlencoded({ extended: true }));

// //Server from  the html

// app.get('/', (req, res) => {
//     res.send(
//         `<form action="/submit" method="post"
//         <label>Name:</label>
//         <input type="text" name="name" required>
//      <br/>
//         <label>Email:</label>
//         <input type="email" name="email" required>
//      <br/>
//      <button type="submit">Submit</button>
//     </form>
//      ` );
// });

// // Handle Form Submition
// app.post('/submit' , (req,res)=>{
//     const {name , email} = req.body;
//     res.send( `Received : Name - ${name} , Email - ${email}`);
// });

// app.listen(3000);



const express  = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine' , 'ejs');

app.get("/profile/:username" , function (req,res) {
    res.send(req.params);
});

app.listen(3000);
