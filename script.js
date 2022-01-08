let count = 0;
let addEl = document.getElementById('counting');
let substractEl = document.getElementById('counting');

let saveEl = document.getElementById('result');





function add() {
    count+=1;
    console.log(count);
    addEl.innerHTML= count;
   
}
 

function substract(){
     count-=1;
     console.log(count);
     substractEl.innerHTML= count;

}


function save(){
    
    console.log(count);
    let msg = ` ${count}  |`;
    saveEl.innerHTML += msg; 
    addEl.innerHTML = 0;
    count = 0;
}

