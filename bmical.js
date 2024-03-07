window.onload = () =>{
const button=document.querySelector('#btn');
button.addEventListener('click',calbmi);
}
function calbmi(){
const height=document.querySelector('#height').value;
const weight=document.querySelector('#weight').value;
const res=document.querySelector('#res');
if(!height||isNaN(height)||height<0)
{
res.innerText= "Please put valid Input";
return;
}
else if(!weight||isNaN(weight)||weight<0)
{
res.innerText= "Please put valid Input";
return;
}

const bmi=(weight/((height*height)/10000)).toFixed(2);
if(bmi<18.5)
{
  res.innerText=`under weight: ${bmi}`;
}
else if(bmi>=18.5 && bmi<24.9)
{
  res.innerText=`Normal: ${bmi}`;
}
else if(bmi>=25 && bmi<29.9)
{
  res.innerText=`over weight: ${bmi}`;
}
else if(bmi>=30 && bmi<34.9)
{
  res.innerText=`Obasity (class-1): ${bmi}`;
}
else if(bmi>=35 && bmi<39.9)
{
  res.innerText=`Obasity (class-2): ${bmi}`;
}
else
{
  res.innerText=`Extreme obasity: ${bmi}`;
}
}