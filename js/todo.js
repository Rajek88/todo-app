var listContainer = document.querySelector('.list-container');
var compListContainer = document.querySelector('.completed-list-container');
var statusContainer = document.querySelector('.status-container');
var incompleteTasks = 2;
var completeTasks = 0;
var totalTasks = 2;


statusContainer.innerHTML = `
    <h4>Incomplete tasks : `+ incompleteTasks +`</h4>
    <h4>Completed tasks : `+completeTasks +`</h4>
    <h4>Total tasks : `+2+`</h4>`;


/** For checkboxes, property checked and attribute checked are two differnt things... You need to use both for bugfree functionality */


function newlist(){                             
    console.log('appending');
    var input = document.querySelector('#input-bar').value;     //get input from user
    if(input == ''){
        window.alert('Please enter some text');
        return;
    }
    listContainer.innerHTML = listContainer.innerHTML + 
    `<div class="list">         
        <input class="list-radio" type="checkbox" onclick="checkedBox(this)" data-checked="false"><h3>`+ input +`</h3>
        <button type="button" class="delete-list" onclick="deleteList(this)"><i class="fas fa-trash-alt"></i></button>
    </div>`

    statusContainer.innerHTML = '';
    totalTasks = totalTasks + 1;
    incompleteTasks = incompleteTasks + 1;
    statusContainer.innerHTML = `
    <h4>Incomplete tasks : `+ incompleteTasks +`</h4>
    <h4>Completed tasks : `+completeTasks +`</h4>
    <h4>Total tasks : `+totalTasks+`</h4>`;
            /*get DOM of the list and append the same new with given input, this way list is getting appended */
}

function deleteList(element){           /* we passed button from html onclick */
    let listToRemove = element.parentElement;   /**then we found the parent of button, i.e. list div */
    console.log(listToRemove.querySelector('.list-radio').getAttribute('data-checked'));
    if(listToRemove.querySelector('.list-radio').getAttribute('data-checked') == 'checked' ){       
                                            /**check if the List's radio button is checked or not */
        completeTasks = completeTasks - 1;
    }
    else{
        incompleteTasks = incompleteTasks - 1;
    }
    listContainer.removeChild(listToRemove);    /**then from list container we removed that list div */
    totalTasks = totalTasks - 1;
    statusContainer.innerHTML = '';
    statusContainer.innerHTML = `
    <h4>Incomplete tasks : `+ incompleteTasks +`</h4>
    <h4>Completed tasks : `+ completeTasks +`</h4>
    <h4>Total tasks : `+totalTasks+`</h4>`;
}

function checkedBox(element){                   /**when user checks the box */
    if( element.getAttribute('data-checked') === 'checked'){    /**if box is already checked */
        console.log('already-checked');                 /**turn back teh text to normal */
        element.setAttribute('data-checked', 'false');
        element.checked = false;
        let parent = element.parentElement;
        let h3text = parent.querySelector('h3');
        // console.log(h3text)
        h3text.style.fontStyle = 'normal';
        h3text.style.textDecoration = 'none';
        taskUnDone();
    }
    else{
        console.log('checked');                 /**else check the box and make its text italic and line-through */
        element.setAttribute('data-checked', 'checked');
        element.checked = true;
        let parent = element.parentElement;
        let h3text = parent.querySelector('h3');
        // console.log(h3text)
        h3text.style.fontStyle = 'italic';
        h3text.style.textDecoration = 'line-through';
        taskDone();
    }
}

// function finalCheck(element){      /**if user want to check the elements even though whatever the status of check box is , it makes it checked */   
//         element.setAttribute('checked', 'checked');
//         let parent = element.parentElement;
//         let h3text = parent.querySelector('h3');
//         // console.log(h3text)
//         h3text.style.fontStyle = 'italic';
//         h3text.style.textDecoration = 'line-through';
// }

function checkAll(){            /**to check all lists */
    console.log('checkAll');
    
    let allList = document.querySelectorAll('.list-radio');     /** get array of all checkboxes */
    console.log(allList);       
    for( i of allList){     /**run loop on that array and pass that element to finalCheck(); so it get checked*/
        if( i.getAttribute('data-checked') !== 'checked'){ 
            checkedBox(i);  
        }
    }
}

function clearCompleted(){      /** to clear all checked elements */
    console.log('clearCompleted');
    let allList = document.querySelectorAll('.list-radio'); /**get array of all checkboxes */
    console.log(allList);
    for( i of allList){         /**run loop on that array and check if the box is checked*/
        console.log(i);
        if( i.getAttribute('data-checked') === 'checked'){      //if it is checked
            deleteList(i);              //then pass it to delete function for deletion of its list
        }
    }
}

function taskDone(){
    incompleteTasks = incompleteTasks - 1;
    completeTasks = completeTasks + 1;
    // let totalTasks = incompleteTasks + completeTasks;
    statusContainer.innerHTML = '';
    statusContainer.innerHTML = `
    <h4>Incomplete tasks : `+ incompleteTasks +`</h4>
    <h4>Completed tasks : `+completeTasks +`</h4>
    <h4>Total tasks : `+totalTasks+`</h4>`;
}

function taskUnDone(){
    incompleteTasks = incompleteTasks + 1;
    completeTasks = completeTasks - 1;
    // let totalTasks = incompleteTasks + completeTasks;
    statusContainer.innerHTML = '';
    statusContainer.innerHTML = `
    <h4>Incomplete tasks : `+ incompleteTasks +`</h4>
    <h4>Completed tasks : `+completeTasks +`</h4>
    <h4>Total tasks : `+totalTasks+`</h4>`;
}