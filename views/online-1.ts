/**
 * Create Shift 1
 * */

let rowShift = document.createElement("div");
let rowShiftId = "row-shift-1-" + i;
rowShift.className="row";
rowShift.id= rowShiftId;
document.getElementById(rowId).appendChild(rowShift);

let shitColDiv = document.createElement("div");
shitColDiv.className = "card half-width";
shitColDiv.innerHTML = `Shift-1`;
document.getElementById(rowShiftId).appendChild(shitColDiv);

for(let j = 1;j <= 3;j++){
    let empColDiv = document.createElement("div");
    empColDiv.id= `shift_1_emp_${i}_${j}`;
    empColDiv.className = "card half-width";
    empColDiv.innerHTML = data[i][`s1_shift_1_${j}_staff_id`];
    document.getElementById(rowShiftId).appendChild(empColDiv);
}

/**
 * Create Shift 2
 * */

rowShift = document.createElement("div");
rowShiftId = "row-shift-2-" + i;
rowShift.className="row";
rowShift.id= rowShiftId;
document.getElementById(rowId).appendChild(rowShift);

shitColDiv = document.createElement("div");
shitColDiv.className = "card half-width";
shitColDiv.innerHTML = `Shift-2`;
document.getElementById(rowShiftId).appendChild(shitColDiv);

for(let j = 1;j <= 3;j++){
    let empColDiv = document.createElement("div");
    empColDiv.id= `shift_2_emp_${i}_${j}`;
    empColDiv.className = "card half-width";
    empColDiv.innerHTML = data[i][`s1_shift_2_${j}_staff_id`];
    document.getElementById(rowShiftId).appendChild(empColDiv);
}

// let shift1Row = document.createElement("div");
// let shif1RowId = "shift_1_" + i;
// shift1Row.className = "row";
// shift1Row.width = "50px";
// shift1Row.border = "1px solid black";
// shift1Row.id = shif1RowId;
                
// document.getElementById(rowId).appendChild(shift1Row);

// let shift2Row = document.createElement("div");
// let shif2RowId = "shift_2_" + i;
// shift2Row.className = "row";
// shift2Row.border = "1px solid black";
// shift2Row.id = shif2RowId;
// shift2Row.width = "50px";
// document.getElementById(rowId).appendChild(shift2Row);


/**
 * Create Shift Column
 **/
// let shiftDiv = document.createElement("div");
// let shift_1_DivName = "shift_1_div_name";
// shiftDiv.id = shift_1_DivName;
// shiftDiv.className = "inline-block-display";
// document.getElementById(rowId).appendChild(shiftDiv);
// /**
//  * Create Shift Name
//  **/
// for(let j = 1;j <= 2;j++){
//     let shitColDiv = document.createElement("div");
//     shitColDiv.className = "card half-width";
//     shitColDiv.innerHTML = `Shift-${j}`;
//     document.getElementById(shift_1_DivName).appendChild(shitColDiv);
// }

// /**
//  * Create Employee Column
//  **/
// for(let j = 1;j <= 3;j++){
//     let employeeDiv = document.createElement("div");
//     let emp_div_name = `emp_${j}_div_name`;
//     employeeDiv.id = emp_div_name;
//     employeeDiv.className = "inline-block-display";
//     document.getElementById(rowId).appendChild(employeeDiv);
//     /**
//      * Create Shift Name
//      **/
//     for(let k = 1; k <= 2; k++){
//         let empColDiv = document.createElement("div");
//         empColDiv.className = "card half-width";
//         empColDiv.innerHTML =  `s1_shift_1_${k}_staff_id`;
//         document.getElementById(shift_1_DivName).appendChild(empColDiv);
//     }
// }