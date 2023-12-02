const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require("./config/connectdb.js");
const fileRoutes = require('./Routes/fileRoutes.js'); 
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const User=require("./model/user.js");
const { Console } = require("console");
const { userInfo } = require("os");

const app = express();

const port=process.env.PORT
const DATABASE_URL=process.env.DATABASE_URL;

console.log(DATABASE_URL)
connectDB(DATABASE_URL)
// app.use('/', (req,res,next)=>{
//     app.send("hello")
// })

app.use(cors())
app.use(express.json());

app.use('/api', fileRoutes);
app.use(express.json());

app.post("/newregistration", async (req,res)=> {
  console.log("post request received for registration");
  const { email }=req.body;
  var message=false;
  try {
      User.findOne({name:email})
      .then(function (user) {
          if (user) {
              // User found
              console.log("Duplicate user not found:", user);
              res.json({message});
            } else {
              // No user found
              console.log("Duplicate user not found for registration");
              const newUser=new User({
                  name:email,
                  wordCount:0
              });
              newUser.save();
              message=true;
              res.json({message});
            }
      })
      .catch(function (error) {
          console.error('Error finding user for registration:', error);
            // Handle the error
            res.json({message});
      });
  } catch (error) {
    console.error("Error registring user: ", error.message);
  }
});


app.post("/request/wordcount", async (req,res) => {
  const {name}=req.body;
  let wordCount=0;
  console.log("request received for wordCount");
  try {
    console.log(name);
    User.findOne({name:name})
        .then(function (user) {
          if (user) {
            // User found
            console.log(user);
            wordCount=user.wordCount;
            res.json({wordCount});
          }
        })
        .catch(function (error) {
          console.error('Error finding user for word count:', error);
          // Handle the error
          res.json({wordCount});
        });
  } catch (error) {
    console.log("Error finding word count: ",error.message);
  }
})

app.post("/crawl", async (req, res) => {
  console.log(req.body);
  const url = req.body.url;
  const name=req.body.name;
  const data=[];
  let wordcount = 0;
  let newNum=0;

  try {
    const response = await axios.get(url);
    // console.log(response);
    const $ = cheerio.load(response.data);

    // Extract information using Cheerio selectors
    const pageTitle = $('title').text();
    const html=$("p,h1,h2,h3,h4,h5,h6").text();
    wordcount += html.length;
    const eachdata = {
        url,
        pageTitle,
        html
        // Add more data properties as needed
      };
      data.push(eachdata);
    // Add more selectors as needed
    const hrefsArray = [];
    $("a").each(function () {
      const href = $(this).attr("href");
      if (href) {
        if (href.includes("https")) {
          if(!(href.includes("login") || href.includes("signup") || href.includes("signin")))
            hrefsArray.push(href);
        }else {
          if(!(href.includes("login") || href.includes("signup") || href.includes("signin"))){
            hrefsArray.push(url+href);
        }
        }
      }
    });
    console.log(hrefsArray);
    await Promise.all(
        hrefsArray.map(async (a) => {
          try {
            // console.log(a);
          const response = await axios.get(a);
          const $ = cheerio.load(response.data);
          console.log("Successfull");
  
          const pageTitle = $('title').text();
          const html = $("p,h1,h2,h3,h4,h5,h6").text();
          wordcount += html.length;
          const eachdata = {
            url: a,
            pageTitle,
            html,
          };
          data.push(eachdata);
          } catch (error) {
            console.log("Failed to fetch data");
          }

        })
      );
      
    // Save the data to a JSON file
    fs.writeFileSync('output.json', JSON.stringify(data, null, 2));
    await User.updateOne({name:name},{$inc:{wordCount:wordcount}});
    console.log("Total Words: "+wordcount);
    await User.findOne({name:name})
      .then(function (user) {
        if(user){
          newNum=user.wordCount;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    res.json({ success: true, data, newNum });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});




app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})