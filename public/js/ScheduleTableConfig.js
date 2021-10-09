'use strict';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const SHIFT_1 = 1;
const SHIFT_2 = 2;
const HOUSE_KEEPING = 'hk';
const CAPTAIN = 'cp';

function loadEmptyTable(){  
   
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

        createDutyAssignCol(row, SHIFT_1, DAYS[i], HOUSE_KEEPING);
        createEmptyCol(row);
        createDutyAssignCol(row, SHIFT_2, DAYS[i], CAPTAIN);
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

function createDutyAssignCol(parentRow, shift, day, type){
    let mainDiv = createInlineBlockDisplayDiv(parentRow);

    for(let row = 1; row <= 2 ;row++){
        let divRow = document.createElement("div");
        divRow.id = `${day}-shift-${shift}-${type}-row`;
        divRow.className="row mr-0 ml-0";
        mainDiv.appendChild(divRow);

        for(let col = 1; col <= 3 ;col++){
            let divCol = document.createElement("div");
            divCol.id = `shift-${shift}-${type}-${day}-col-${col}`;           
            divCol.className = "grid-style half-width";
            divCol.innerHTML = '-';  
            divCol.draggable =  true;
            divCol.addEventListener('dragstart', onDragStart)
            divCol.addEventListener('dragenter', onDragEnter)
            divCol.addEventListener('dragover', onDragOver)
            divCol.addEventListener('dragleave', onDragLeave)
            divCol.addEventListener('drop', onDragDrop)
            divCol.dataset.data = JSON.stringify({
                id : null,
                column_id : divCol.id,
                day_name : "Monday",                        
                s1_shift_1_1_staff_id : null,
                s1_shift_1_2_staff_id : null,
                s1_shift_1_3_staff_id : null,
                s1_shift_2_1_staff_id : null,
                s1_shift_2_2_staff_id : null,
                s1_shift_2_3_staff_id : null,

                s2_shift_1_1_staff_id : null,
                s2_shift_1_2_staff_id : null,
                s2_shift_1_3_staff_id : null,
                s2_shift_2_1_staff_id : null,
                s2_shift_2_2_staff_id : null,
                s2_shift_2_3_staff_id : null
            });
            divRow.appendChild(divCol);
        }
    }
}

function onDragStart(e){

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
    console.log(targetDiv)
    if(!targetData){
        let userObjString = ev.dataTransfer.getData("application/user");
        if(userObjString){
            const user_data =  JSON.parse(ev.dataTransfer.getData("application/user"));
                  
            data[targetDataIndex][targetDivId] = user_data.name;
          
        }

        // {
        //     "id" : 6,
        //     "status_1": "AC",
        //     "s1_shift_1_1_staff_id" : "Ella",
        //     "s1_shift_1_2_staff_id" : "Hannah",
        //     "s1_shift_1_3_staff_id" : "x",
        //     "s1_shift_2_1_staff_id" : "Charles",
        //     "s1_shift_2_2_staff_id" : "Ivan",
        //     "s1_shift_2_3_staff_id" : "x",
        
        //     "status_2": "FB",
        //     "s2_shift_1_1_staff_id" : "Bala",
        //     "s2_shift_1_2_staff_id" : "x",
        //     "s2_shift_1_3_staff_id" : "x",
        //     "s2_shift_2_1_staff_id" : "Francis",
        //     "s2_shift_2_2_staff_id" : "x",
        //     "s2_shift_2_3_staff_id" : "x",
        //     "created_at" : "2021/10/02",
        //     "updated_at" : "2021/10/02",
        //     "day_name" : "Saturday"
        // },
    }
    // else{
    //     const targetDiv = JSON.parse(ev.target.dataset.data);    
    //     if(!targetDiv.draggable){alert("Currently Not available to assign this shift."); return;}

    //     let targetDataIndex = data.findIndex(e=> e.id == targetDiv.id);
    //     let targetDivId = `s${targetDiv.status}_shift_${targetDiv.shift}_${targetDiv.col}_staff_id`;


    //     let userObjString = ev.dataTransfer.getData("application/user");
    //     if(userObjString){
    //         const user_data =  JSON.parse(ev.dataTransfer.getData("application/user"));
               
    //         data[targetDataIndex][targetDivId] = user_data.name;
          
    //     }else{
    //         const from_data =  JSON.parse(ev.dataTransfer.getData("application/json"));
            
    //         /**
    //             * Find Index Of array
    //             * */
    //         let fromDataIndex = data.findIndex(e=> e.id == from_data.id);

    //         /**
    //         * Create column name
    //         * */
    //         let _fromKey = `s${from_data.status}_shift_${from_data.shift}_${from_data.col}_staff_id`;
               

    //         /**
    //             * copy data
    //             * */
    //         let cloneFromId = data[fromDataIndex][_fromKey];
    //         let cloneTargetData = data[targetDataIndex][targetDivId];
    //         /**
    //             * swap by index
    //             * */
    //         data[fromDataIndex][_fromKey] = cloneTargetData;
    //         data[targetDataIndex][targetDivId] = cloneFromId;
        
               
    //     }
    // }

            
    // removeAllElement();

    // loadData();

    /**
     * Not drop from user list
     * */
    // if(!user_data){
           
    // }
    // else{
    //     console.log('User Data', user_data)
    // }
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