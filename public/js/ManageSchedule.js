'use strict';



function onClickedSave(){
    
   
    axios.post(`/api/save-schedule`, {
        starting_week_date : $("#datetimepicker1").find("input").val(),
        items : JSON.stringify(tasks)
    }).then(({data}) => {
        
    }).catch(error => {

    })
}

function onClickedPublish(){
    
    axios.post(`/api/publish-schedule`, {
        starting_week_date : schedule.starting_week_date,
        version_no : schedule.version_no,
        _id : schedule._id
    }).then(({data}) => {
        
    }).catch(error => {

    })
}