'use strict';


function onClickedSave(){
    axios.post(`/api/save-schedule`, {
        starting_week_date : '11/10/2021',
        version_no : 1,
        is_active : true,
        is_published : false,
        items : JSON.stringify(tasks)
    }).then(({data}) => {
        
    }).catch(error => {

    })
}