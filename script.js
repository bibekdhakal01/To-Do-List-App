const inputBox = document.getElementById('to-do-input-box');
const listContainer = document.getElementById('to-do-list-container');
const addButton = document.getElementById('add-to-do-button');

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }       
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "close";
        li.appendChild(span);
     }
     inputBox.value = "";
     saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();       
    }
    else if(e.target.classList.contains('close')){
        let li = e.target.parentElement;
        listContainer.removeChild(li);
        saveData();
    }   
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
 function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
 }

  showTasks();


  ////////////// Expirement //////////////

addButton.addEventListener('click', () =>{
    let keyEvent = new KeyboardEvent('keypress' , {key:'Enter'});
    inputBox.dispatchEvent(keyEvent);
    
    });

inputBox.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        addTask();
    }        
});