document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log('clicked');

    const phnNumber= document.getElementById('phn-number').value;
    const pinNumber= document.getElementById('pin-number').value;
    console.log(phnNumber,pinNumber);

 
    if(phnNumber === '4' && pinNumber === '1234'){
        console.log('you are login');
        window.location.href="./home.html"
    }
    else{
        alert('wrong ')
    }
})