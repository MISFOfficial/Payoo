// Login function
document.getElementById('btn-login').addEventListener('click', function(){
    const emails = document.getElementById('number')
    const inputEmail=emails.value;
    if(inputEmail.length==11){
        const pins=document.getElementById('pin')
        const inputPin=pins.value;
        if(inputPin==='1234'){
            window.location.href="home.html";
        }
        else{
            alert('Pin is 1234')
        }
    }
    else{
        alert("User ID is invalid, type 11 Digit number")
    }  
})

