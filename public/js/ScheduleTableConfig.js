'use strict';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const SHIFT_1 = 1;
const SHIFT_2 = 2;
const HOUSE_KEEPING = 'hk';
const CAPTAIN = 'cp';
let schedule =  {
    _id : null,
    starting_week_date : null,
    version_no : 1,
    is_published : false
}

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

let tasks = []
loadData();



/**
 * Get Current week Monday
 */
function getCurrentWeekMonday(){
    var dt = new Date();
    var days = ((dt.getDay() + 7) - 1) % 7;
    
    return dt.setDate(dt.getDate() - days);
}
function onSelectedDateChange(e){
    console.log(e.format())
}

function loadData(){
    axios.get(`/api/get-schedule`).then(({data}) => {
        if(data.schedule){

            schedule.version_no = data.schedule.version_no;
            schedule._id = data.schedule._id;
            schedule.starting_week_date = data.schedule.starting_week_date;
            schedule.is_published = data.schedule.is_published;
            $(".date").datepicker("update",  schedule.starting_week_date);
            tasks = data.schedule.details;
        }else{
            let _monday =  moment(getCurrentWeekMonday()).format('DD/MM/YYYY');
            schedule.version_no = 1;
            schedule._id = null;
            schedule.starting_week_date = _monday;
            $(".date").datepicker("update", _monday);
            tasks = emptyTasks;
        }
        createScheduleTable();
    }).catch(error => {
        console.log(error)
    })
}

function createScheduleTable(){
    for(let i = 0; i < 7; i++){
        let row = document.createElement("div");
        row.className="row";
        document.getElementById('main').appendChild(row);
        
        let dayDiv = document.createElement("div");
        dayDiv.className = "grid-style full-width";
        dayDiv.innerHTML = DAYS[i];
        row.appendChild(dayDiv);

        createShiftCol(row);
        createEmptyCol(row);

        createDutyAssignCol(row, DAYS[i], HOUSE_KEEPING);
        createEmptyCol(row);
        createDutyAssignCol(row, DAYS[i], CAPTAIN);
    }
}

function createEmptyCol(row){
    let emptyCol = createInlineBlockDisplayDiv(row)

    for(let row = 1; row <= 2 ;row++){
        let emptyRow = document.createElement("div");
        emptyRow.className="row mr-0 ml-0";
        emptyRow.className = "empty-col border-none";
        emptyCol.appendChild(emptyRow);
    }
}

function createInlineBlockDisplayDiv(row){
    let div = document.createElement("div");
    div.className = "inline-block-display";
    row.appendChild(div);

    return div;
}

function createShiftCol(row){
    let shiftCol = createInlineBlockDisplayDiv(row)

    for(let row = 1; row <= 2 ;row++){
        let shiftRow = document.createElement("div");
        shiftRow.className="row mr-0 ml-0";
        shiftRow.className = "grid-style half-width";
        shiftRow.innerHTML = `Shift-${row}`;
        shiftCol.appendChild(shiftRow);
    }
}

function createDutyAssignCol(parentRow, day, type){
    let mainDiv = createInlineBlockDisplayDiv(parentRow);

    for(let shift = 1; shift <= 2 ;shift++){
        let divRow = document.createElement("div");
        divRow.id = `${day}-shift-${shift}-${type}-row`;
        divRow.className="row mr-0 ml-0";
        mainDiv.appendChild(divRow);

        for(let col = 1; col <= 3 ;col++){
            let divCol = document.createElement("div");
            divCol.id = `shift-${shift}-${type}-${day}-col-${col}`;           
           
            let isDraggable = false;
            if( type == HOUSE_KEEPING){
               isDraggable = (col == 1 || col == 2);
                
            }

            if( type == CAPTAIN){
                isDraggable = (col == 1);
            }
            let dbColName = `shift_${shift}_${type}_col_${col}_staff_id`;
            let task = tasks.find(e => e.day_name == day);
            task.column_id = divCol.id;
            task.db_col_name = dbColName;
            task.draggable = isDraggable;
            task.type = type;
           
            divCol.draggable =  true;
            divCol.addEventListener('dragstart', onDragStart)
            divCol.addEventListener('dragenter', onDragEnter)
            divCol.addEventListener('dragover', onDragOver)
            divCol.addEventListener('dragleave', onDragLeave)
            divCol.addEventListener('drop', onDragDrop)
            divCol.dataset.data = JSON.stringify(task);
            divCol.className = "grid-style half-width " + ( !isDraggable ? 'alert-danger' : 'alert-light');
            divCol.innerHTML = task[dbColName] ? task[dbColName].name : 'x';
            // ? task[dbColName].name : 'x';
            divRow.appendChild(divCol);
        }
    }
}

function onDragStart(e){ 
    if(schedule.is_published){alert("Can't modify this schedule already published.")}
    if(!JSON.parse(e.target.dataset.data).draggable){alert("Currently Not available to assign this shift.");e.preventDefault();}
    e.dataTransfer.setData("application/json", e.target.dataset.data);   
    e.dataTransfer.setData("Text", JSON.parse(e.target.dataset.data).column_id);
    e.dataTransfer.effectAllowed = 'move';
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

function onDragDrop(ev){
    ev.preventDefault();
    const targetData = ev.target.dataset.data;
    const targetDiv = JSON.parse(targetData);
    if(!targetDiv.draggable){alert("Currently Not available to assign this shift."); return;}

    let targetTaskIndex = tasks.findIndex(e => e.day_name == targetDiv.day_name);
   
    let userObjString = ev.dataTransfer.getData("application/user");
    if(userObjString){
        const staff =  JSON.parse(ev.dataTransfer.getData("application/user"));
        if(staff.status == 'FB'){
            console.log( tasks[targetTaskIndex])
        }
        tasks[targetTaskIndex][targetDiv.db_col_name] = { _id : staff._id, name : staff.name, status : staff.status};
        // { _id : staff._id, name : staff.name};
    }
    else
    {
        const fromTaskObj =  JSON.parse(ev.dataTransfer.getData("application/json"));
        let fromTaskIndex = tasks.findIndex(e=> e.day_name == fromTaskObj.day_name);
    
        let cloneStaffId = fromTaskObj[fromTaskObj.db_col_name];   
        let cloneTargetData = targetDiv[targetDiv.db_col_name];

      
        tasks[fromTaskIndex][fromTaskObj.db_col_name] = cloneTargetData;
        tasks[targetTaskIndex][targetDiv.db_col_name] = cloneStaffId;
    }
    removeAllElement();
    createScheduleTable();
}
function removeAllElement(){
    /**
  * Remove all main child element
  * */
    const myNode = document.getElementById("main");
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }
}