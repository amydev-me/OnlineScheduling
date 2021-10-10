const mongoose=require('mongoose');

/**
 * Connect To the database
 */
 mongoose.connect("mongodb+srv://amydev:Amy123!*@cluster0.ogfnn.mongodb.net/online_scheduling_tools?retryWrites=true&w=majority")
 .then(() => console.log("Database connected!"))
.catch(err => console.log(err));