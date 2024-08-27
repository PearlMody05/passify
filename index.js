const connectToMongo = require('./db');  
connectToMongo();

const express= require('express')
const app = express();

app.use(express.json()) //this is aplied globally so everywhere routes are parsed 
// available routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/passify', require('./routes/pasify'))



app.listen(5000, () => {  //react app is at port 3000 so we need to have this at diffrent port 
    console.log(`Now running`);
  });