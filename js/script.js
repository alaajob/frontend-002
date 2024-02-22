/* variable here */
let radiosCheck = document.querySelectorAll(".radiobtn");
let inputsHeightWeight =  document.querySelectorAll(".height-weight");
let inputsHeightSpan =  document.querySelector(".cm-inch");
let inputsWeightSpan =  document.querySelector(".kg-lb");
let BTNCalc = document.querySelector(".btn-calc");
let BTNCalcSpan = document.querySelector(".btn-calc span");
let bmiState ;
let result_BMI;

radiosCheck.forEach(radio => {
   radio.addEventListener("click" , (event)=>{
      if(radio.value == 'metric'){
         inputsHeightSpan.innerHTML = "cm";
         inputsWeightSpan.innerHTML = "kg";
      }else{
         inputsHeightSpan.innerHTML = "in";
         inputsWeightSpan.innerHTML = "lb";
      }
      inputsHeightWeight.forEach((oneOfThem) => {
         oneOfThem.addEventListener("keyup" , (event)=>{
            if(oneOfThem.value.length > 3){
               alert("only 2 or 3 digits");
               oneOfThem.value = '';
            }
         });
      });
      BTNCalc.onclick = function(e){
         e.preventDefault();
         if(radio.value == 'metric'){
          result_BMI = (parseInt(inputsHeightWeight[1].value)) / (Math.pow((parseInt(inputsHeightWeight[0].value)/100),2)); 
         }else{
            result_BMI = ((parseInt(inputsHeightWeight[1].value)*0.45)) / (Math.pow((parseInt((inputsHeightWeight[0].value)*2.54)/100),2));
         }
         if(result_BMI < 18.5){
            bmiState = "thin";
            BTNCalcSpan.innerHTML += `<strong style="color:darkred"> ${result_BMI.toFixed(2)} - ${bmiState} </strong>`;
            resetInputs();
         }else if(result_BMI > 18.5 && result_BMI < 24.9 ){
            bmiState = "normal";
            BTNCalcSpan.innerHTML += `<strong style="color:darkred"> ${result_BMI.toFixed(2)} - ${bmiState} </strong>`;
            resetInputs();
         }else if(result_BMI > 25  && result_BMI < 29.9 ){
            bmiState = "low fat";
            BTNCalcSpan.innerHTML += `<strong style="color:darkred"> ${result_BMI.toFixed(2)} - ${bmiState} </strong>`;
            resetInputs();
         }else if(result_BMI > 30  && result_BMI < 40 ){
            bmiState = "fat";
            BTNCalcSpan.innerHTML += `<strong style="color:darkred"> ${result_BMI.toFixed(2)} - ${bmiState} </strong>`;
            resetInputs();
         }else if(result_BMI > 40 ){
            bmiState = "too fat";
            BTNCalcSpan.innerHTML += `<strong style="color:darkred"> ${result_BMI.toFixed(2)} - ${bmiState} </strong>`;
            resetInputs();
         }
      }

      function resetInputs(){
         inputsHeightWeight[0].value = '';
         inputsHeightWeight[1].value = '';
         reloadPage();
      }
      function reloadPage(){
         setTimeout(()=>{
            location.reload();
         },3000)
      }
   });
});
BTNCalc.onclick = function(e){
   e.preventDefault();
   alert("choose metric or imprial");
}
























































/* 

let Radios = document.querySelectorAll(".radiobtn");
let spanWeights = document.querySelector('.kg-lb') ;
let spanHeights = document.querySelector('.cm-inch');
let inputs = document.querySelectorAll(".h-w");
let inputH = document.querySelector(".h");
let inputW = document.querySelector(".w");
let BTN = document.querySelector(".btn");
let BMI;
let choice;
let msg 


Radios.forEach(radio => {
   radio.addEventListener("click" , (e)=>{
      console.log(radio.value);
      if(radio.value ==="metric"){
         spanWeights.innerHTML = "kg";
         spanHeights.innerHTML = "cm";
         choice = 1;
      }else{
         spanWeights.innerHTML = "lb";
         spanHeights.innerHTML = "in";
         choice = 2;
      }
   });
});

inputs.forEach(input =>{
   input.addEventListener("keyup" , (e)=>{
      if( input.value.length > 3){
         alert("check your numbers");
         input.value = '';
      } 
      var reg = /^\d\d\d$/;
      if((input.value).match(reg)){
         console.log(input.value);
         return input.value;
      }
   });
   function calc(in1 , in2){
      if(choice == 1){
         var bmi = (in1/in2)*10;
      }else if(choice == 2){
         var bmi = ((in1*2.5)/(in2-26))*10;
      }
      console.log (bmi);
      if(bmi <= 15){
          msg = "to fat";
          message(bmi , msg);
         console.log("to fat");
      }else if (bmi > 15 && bmi <= 35) {
         msg = "normal";
         message(bmi , msg);
         console.log("normal");
      } else {
         msg = "thin";
         message(bmi, msg);
         console.log("thin");
         
      }
   }
   

   BTN.onclick = (e)=>{
      e.preventDefault();
      calc(parseFloat(inputH.value) , parseFloat(inputW.value));
      inputH.value = '';
      inputW.value = '';
   }
   function message(BMI , msg){
      BTN.innerHTML +=`<p style="color:#fff; font-weight:900" > ~${parseInt(BMI)} - ${msg} </p>`;
   }
});
 */























