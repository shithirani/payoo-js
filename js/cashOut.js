document.getElementById('cash-out-money').addEventListener('click',function(event){
    event.preventDefault();
    
    
    const inputMoney=document.getElementById('input-cash-out-money').value;
    const cashOutPin=document.getElementById('input-cash-out-pin').value;

    // if(isNaN (inputMoney)){
    //     alert('no entry');
    // }
  
    if(cashOutPin === '4545'){
        const balence=document.getElementById('current-balence').innerText;
        const newBalence=parseFloat(balence);
        const cashOut=parseFloat(inputMoney);

        const finalAmount=newBalence-cashOut;
        console.log(finalAmount);

        document.getElementById('current-balence').innerText=finalAmount;

    }
    else{
        alert('wrong');
    }
})