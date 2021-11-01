'use strict';
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const HOUSE_KEEPING = 'hk';
const CAPTAIN = 'cp';
let tasks = [];
let versions = [];
let emptyTasks =   [
    {
        id : null,        
        shift_1_hk_col_1_staff_id : null,
        shift_1_hk_col_2_staff_id : null,
        shift_1_hk_col_3_staff_id : null,

        shift_2_hk_col_1_staff_id : null,
        shift_2_hk_col_2_staff_id : null,
        shift_2_hk_col_3_staff_id : null,
       
        shift_1_cp_col_1_staff_id : null,
        shift_1_cp_col_2_staff_id : null,
        shift_1_cp_col_3_staff_id : null,

        shift_2_cp_col_1_staff_id : null,
        shift_2_cp_col_2_staff_id : null,
        shift_2_cp_col_3_staff_id : null,
        created_at : null,
        updated_at : null,
        day_name : "Monday"
    },
    {
        id : null,        
        shift_1_hk_col_1_staff_id : null,
        shift_1_hk_col_2_staff_id : null,
        shift_1_hk_col_3_staff_id : null,

        shift_2_hk_col_1_staff_id : null,
        shift_2_hk_col_2_staff_id : null,
        shift_2_hk_col_3_staff_id : null,
       
        shift_1_cp_col_1_staff_id : null,
        shift_1_cp_col_2_staff_id : null,
        shift_1_cp_col_3_staff_id : null,

        shift_2_cp_col_1_staff_id : null,
        shift_2_cp_col_2_staff_id : null,
        shift_2_cp_col_3_staff_id : null,
        created_at : null,
        updated_at : null,
        day_name : "Tuesday"
    },
    {
        id : null,        
        shift_1_hk_col_1_staff_id : null,
        shift_1_hk_col_2_staff_id : null,
        shift_1_hk_col_3_staff_id : null,

        shift_2_hk_col_1_staff_id : null,
        shift_2_hk_col_2_staff_id : null,
        shift_2_hk_col_3_staff_id : null,
       
        shift_1_cp_col_1_staff_id : null,
        shift_1_cp_col_2_staff_id : null,
        shift_1_cp_col_3_staff_id : null,

        shift_2_cp_col_1_staff_id : null,
        shift_2_cp_col_2_staff_id : null,
        shift_2_cp_col_3_staff_id : null,
        created_at : null,
        updated_at : null,
        day_name : "Wednesday"
    },
    {
        id : null,        
        shift_1_hk_col_1_staff_id : null,
        shift_1_hk_col_2_staff_id : null,
        shift_1_hk_col_3_staff_id : null,

        shift_2_hk_col_1_staff_id : null,
        shift_2_hk_col_2_staff_id : null,
        shift_2_hk_col_3_staff_id : null,
       
        shift_1_cp_col_1_staff_id : null,
        shift_1_cp_col_2_staff_id : null,
        shift_1_cp_col_3_staff_id : null,

        shift_2_cp_col_1_staff_id : null,
        shift_2_cp_col_2_staff_id : null,
        shift_2_cp_col_3_staff_id : null,
        created_at : null,
        updated_at : null,
        day_name : "Thursday"
    },
    {
        id : null,        
        shift_1_hk_col_1_staff_id : null,
        shift_1_hk_col_2_staff_id : null,
        shift_1_hk_col_3_staff_id : null,

        shift_2_hk_col_1_staff_id : null,
        shift_2_hk_col_2_staff_id : null,
        shift_2_hk_col_3_staff_id : null,
       
        shift_1_cp_col_1_staff_id : null,
        shift_1_cp_col_2_staff_id : null,
        shift_1_cp_col_3_staff_id : null,

        shift_2_cp_col_1_staff_id : null,
        shift_2_cp_col_2_staff_id : null,
        shift_2_cp_col_3_staff_id : null,
        created_at : null,
        updated_at : null,
        day_name : "Friday"
    },
    {
        id : null,        
        shift_1_hk_col_1_staff_id : null,
        shift_1_hk_col_2_staff_id : null,
        shift_1_hk_col_3_staff_id : null,

        shift_2_hk_col_1_staff_id : null,
        shift_2_hk_col_2_staff_id : null,
        shift_2_hk_col_3_staff_id : null,
       
        shift_1_cp_col_1_staff_id : null,
        shift_1_cp_col_2_staff_id : null,
        shift_1_cp_col_3_staff_id : null,

        shift_2_cp_col_1_staff_id : null,
        shift_2_cp_col_2_staff_id : null,
        shift_2_cp_col_3_staff_id : null,
        created_at : null,
        updated_at : null,
        day_name : "Saturday"
    },
    {
        id : null,        
        shift_1_hk_col_1_staff_id : null,
        shift_1_hk_col_2_staff_id : null,
        shift_1_hk_col_3_staff_id : null,

        shift_2_hk_col_1_staff_id : null,
        shift_2_hk_col_2_staff_id : null,
        shift_2_hk_col_3_staff_id : null,
       
        shift_1_cp_col_1_staff_id : null,
        shift_1_cp_col_2_staff_id : null,
        shift_1_cp_col_3_staff_id : null,

        shift_2_cp_col_1_staff_id : null,
        shift_2_cp_col_2_staff_id : null,
        shift_2_cp_col_3_staff_id : null,
        created_at : null,
        updated_at : null,
        day_name : "Sunday"
    }
];
let emptyObject = null;
let schedule =  {
    _id : null,
    starting_week_date : null,
    version_no : 1,
    is_published : false,
    is_active : false
}

