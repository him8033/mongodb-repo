const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,             // if required is true then these value is storin compulsory
        maxLength: 20               // if length of st ring for title is more than 20 then give an error
    },
    author: {
        type: String,
        default: "unknown"          // if default is set then if these value user can not apply then default value is store automatically
    },
    price: {
        type: Number,
        min: [1,"price is too low in amzon"]                      // "min" key means they do not store less than min value if any custom message are sending then you can write between [key,"msg"] 
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction","non-fiction"]         // if enum define some keywords then user can only input these value is other value is come then we receive an error
    },
    genre: [String]                             // this type of method store the multiple values like as a array
});

const Book = mongoose.model("Book", bookSchema);
let book1 = new Book({
    title: "English",
    price: 700
});

// book1.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// book1.findByIdAndUpdate("67482859e9644467033c833f",{price:-500})        // Schema rules are follows only insertion time
Book.findByIdAndUpdate("67482859e9644467033c833f",{price:-500},{runValidators:true})        // but adding 1 key we use schema rules for updation
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);       //this show whole error
        // console.log(err.errors);             //this is also show errors in database
        // console.log(err.errors.price);       // this is show particular rules error
        // console.log(err.errors.price.properties);        //this is show only error rules properties
        // console.log(err.errors.price.properties.message);        //this is only show error msg are shown 
    })