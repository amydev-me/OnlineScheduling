const mongoose=require('mongoose');

/**
 * Connect To the database
 */
 mongoose.connect("mongodb+srv://amydev:Amy123!*@cluster0.ogfnn.mongodb.net/online_scheduling?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex : true
});