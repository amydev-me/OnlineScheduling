const router = require('express').Router();
const Staff=require('../model/Staff');

router.get('/' ,(req, res) => {
    res.render('Home')
});
router.post('/api/create-staff' , (req, res) => {
    (async () => {
    try{
        const staff = req.body;    
   
        const newStaff= await new Staff(staff);

        const _newStaff = await newStaff.save();

        Staff.find({}, (err, items) => {
            res.send({
                items : items
            })
        });
      
    }catch(e){
        throw e
    }
    })().catch( e => {   res.send('Error', 500)})
})

router.get('/api/get-staffs' ,(req, res) => {
    Staff.find({}, (err, items) => {
        res.send({
            items : items
        })
    });

    
});


module.exports = router;