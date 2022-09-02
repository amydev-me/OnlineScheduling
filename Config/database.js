const mongoose=require('mongoose');

/**
 * Connect To the database
 */
mongoose.connect("mongodb+srv://")
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));
