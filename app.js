let addTask = document.querySelector("#addList");
let list = document.querySelector(".tasks");
let clearTasks = document.querySelector("#clearList");
let msg=document.querySelector(".msg");
 

const removePara = ()=>{
    msg.classList.remove("msg");
    msg.classList.add("hidden");
}

const addPara = ()=>{
     
    msg.classList.remove("hidden");
    msg.classList.add("msg");
}

addTask.addEventListener("click",()=>{
    removePara();
    const inputField= document.createElement("input");
    inputField.type="text";
    inputField.classList.add("text");
    inputField.value="• ";
    inputField.onkeydown="return false;"

    const deleteTask = document.createElement("button");
    deleteTask.innerHTML = `<i class='fa-solid fa-xmark'></i>`
    deleteTask.classList.add("clear");

    let listItem = document.createElement("div");
    listItem.classList.add("listItem");
    listItem.appendChild(inputField);
    listItem.appendChild(deleteTask);


    list.appendChild(listItem);


    deleteTask.addEventListener("click",()=>{
        listItem.removeChild(inputField);
        listItem.removeChild(deleteTask);
         
    })
    
    clearTasks.addEventListener("click",()=>{
        addPara();
       list.removeChild(listItem);
   });
   
   

 });




