let restart=document.querySelector(".playagain");
let win=document.querySelector(".wineer");
let btn=document.querySelectorAll("#btn");
let chance=true;
 let count=0;
let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
];

const  disabledbtn= () =>{
    btn.forEach((elem)=>{
        elem.disabled=true;
    }
    )
}


const wineer= (element1) =>{
    if(element1 === 'X'){
        win.innerText="X Win";
       disabledbtn();
    }
    else{
        win.innerText="0 Win";
        disabledbtn();
    }

}

const checkewin=()=>{
    for (let i of winpattern) {
        let [element1, element2, element3] = [
            btn[i[0]].innerText,
            btn[i[1]].innerText,
            btn[i[2]].innerText,
        ];
    if(element1 !="" && (element2 !="") && (element3 != "")){
        if(element1 == element2  && element2 == element3){
            wineer(element1);
            btn[i[0]].style.background="#86a8e7";
            btn[i[1]].style.background="#86a8e7";
            btn[i[2]].style.background="#86a8e7";
            btn[i[0]].style.color="white";
            btn[i[1]].style.color="white";
            btn[i[2]].style.color="white";
            return;
                }
    } 
}
}




  restart.addEventListener('click',function (){
    btn.forEach(btn =>{
        btn.innerText='';
        btn.disabled=false;
        btn.style.background="";
        btn.style.color=""
    })
    win.innerText='';
    chance=true;
    count=0;
    
  })


  
btn.forEach( function (element){

    element.addEventListener("click",function (){
        if(chance){
        chance=false;
        element.innerText='X';
        element.disabled=true; // this means  button second time not clicked
        }
        else{
            chance=true;
            element.innerText='0';
   element.disabled=true;
        }
   count++;
   if(count === 9){
  win.textContent="It's Draw";
   }
   checkewin();
})
})


