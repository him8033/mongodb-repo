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

user2.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })