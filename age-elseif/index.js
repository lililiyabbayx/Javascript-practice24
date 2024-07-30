const mytext=document.getElementById('mytext');
const mysubmit=document.getElementById('mysubmit');
const resultelement=document.getElementById('resultelement');
let age;
mysubmit.onclick=function(){
    age=mytext.value;
    age=Number(age);
    if (age >=100){
        resultelement.textContent='you are too old';

    }
    else if(age==0){
        resultelement.textContent='you cant enter';
    }
    else if(age >=18){
        resultelement.textContent='you are old enough to enter';
    }
    else if(age <0){
        resultelement.textContent='cant be minus';
    }
    else{
        resultelement.textContent='you must be 18+';
    }

}