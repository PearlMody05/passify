const mongoose = require('mongoose');
const connectToMongo = ()=>{
mongoose.connect("mongodb+srv://admin:mongodbpasswordsave@cluster1.4h7as.mongodb.net?retryWrites=true&w=majority&appName=cluster1")
.then(()=>{
    console.log("connected!");
})
.catch((error)=>{
    console.log(error);
});
}

module.exports = connectToMongo; //to call it in other files you need to export it 