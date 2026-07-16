const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sp_904586_db:sp2628@cluster0.5gwkvkk.mongodb.net/?appName=Cluster0"
  )
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log(e))

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true,
  },
  
  author: {
    type: String,
    required: true,
    trim: true,
  },
});

const Book = mongoose.model("Book", BookSchema);

const books = [
  {
    title: "abc",
    author: "A",
  },
  {
    title: "pqr",
    author: "P",
  },
  {
    title: "xyz",
    author: "X",
  }
]
  Book.deleteOne({ title: "abc" })
  .then((result) => {
    console.log("Book deleted successfully");
    console.log(result);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });

module.exports = mongoose.model("Book", BookSchema);