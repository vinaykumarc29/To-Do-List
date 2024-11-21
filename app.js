let addTask = document.querySelector("#addList");
let list = document.querySelector(".tasks");
let clearTasks = document.querySelector("#clearList");
let msg=document.querySelector(".msg");
let text= document.querySelector(".text");
let deleteTask=document.querySelector(".clear");

const removePara = ()=>{
    msg.classList.remove("msg");
    msg.classList.add("hidden");
}

const addPara = ()=>{
    msg.classList.remove("hidden");
    msg.classList.add("msg")
}


addTask.addEventListener("click",()=>{
    removePara();
     
    list.insertAdjacentHTML("beforeend",`<input type='text' class='text' value='• '>
    <button class='clear'><i class='fa-solid fa-xmark' id='delete'></i>
    </button>`)
     

})

clearTasks.addEventListener("click",()=>{
     list.innerHTML="<p class='msg'>click the + button to add your task!!</p>";
     addPara();
})