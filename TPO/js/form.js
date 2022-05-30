//var form = document.getElementById("idform")

    const form = document.getElementById('idform');
    const username= document.getElementById('username');
    const email= document.getElementById('email');
    const password= document.getElementById('password');
    
   
    form.addEventListener('submit',(e) => {
        e.preventDefault();

        checkInputs();
    });

    function checkInputs(){
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        
        if (!usernameValue || usernameValue === ''){
            setErrorFor(username, 'Usuario invalido')
        } else{
            setSuccessFor(username);
        }

        if( emailValue === ''){
            setErrorFor(email,'Email invalido');
        } else if (!isEmail(emailValue)){
            setErrorFor(email,'Email no valido');
        } else{
            setSuccessFor(email);
        }
        if (passwordValue === ''){
            setErrorFor(password, 'Contraseña invalido')
        } else{
            setSuccessFor(password);
        }
      

        
    
    }


    function  setErrorFor(input,message){
        const formControl = input.parentElement;
       
        const small = formControl.querySelector(`#${input.id}_small`);

        small.innerText = message;

        formControl.className = 'form-control error';
    }
    function setSuccessFor(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isEmail(email){
      return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    }