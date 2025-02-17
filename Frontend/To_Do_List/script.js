const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    
    if(inputBox.value ===''){
        alert("Please add a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="delete"
        li.appendChild(span);

        let div = document.createElement("div");
        div.innerHTML = "Edit";
        li.appendChild(div);
        
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "DIV"){
        let child = e.target.parentElement;
        let newValue = prompt("Enter new value", child.firstChild.textContent);
        if (newValue) {
            li.firstChild.textContent = newValue;
            saveData();
        }
    }
   
}, false);
 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();