const router = require('express').Router();
const Staff = require('../Model/Staff');
const Schedule = require('../Model/Schedule');
const ScheduleDetail = require('../Model/ScheduleDetail');
const mongoose=require('mongoose');
const populateSchedule = [
    {
        path: 'shift_1_hk_col_1_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },
    {
        path: 'shift_1_hk_col_2_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },
    {
        path: 'shift_1_hk_col_2_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },
    {
        path: 'shift_1_hk_col_3_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },
    {
        path: 'shift_2_hk_col_1_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },
    {
        path: 'shift_2_hk_col_2_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },
    {
        path: 'shift_2_hk_col_3_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },

    {
        path: 'shift_1_cp_col_1_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },
    {
        path: 'shift_1_cp_col_2_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },
    {
        path: 'shift_1_cp_col_3_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },

    {
        path: 'shift_2_cp_col_1_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },
    {
        path: 'shift_2_cp_col_2_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    },
    {
        path: 'shift_2_cp_col_3_staff_id',
        model: "staff",
        select: {'name' : 1, 'status':1}
    }
]
const isAuth = require('../middleware/auth').isAuth;
const bcrypt = require('bcrypt')
const passport = require('passport')


router.get('/login' ,(req, res) => {
    res.render('Login')
});
router.get('/' , isAuth, (req, res) => {
    res.render('Planner')
});
router.get('/planner' , isAuth, (req, res) => {
    res.render('Planner')
});
router.get('/staff-view' , isAuth, (req, res) => {
    res.render('Staff')
});
router.post("/api/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(400).send({
                message : 'Invalid email or password'
            })
        }
        req.session.loggedin = true;
        req.session.user = user;
        req.login(user, (err) => {
            res.send({
                email : user.email,
                full_name : user.name,
                role : user.role
            })
        })
    })(req, res, next)
})

router.get('/logout', (req, res, next) => {
    req.session.loggedin = false;
    req.logout();
    res.redirect('/login');
})

router.post('/api/create-staff' , async (req, res) => {
    try{
        const staff = req.body;    
        const salt = bcrypt.genSaltSync(15);
        const hash = bcrypt.hashSync(staff.password, salt);
        staff.password = hash;
        const newStaff= await new Staff(staff);

        const _newStaff = await newStaff.save();

        Staff.find({role : "Staff"}).sort({ status : -1, name : 1 }).exec(function (err, items){
            res.send({
                items : items
            })
        });
    
    }catch(e){
        res.send('Error', 500)
    }
})

router.get('/api/get-staffs' ,(req, res) => {
    Staff.find({role : "Staff"}).sort({ status : -1, name : 1 }).exec(function (err, items){
        res.send({
            items : items
        })
    });
});

router.get('/api/get-schedule' ,async (req, res) => {  
        let schedule = await Schedule.findOne().sort({updatedAt: -1}).populate({

        path: 'details',
        model: 'ScheduleDetail',
        populate: populateSchedule
    }).exec(async function (err, data) {
        let versions = [];
        let tmpVersions = [];
        if(data){
            versions = await Schedule.find({starting_week_date : data.starting_week_date},{version_no : 1, _id : 0}).sort({version_no: -1});
            tmpVersions = versions.map(function(item) {
                return item['version_no'];
            });
        }
        
        res.send({
            schedule : data,
            versions : tmpVersions
        })
    });
   
});

router.get('/api/get-puslished-schedule' ,async (req, res) => {  
    let schedule = await Schedule.findOne({is_published : true}).sort({updatedAt: -1}).populate({

        path: 'details',
        model: 'ScheduleDetail',
        populate: populateSchedule
    }).exec(async function (err, data) {
    
        res.send({
            schedule : data,
            
        })
    });

});
router.get('/api/get-schedule-by-filter' ,async (req, res) => {  
        let versions = await Schedule.find({starting_week_date : req.query.starting_week_date},{version_no : 1, _id : 0}).sort({version_no: -1});
        
        let findBy = Object.create({});
        findBy.starting_week_date = req.query.starting_week_date;
        if(req.query.version_no){
            findBy.version_no = req.query.version_no;
        }else{
            findBy.is_active = true;
        }
       

        let schedulelist = await Schedule.findOne(findBy).sort({updatedAt: -1}).populate({
            path: 'details',
            model: 'ScheduleDetail',
            populate: populateSchedule
        }).exec(function (err, data) {
            let tmpVersions = versions.map(function(item) {
                return item['version_no'];
            });
            res.send({
                schedule : data,
                versions : tmpVersions
            })
        });
   
});
router.get('/api/get-published-schedule-by-filter' ,async (req, res) => {  
    let versions = await Schedule.find({starting_week_date : req.query.starting_week_date, is_published : true},{version_no : 1, _id : 0}).sort({version_no: -1});
    
    let schedulelist = await Schedule.findOne({starting_week_date : req.query.starting_week_date, is_published : true}).sort({updatedAt: -1}).populate({
        path: 'details',
        model: 'ScheduleDetail',
        populate: populateSchedule
    }).exec(function (err, data) {
        res.send({
            schedule : data
          
        })
    });

});


router.post('/api/save-schedule', async (req, res, next) => {
    try{
        const schedule = req.body;
        const items = JSON.parse(schedule.items);
      
        let _maxSch = await Schedule.findOne({starting_week_date : schedule.starting_week_date}).sort('-version_no');
        /**
         * Update old record to inactive
         */
        await Schedule.updateMany ({starting_week_date : schedule.starting_week_date}, {is_active: false })
        /**
         * Get Max Version No.
         */
        schedule.version_no = _maxSch ? _maxSch.version_no + 1 : 1;

        let details = []
        await items.forEach(async (e) => {
            try{
                
                // const detail = await new ScheduleDetail({
                details.push({
                    shift_1_hk_col_1_staff_id : e.shift_1_hk_col_1_staff_id ? mongoose.Types.ObjectId(e.shift_1_hk_col_1_staff_id._id) : null,
                    shift_1_hk_col_2_staff_id : e.shift_1_hk_col_2_staff_id ? mongoose.Types.ObjectId(e.shift_1_hk_col_2_staff_id._id) : null,
                    shift_1_hk_col_3_staff_id : null,

                    shift_2_hk_col_1_staff_id : e.shift_2_hk_col_1_staff_id ? mongoose.Types.ObjectId(e.shift_2_hk_col_1_staff_id._id) : null,
                    shift_2_hk_col_2_staff_id : e.shift_2_hk_col_2_staff_id ? mongoose.Types.ObjectId(e.shift_2_hk_col_2_staff_id._id) : null,
                    shift_2_hk_col_3_staff_id : null,

                    shift_1_cp_col_1_staff_id : e.shift_1_cp_col_1_staff_id ? mongoose.Types.ObjectId(e.shift_1_cp_col_1_staff_id._id) : null,
                    shift_1_cp_col_2_staff_id : null,
                    shift_1_cp_col_3_staff_id : null,

                    shift_2_cp_col_1_staff_id : e.shift_2_cp_col_1_staff_id ? mongoose.Types.ObjectId(e.shift_2_cp_col_1_staff_id._id) : null,
                    shift_2_cp_col_2_staff_id : null,
                    shift_2_cp_col_3_staff_id : null,
                    day_name : e.day_name
                })
                // const detailItem = await detail.save();
            }catch(e){
                
                next(e);
            }
        })
        const insertMany =  await  ScheduleDetail.insertMany(details)
        
        let id_collection = [];
        await insertMany.forEach(e => {
            id_collection.push(e._id)
        })
        schedule.details = id_collection;
        const newSchedule= await new Schedule(schedule);
        const _schedule = await newSchedule.save();
        res.send('Success')
    }catch(e){
        next(e);
    }
})

router.post('/api/publish-schedule', async (req, res, next) => {
    try{
        const schedule = req.body;
        await Schedule.updateOne({_id : schedule._id}, {is_published : true});
        await Schedule.deleteMany({starting_week_date : schedule.starting_week_date, is_published: false})
        res.send('Success')
    }catch(e){
        next(e);
    }
})

module.exports = router;