'use strict';

let users = [
    {
        id: 1,
        name : 'Ali',
        status : 'AC'
    },
    {
        id: 2, 
        name : "Bala",
        status : 'FB',
    },
    {
        id: 3, 
        name : "Charles",
        status : 'GA',
    },
    {
        id: 4, 
        name : "Danny",
        status : 'GA',
    },
    {
        id: 5, 
        name : "Ella",
        status : 'AC',
    },
    {
        id: 6, 
        name : "Francis",
        status : 'FB',
    },
    {
        id: 7, 
        name : "Gina",
        status : 'AC',
    },
    {
        id: 8, 
        name : "Hnnah",
        status : 'GA',
    },
    {
        id: 9, 
        name : "Ivan",
        status : 'GA',
    }
]
loadUsers();
function loadUsers(){
    
            
    for(let i = 0, count = users.length; i < count; i++){
        let userDiv = document.createElement("div");
        userDiv.id= `user_${users[i].id}`;
        userDiv.className = "list-group-item";
             
        userDiv.draggable =  true;
        userDiv.dataset.data = JSON.stringify(users[i]);
        userDiv.addEventListener('dragstart', onDragStartUser)
        userDiv.innerHTML = users[i].name;
        document.getElementById('users').appendChild(userDiv);
    }
}


function onDragStartUser(e){
    e.dataTransfer.setData("application/user", e.target.dataset.data);
    e.dataTransfer.effectAllowed = 'move';
}