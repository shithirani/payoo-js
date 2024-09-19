// step-1

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log('done');

    // step-2

   const addMoney= document.getElementById('input-add-money').value;
 
   
   const inputPin= document.getElementById('input-pin').value;
   console.log(addMoney,inputPin);
//    step-3

if(inputPin === '1234'){
    console.log('adding money');

    // step-4
const balence=document.getElementById('current-balence').innerText;
console.log(typeof balence);

// step-5

const addMoneyinput=parseFloat(addMoney);
const balenceNum=parseFloat(balence);
const newBalence= addMoneyinput+balenceNum;
console.log(newBalence);

//  step-6
document.getElementById('current-balence').innerText=newBalence
}


else{
    alert('wrong,try again');
}

})