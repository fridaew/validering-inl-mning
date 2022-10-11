const form = document.querySelector('#validationForm');
const button = document.querySelector('.btn');
const nonemessage=document.querySelector('.d-none')
/*const firstName =document.querySelector ('#firstName');
const lastName = document.querySelector('#lastName');
const password= document.querySelector('#password')
const password2 = document.querySelector('#repeatPassword')
const email = document.querySelector('#email');*/


const setSuccess = (input) => {
    //input.classList.remove('errorMessage');
    //input.classList.add('d-none');
    console.log('success');
    input.focus()
    return true;
}

const setError = (input) => { //deklarer set error och tar emot input referens
    //input.classList.add('errorMessage');
    //input.classList.remove('d-none');
   
    console.log('error');
    input.focus(); // vi markerar när vi tabbar på något eller markerar på ett element
    return false;
}


const validateText = (id) => {
    
    const name = document.querySelector(id)
    const regEx = /^[a-zA-Zéüöêåø.\-_']+$/
    
    
    //skapar en if-sats
    if(name.value.trim() === '') { // om användaren inte skriver in något
        console.log('Name can not be empty.'); //skrivs texten ut i consolen
        return setError(name); //här kallar vi på set setError funktionen och skickar med våran referens till input
    } 

     else if (name.value.length < 2) { // om värdet är mindra än 2
        console.log('Name must contain at least 2 characters.'); //berättar vi att värdet behöver vara mer än 1 bokstav lång
        return setError(name) 
    }

     else if (!regEx.test(name.value)){
        console.log('Name must contain letters only.');
        return setError(name)
     }
     else {
         return setSuccess(name) // här kallar vi på setSucces 
         }
}



const validateEmail = (id) => {
    
    const email = document.querySelector(id)

    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/
   
    if(email.value.trim() === '') {
        console.log('Email can not be empty.');
        return setError(email)  //här kallar vi på set setError funktionen och skickar med våran referens till input
     } 
     else if (!regExp.test(email.value)) {
        console.log('Email is not valid.');
        return setError(email)
     }
     else {
         return setSuccess(email)
     }

}

const validatePassword = (id) => {

    const password = document.querySelector(id)
    const password2 = document.querySelector('#repeatPassword')

 if (password.value.trim() === ''){
        console.log('Password can not be empty');
      return setError(password)
    }
  else if (password.value.trim().length < 6 || password.value.trim().length > 15){
        console.log('Password min 6 max 15 characters');
        return setError (password)
        }

 
  else if (password2.value !== password.value){
        console.log('Password does not match');
        return setError (password2)
        }
else {
    return setSuccess(password)
    }   

}

 /*const validatePassword2 = (id) => { // fixa så passward 1 och två hittar varandra

    const password2 = document.querySelector(id)
    const password = document.querySelector(id)

    if (password2.value.trim() === ''){
        console.log('Password can not be emptyyyyyy');
        return setError(password2)
    }

    else if (password2.value !== password.value){
        console.log('Password does not match');
        return setError (password2)
        }
    else {
        return setSuccess(password2)
    }

}*/

const validateCheckbox = (id) => {

    const checkbox = document.querySelector(id)
    
    if(!checkbox.checked){

        console.log('You need to check the box');
        return setError(checkbox)
    }

    else {
        return setSuccess(checkbox)
    }
}


form.addEventListener('submit', e => {
    e.preventDefault()

   
  
const errors =[]; //array där vi lägger till eventuella errors

     
   for(let i=0; i < form.length; i++){ //här har vi tillgång till formuläret och tillgång till hur långt formuläret är

    //console.log(form[i]);
        

        const inputId = '#' + form[i].id //hämtar ut id


        if (form[i].type === 'text') { // om den här typen har 'text'. Kollar om den aktuella inputen är i typen text
            errors[i] = validateText(inputId) //vill jag validera texten

        }
         else if(form[i].type === 'email') {
            errors[i] =validateEmail(inputId)

         }
         else if (form[i].type === 'password') {
            errors[i]=validatePassword(inputId)
         }

         
        else if (form[i].type === 'checkbox') {
            errors[i] = validateCheckbox(inputId)

         } 
    }

    console.log(errors);

    const user ={
        Firstname:(firstName).value,
        Lastname:(lastName).value,
        Email:(email).value,
        Password:(password).value
    }

    if(errors.includes(false)) { // kollar om errors inehåller ett false värder
        
        nonemessage.classList.remove('d-none');
     }
    else {
        
        nonemessage.classList.add('d-none');

        console.log('YEY, alla fält är rätt ifyllda!');
        console.log(user)
       
        
        }

        



})





