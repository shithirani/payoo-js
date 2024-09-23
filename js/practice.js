document.getElementById('add-money'),addEventListener('click',function(event){
    event.preventDefault();
  
    const inputMoney=document.getElementById('input-add-money').value;
    const inputPin=document.getElementById('input-pin').value;
    
    if(inputPin === '123'){
        const balence=document.getElementById('current-balence').innerText;
        const newBalence=parseFloat(balence);
        const monyes=parseFloat(inputMoney);
        const newAmmount=newBalence+monyes;
        console.log(newAmmount);

        document.getElementById('current-balence').innerText=newAmmount;

    }
    else{
        alert('wrong');
    }
})