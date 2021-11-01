'use strict';



function onClickedSave(){
    
   
    axios.post(`/api/save-schedule`, {
        is_active: true,
        starting_week_date : $("#datetimepicker1").find("input").val(),
        items : JSON.stringify(tasks),
        details : []
    }).then(({data}) => {
        onClickedSearch();
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

function onClickedSearch(version_no){

    let starting_week_date = $('#datetimepicker1').datepicker('getFormattedDate', 'dd/mm/yyyy');
    
    axios.get(`/api/get-schedule-by-filter`, {
        params : {
            starting_week_date ,
            version_no
        }
    }).then(({data}) => {
        if(data.schedule){

            schedule.version_no = data.schedule.version_no;
            schedule._id = data.schedule._id;
            schedule.starting_week_date = data.schedule.starting_week_date;
            schedule.is_published = data.schedule.is_published;
            schedule.is_active = data.schedule.is_active;
            tasks = data.schedule.details;
            versions = data.versions;
            if((schedule.is_published && schedule.is_active)){
                viewMode(true);
                showVersion(false);
            }
            else if(!schedule.is_published && !schedule.is_active){
                viewMode(true);

            }else{
                showVersion(true);
                viewMode(false);  
            }
            clearVersions();
            createSelectVersion();

            let element = document.getElementById('versions-list');
            element.value = data.schedule.version_no;
          
        }else{
            schedule.version_no = 1;
            schedule._id = null;
            schedule.starting_week_date = $('#datetimepicker1').datepicker('getFormattedDate', 'dd/mm/yyyy');
            schedule.is_published = false;
            schedule.is_active = true;
            
            showVersion(false);
            viewMode(false);
            tasks = emptyTasks;
        }
        removeAllElement();
        loadUi();
    }).catch(error => {
        console.log(error)
    })
}