/**
 * Get Current week Monday
 */
 function getCurrentWeekMonday(){
    var dt = new Date();
    var days = ((dt.getDay() + 7) - 1) % 7;
    
    return dt.setDate(dt.getDate() - days);
}



loadData();

function viewMode(viewMode){
    let btnSave = document.getElementById("btn-save");
    let btnPublish = document.getElementById("btn-publish");
    btnSave.style.display = viewMode?'none' :'inline';
    btnPublish.style.display = viewMode?'none' :'inline';
}

function showVersion(mode){
    let col = document.getElementById("version-col");
    col.style.display = mode ? 'block' : 'none';
    // let select = document.getElementById("versions-list");
    // select.options.length = 0;
}
function clearVersions(){
    let select = document.getElementById("versions-list");
    select.options.length = 0;
}
function createSelectVersion(){
    var selectList = document.getElementById("versions-list");
    //Create and append the options
    for (var i = 0, count = versions.length; i < count; i++) {
        selectList.options[selectList.options.length] = new Option(versions[i], versions[i]);
    }
}
function getStatusColor(status){
    switch(status){
        case 'AC' : 
            return 'bg-warning text-white'
        case 'FB' : 
            return 'bg-primary text-white'
        case 'GAS' : 
            return 'bg-success text-white'
        default :
            return 'bg-light text-dark'
    }
}
function onSelectedDateChange(){
   
    onClickedSearch()
}
function onSelectedVersionChange(){
    let version_no = document.getElementById("versions-list").value;
    onClickedSearch(version_no)
}



