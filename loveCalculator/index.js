const inputOneValue = document.getElementById('a');
const inputTwoValue = document.getElementById('b');
const btnCalculate = document.getElementById('knopka');

const resultDiv = document.getElementById('resultDiv');


btnCalculate.addEventListener('click',()=> {
    let loveconculator;
    loveconculator = Math.floor(Math.random() * 100 + 1);

    
    if( inputOneValue.value == "" || inputTwoValue.value==""){
      alert( "Fill the field please!")
    }
    
    if(
        loveconculator >= 70)
    {
     resultDiv.innerHTML = `<p>${loveconculator}% <br> Ihr seid unzertrennlich !!! &nbsp;
     &nbsp; &nbsp;


</p>`;
    
           
    } else{
        resultDiv.innerHTML = `<p>${loveconculator}% <br> Ihr seid wie Feuer und Wasser </p>`;
         setTimeout ( () => ( resultDiv.innerHTML = ""
       ), 4000);
           

 }

   


 inputOneValue.value= "";
inputTwoValue.value ="";
  }

);
