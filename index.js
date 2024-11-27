const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

//      Model in Mongoose is a class with which we constructs documents.here  Collection name is given "Users" but actully store in mongodb is "users"

const User = mongoose.model("User", userSchema);
const user2 = new User({
    name: "Eve",
    email: "eve@gmail.com",
    age: 21
})

//      Insert data or documents in collection one by one

// user2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//      Insert bulk data with "insertMany" method

// User.insertMany([
//     { name: "Tony", email: "tony@gmail.com", age: 22},
//     { name: "Peter", email: "peter@gmail.com", age: 23},
//     { name: "Bruce", email: "bruce@gmail.com", age: 24}
// ]).then((res) => {
//     console.log(res);
// });

//      Find Method implement 

User.find({})                    //find method without any condition
// User.find({age:{$gt:22}})          //find method with condition
// User.findOne({age:{$gt:22}})        //find method with findOne command for searching one data
// User.find({_id:"674598ac01ea8d8eabb5820b"})         //find data with id one another "findById" also implemented
// User.findById("674598ac01ea8d8eabb5820b")           //find data with "findById" method
    .then((res) => {
        console.log(res);       //print all the documents as a array 
        console.log(res[0]);        //print documents as their index that are stored in these array
        console.log(res[0].name);       //print particular object value in their document
    })
    .catch((err) => {
        console.log(err);
    })