function loadData(){
    axios.get(`/api/get-schedule`).then(({data}) => {
        if(data.schedule){

            schedule.version_no = data.schedule.version_no;
            schedule._id = data.schedule._id;
            schedule.starting_week_date = data.schedule.starting_week_date;
            schedule.is_published = data.schedule.is_published;
            schedule.is_active = data.schedule.is_active;
            tasks = data.schedule.details;
            versions = data.versions;

            $(".date").datepicker("update",  schedule.starting_week_date);
            if((schedule.is_published && schedule.is_active)){
                viewMode(true);
                showVersion(false);
            }
            else if(!schedule.is_published && !schedule.is_active){
                viewMode(true);
                showVersion(true);
            }
            else{
                showVersion(true);
                viewMode(false);                
                createSelectVersion();
            }
          
        }else{
            let _monday =  moment(getCurrentWeekMonday()).format('DD/MM/YYYY');
            schedule.version_no = 1;
            schedule._id = null;
            schedule.starting_week_date = _monday;
            schedule.is_published = false;
            schedule.is_active = true;
            $(".date").datepicker("update", _monday);
            showVersion(false);
            viewMode(false);
            tasks = emptyTasks;
        }
        loadUi();
    }).catch(error => {
        console.log(error)
    })
}
function loadUi(){
    let myTableDiv = document.getElementById("schedule");
      
    let table = document.createElement('table');
    table.className="table table-bordered text-center";
    
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for(let i = 0; i <=6 ; i++){
        for(let row = 1; row <=2 ; row++){
            let tr = document.createElement('tr');
            let divCol = document.createElement("div");
            tableBody.appendChild(tr);

            let td = document.createElement('td');
            if(row == 1){
                td.className="align-middle table-column"
                td.rowSpan = 2;
                divCol.innerHTML = DAYS[i];
                td.appendChild(divCol);
                tr.appendChild(td);
            }

            td = document.createElement('td');
            td.className="align-middle table-column"
            divCol = document.createElement("div");
            divCol.innerHTML = `Shift-${row}`;
            td.appendChild(divCol);
            tr.appendChild(td);

            createDutyAssignCol(tr, DAYS[i], HOUSE_KEEPING, row);
            createDutyAssignCol(tr, DAYS[i], CAPTAIN, row);
        }
    }
    myTableDiv.appendChild(table);
}

function createDutyAssignCol(parentRow, day, type, row){
    for (let col=1; col <= 3; col++){
        let td = document.createElement('td');
      
        let isDraggable = false;
        if( type == HOUSE_KEEPING){
           isDraggable = (col == 1 || col == 2);
        }
        if( type == CAPTAIN){
            isDraggable = (col == 1);
        }

        
        let dbColName = `shift_${row}_${type}_col_${col}_staff_id`;
        let column_id =`shift-${row}-${type}-${day}-col-${col}`;
        let task = tasks.find(e => e.day_name == day);
        let assign = Object.create( {} );

        // debugger;
        assign.column_id = column_id;
        assign.db_col_name = dbColName;
        assign.type = type;
        assign.staff_name = task[dbColName] ? task[dbColName].name : (isDraggable?'+' : null);
        assign.status = task[dbColName] ? task[dbColName].status : null;
        assign.draggable = isDraggable;
        assign.day_name = day;     
        assign.id = task._id;  

        let divCol = document.createElement("div");
        
         if(isDraggable && task[dbColName] && !schedule.is_published && schedule.is_active){
            let btn = document.createElement("button");
            btn.type = "button";
            btn.className = "close";          
            btn.addEventListener('click', function(){
                onClickedDelete(assign)
            });
            let icon = document.createElement('span');
            icon.innerHTML = "&times;"  
            btn.appendChild(icon)
            td.appendChild(btn);
       
        }else{
            divCol.className = "table-column"
            divCol.innerHTML = null;
            td.appendChild(divCol);
            parentRow.appendChild(td);
        }
        divCol.className = "table-column pt-3 " + getStatusColor(assign.status) + ((isDraggable && !task[dbColName] && !schedule.is_published && schedule.is_active) ? ' cursor-pointer' : '')
        divCol.innerHTML = assign.staff_name;
        divCol.id =column_id;       

        if(!schedule.is_published && schedule.is_active){
            divCol.draggable =  true;
            divCol.addEventListener('dragstart', onDragStart)
            divCol.addEventListener('dragenter', onDragEnter)
            divCol.addEventListener('dragover', onDragOver)
            divCol.addEventListener('dragleave', onDragLeave)
            divCol.addEventListener('drop', onDragDrop)
            divCol.dataset.data = JSON.stringify(assign);
        }
        td.appendChild(divCol);
        parentRow.appendChild(td);
    }
}
function onClickedDelete(para){
    emptyObject =para;
    $('#confirm-delete').modal('show');
}
$('#confirm-yes').on('click', function(event) {
   
    event.preventDefault(); 
    $('#confirm-delete').modal('hide');
    let taskIndex = tasks.findIndex(e => e._id == emptyObject.id);
    tasks[taskIndex][emptyObject.db_col_name] = null;
    removeAllElement();
    loadUi();
  });
