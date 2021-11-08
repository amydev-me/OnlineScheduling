'use strict';

formSubmitEvent();


function formSubmitEvent(){
    const form = document.getElementById('login-form');    
    form.addEventListener('submit', onClickedSignIn);

}


function onClickedSignIn(event){
    event.preventDefault();

    
    let credentials = {
        email : document.getElementById('inputEmail').value,
        password : document.getElementById('inputPassword').value
    }
    console.log(credentials)
    axios.post(`/api/login`, credentials).then(({data}) => {
        if(data.role == 'Planner'){
            window.location.href = window.location.origin;
        }else{
            window.location.href = '/staff-view';
        }
        // window.location.href = window.location.origin;
    }).catch(error => {
        alert(error.response.data.message)
    })
}