function onDragStart(e){ 
    if(schedule.is_published){alert("Can't modify this schedule already published.")}
    if(!JSON.parse(e.target.dataset.data).draggable){alert("Currently Not available to assign this shift.");e.preventDefault();}
    e.dataTransfer.setData("application/json", e.target.dataset.data);   
    e.dataTransfer.setData("Text", JSON.parse(e.target.dataset.data).column_id);
    e.dataTransfer.effectAllowed = 'move';
}



function onDragDrop(ev){
    ev.preventDefault();
    const targetData = ev.target.dataset.data;
    const targetDiv = JSON.parse(targetData);
    if(!targetDiv.draggable){alert("Currently Not available to assign this shift."); return;}

   
    let targetTask = tasks.find(e => e.day_name == targetDiv.day_name);
    let targetTaskIndex = tasks.findIndex(e => e.day_name == targetDiv.day_name);
   
    let userObjString = ev.dataTransfer.getData("application/user");
    if(userObjString){
        const staff =  JSON.parse(ev.dataTransfer.getData("application/user"));   

        if(staff.status == 'FB' && targetDiv.type == HOUSE_KEEPING ){          
            alert("Staff can't involve in House Keeping (Amenity Center)!"); return;
        }

        if(staff.status == 'AC' && targetDiv.type == CAPTAIN ){          
            alert("Staff can't involve in F&B (Captain)!"); return;
        }


        /**
         * DROP ALI
        */
   
        let fromTask = tasks.find(e=> e.day_name == targetDiv.day_name);
        for(let col in fromTask){
            if(fromTask[col]){
                if(fromTask[col]._id == staff._id){
                    alert("Can't assign staff in the same day!!!")
                    return;
                }
            }
        }
        
        tasks[targetTaskIndex][targetDiv.db_col_name] = { _id : staff._id, name : staff.name, status : staff.status};
    }
    else
    {
    
        const fromTaskObj =  JSON.parse(ev.dataTransfer.getData("application/json"));

        if((fromTaskObj.status == 'FB' && targetDiv.type == HOUSE_KEEPING)){          
            alert("Staff can't involve in House Keeping (Amenity Center)!"); return;
        }else if((fromTaskObj.status == 'AC' && targetDiv.type == CAPTAIN )){          
            alert("Staff can't involve in F&B (Captain)!"); return;
        }

        if((targetDiv.status == 'FB' && fromTaskObj.type == HOUSE_KEEPING) ){          
            alert("Staff can't involve in House Keeping (Amenity Center)!"); return;
        }else if(targetDiv.status == 'AC' && fromTaskObj.type == CAPTAIN ){          
            alert("Staff can't involve in F&B (Captain)!"); return;
        }

        let assignTarget = tasks.find(e=> e.day_name == targetDiv.day_name);
        
        // for(let col in assignTarget){
        //     if(assignTarget[col]){
        //         console.log(assignTarget[col])
        //         // if(assignTarget[col]._id == targetDiv._id){
        //         //     // alert("Can't assign staff in the same day!!!")
        //         //     return;
        //         // }
        //     }
        // }
        

        let fromTask = tasks.find(e=> e.day_name == fromTaskObj.day_name);
        let fromTaskIndex = tasks.findIndex(e=> e.day_name == fromTaskObj.day_name);

        let cloneStaffId = fromTask[fromTaskObj.db_col_name];
        let cloneTargetData = targetTask[targetDiv.db_col_name];

       
      
        // let fromType  = fromTaskObj.db_col_name.includes('hk') ? HOUSE_KEEPING : CAPTAIN;
        // let targetType  = targetDiv.db_col_name.includes('hk') ? HOUSE_KEEPING : CAPTAIN;
     
        tasks[fromTaskIndex][fromTaskObj.db_col_name] = cloneTargetData;
        tasks[targetTaskIndex][targetDiv.db_col_name] = cloneStaffId;
    }
    removeAllElement();
    loadUi();
}
function onDragEnter(e){
    e.preventDefault();
}

function onDragOver(e){
    e.preventDefault();
}

function onDragLeave(e){
    e.preventDefault();
}
function removeAllElement(){
    /**
  * Remove all main child element
  * */
    const myNode = document.getElementById("schedule");
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }
}