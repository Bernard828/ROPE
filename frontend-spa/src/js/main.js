// import Employee from './components/Employee';
// import Priority from './components/Priority';
// import Status from './components/Status';
import apiActions from './api/apiActions';
import SelectDropDownID from './components/SelectDropDownID';
import HandleTaskRows from './components/HandleTaskRows';
import HandleDropDowns from './components/HandleDropDowns';
import Reminders from './components/Reminders';
import ActiveTasks from './components/ActiveTasks';
import ReleaseTasks from './components/ReleaseTasks';
import ReleaseTask from './components/ReleaseTask';
import ReleaseTaskEdit from './components/ReleaseTaskEdit';
import ReleaseTaskPostSection from './components/ReleaseTaskPostSection';
import Header from './components/Header';
// import Footer from './components/Footer';
import CommentPost from './components/CommentPost';
import HomePage from './components/HomePage';
import Sort from './components/Sort';

const appDiv = document.querySelector('.app');
const appDivLeft = document.querySelector('.appLeft');
const appDivRight = document.querySelector('.appRight');
let currentSelectedRowID = 1;
var AppTimer = null;
let nameSortOrder = "ascending";
let statusSortOrder = "ascending";
let prioritySortOrder = "ascending";
let employeeSortOrder = "ascending";
let dueTimeSortOrder = "ascending";
let idSortOrder = "descending";
//const activeTasks = ActiveTasks.ActiveTasksArray();


export default function pagebuild() {
    header()
    // footer()
    //navHome()
    //showReleaseTasks();
    StartApp();

    //TODO:  Uncomment the following line before demos and final release
    //AppTimer = setInterval(ExecuteTimer,15000);    
}

function header() {
    const header = document.querySelector('.header');
    header.innerHTML = Header();
}
// function footer() {
//     const footerElement = document.querySelector('.footer');
//     footerElement.innerHTML = Footer();
// }

// function navHome() {
//     const homeButton = document.querySelector('.nav__home');
//     homeButton.addEventListener('click', function () {
//         console.log('navhome');
//         appDiv.innerHTML = showReleaseTasks();
//     })
// }

function StartApp(){

    appDivLeft.innerHTML = HomePage();
}

appDivLeft.addEventListener('click', function () {
    if (event.target.parentElement.classList.contains('startapp')) {
        console.log('start app clicked');

        const activeTasks = ActiveTasks.ActiveTasksArray();
        // console.log(activeTasks);
        // activeTasks.sort((a,b) => (a.currentDueTime > b.currentDueTime) ? 1: -1);
        // console.log(activeTasks);

        appDivLeft.innerHTML = ReleaseTasks(activeTasks);
        currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
        HandleTaskRows.highlightSpecificRow(1);

        const releaseTaskEndpoint = `https://localhost:44302/api/releaseTask/1`;
        const releaseTaskCallback = releaseTask => {
            appDivRight.innerHTML = ReleaseTask(releaseTask);
        };
        apiActions.getRequest(releaseTaskEndpoint, releaseTaskCallback);
    }
})

appDivLeft.addEventListener('click', function () {
    
    if (event.target.classList.contains('table_header__ID')){
        console.log('header-name clicked');
        console.log('before='+idSortOrder);
        idSortOrder = Sort.SortTable(idSortOrder,"id");
        console.log('after='+idSortOrder);
        // const activeTasks = ActiveTasks.ActiveTasksArray();

        // if (idSortOrder == "ascending"){
        //     activeTasks.sort((a,b) => (a.id > b.id) ? 1: -1);
        //     idSortOrder = "descending";
        // }
        // else {
        //     activeTasks.sort((a,b) => (a.id < b.id) ? 1: -1);
        //     idSortOrder = "ascending";
        // }

        // appDivLeft.innerHTML = ReleaseTasks(activeTasks);
         currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
         HandleTaskRows.highlightSpecificRow(1);
    }
})

appDivLeft.addEventListener('click', function () {
    
    if (event.target.classList.contains('table_header__Name')){
        console.log('header-name clicked');
        const activeTasks = ActiveTasks.ActiveTasksArray();

        if (nameSortOrder == "ascending"){
            activeTasks.sort((a,b) => (a.name > b.name) ? 1: -1);
            nameSortOrder = "descending";
        }
        else {
            activeTasks.sort((a,b) => (a.name < b.name) ? 1: -1);
            nameSortOrder = "ascending";
        }

        appDivLeft.innerHTML = ReleaseTasks(activeTasks);
        currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
        HandleTaskRows.highlightSpecificRow(1);
    }
})

appDivLeft.addEventListener('click', function() {
    if (event.target.classList.contains('table_header__Status')){
        console.log('header-status clicked');
        const activeTasks = ActiveTasks.ActiveTasksArray();
        
        if (statusSortOrder == "ascending"){
            activeTasks.sort((a,b) => (a.currentStatusID > b.currentStatusID) ? 1: -1);
            statusSortOrder = "descending";
        }
        else {
            activeTasks.sort((a,b) => (a.currentStatusID < b.currentStatusID) ? 1: -1);
            statusSortOrder = "ascending";
        }

        appDivLeft.innerHTML = ReleaseTasks(activeTasks);
        currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
        HandleTaskRows.highlightSpecificRow(1);

    }
})

appDivLeft.addEventListener('click', function() {
    if (event.target.classList.contains('table_header__Priority')){
        console.log('header-status clicked');
        const activeTasks = ActiveTasks.ActiveTasksArray();
        
        if (prioritySortOrder == "ascending"){
            activeTasks.sort((a,b) => (a.currentPriorityID > b.currentPriorityID) ? 1: -1);
            prioritySortOrder = "descending";
        }
        else {
            activeTasks.sort((a,b) => (a.currentPriorityID < b.currentPriorityID) ? 1: -1);
            prioritySortOrder = "ascending";
        }

        appDivLeft.innerHTML = ReleaseTasks(activeTasks);
        currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
        HandleTaskRows.highlightSpecificRow(1);

    }
})

appDivLeft.addEventListener('click', function() {
    if (event.target.classList.contains('table_header__AssignedTo')){
        console.log('header-status clicked');
        const activeTasks = ActiveTasks.ActiveTasksArray();
        
        if (employeeSortOrder == "ascending"){
            activeTasks.sort((a,b) => (a.employee.name > b.employee.name) ? 1: -1);
            employeeSortOrder = "descending";
        }
        else {
            activeTasks.sort((a,b) => (a.employee.name < b.employee.name) ? 1: -1);
            employeeSortOrder = "ascending";
        }

        appDivLeft.innerHTML = ReleaseTasks(activeTasks);
        currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
        HandleTaskRows.highlightSpecificRow(1);

    }
})

appDivLeft.addEventListener('click', function() {
    if (event.target.classList.contains('table_header__DueTime')){
        console.log('header-status clicked');
        const activeTasks = ActiveTasks.ActiveTasksArray();
        
        if (dueTimeSortOrder == "ascending"){
            activeTasks.sort((a,b) => (a.currentDueTime > b.currentDueTime) ? 1: -1);
            dueTimeSortOrder = "descending";
        }
        else {
            activeTasks.sort((a,b) => (a.currentDueTime < b.currentDueTime) ? 1: -1);
            dueTimeSortOrder = "ascending";
        }

        appDivLeft.innerHTML = ReleaseTasks(activeTasks);
        currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
        HandleTaskRows.highlightSpecificRow(1);

    }
})

function showReleaseTasks() {

    fetch("https://localhost:44302/api/releaseTask")
        .then(response => response.json())
        .then(releaseTasks => {
            releaseTasks = releaseTasks.filter(task => task.isVisisble == true);
            appDivLeft.innerHTML = ReleaseTasks(releaseTasks);
            currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
            HandleTaskRows.highlightSpecificRow(1);
        })
        .catch(err => console.log(err))

    console.log('before array call');
    //const activeTasks = ActiveTasks.ActiveTasksArray();
    //const tasks = Reminders.AllTasks();
    //ExecuteTimer();
    //test();
    //alert('Welcome');
    //console.log(activeTasks);
    //console.log(tasks);
    //activeTasks.sort((a,b) => (a.id < b.id) ? 1: -1);
    //console.log(activeTasks);


        const releaseTaskEndpoint = `https://localhost:44302/api/releaseTask/1`;
        const releaseTaskCallback = releaseTask => {
            appDivRight.innerHTML = ReleaseTask(releaseTask);
        };
        apiActions.getRequest(releaseTaskEndpoint, releaseTaskCallback);
        console.log('in show tasks'+currentSelectedRowID);

}


appDivRight.addEventListener('click', function () {
    if (event.target.classList.contains('delete_releaseTaskButton')) {
        console.log('in delete task');
        const releaseTaskId = event.target.parentElement.querySelector('.delete_releaseTaskButton').id;
        console.log(releaseTaskId);
        const releaseEdit = {
            id: releaseTaskId,
            IsVisisble: false
        };

        const releaseTaskEndpoint = `https://localhost:44302/api/releaseTask/${releaseTaskId}`;
        apiActions.patchRequest(
            releaseTaskEndpoint,
            releaseEdit
        )

        //TODO:  The next 20 lines are repeated elsewhere in main.js
        //without the alert the page reposts with old data, even though it did save
        //TODO:  Convert this to a Popup?  or add more detail to the alert popup
        alert('Task Deleted');

        //Reload the Left Table
        fetch("https://localhost:44302/api/releaseTask")
            .then(response => response.json())
            .then(releaseTasks => {
                releaseTasks = releaseTasks.filter(task => task.isVisisble == true);
                appDivLeft.innerHTML = ReleaseTasks(releaseTasks);
                currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
                //apiActions.getRequest(releaseTaskEndpoint, releaseTaskCallback);
                HandleTaskRows.highlightSpecificRow(1);
            })
            .catch(err => console.log(err))

        //Reload the Right Table
        const releaseTaskEndpoint2 = `https://localhost:44302/api/releaseTask/1`;
        const releaseTaskCallback = releaseTask => {
            appDivRight.innerHTML = ReleaseTask(releaseTask);
        };
        apiActions.getRequest(releaseTaskEndpoint2, releaseTaskCallback);
        console.log('indeletetask'+currentSelectedRowID);


    }
})


appDivRight.addEventListener('click', function () {
    if (event.target.classList.contains('edit__releaseTaskButton')) {
        const ReleaseTaskEditSection = document.querySelector('.releaseTask__detailsInfo');
        const releaseTaskId = event.target.parentElement.querySelector('.edit__releaseTaskButton').id;
        const statusDrop = HandleDropDowns.StatusDropDown();
        const priorityDrop = HandleDropDowns.PriorityDropDown();
        const employeeDrop = HandleDropDowns.EmployeeDropDown();

        apiActions.getRequest(
            `https://localhost:44302/api/releaseTask/${releaseTaskId}`,
            releaseTaskEdit => {
                ReleaseTaskEditSection.innerHTML = ReleaseTaskEdit(releaseTaskEdit,statusDrop,priorityDrop,employeeDrop);
                SelectDropDownID.selectElement('statusDropID',releaseTaskEdit.currentStatusID);
                SelectDropDownID.selectElement('priorityDropID',releaseTaskEdit.currentPriorityID);
                SelectDropDownID.selectElement('employeeDropID',releaseTaskEdit.assignedEmployeeID);
            }
        )
        console.log('in edit task'+currentSelectedRowID);

    }
})

appDivRight.addEventListener('click', function () {
    if (event.target.classList.contains('edit-releaseTask__submit')) {
        const releaseTaskId = event.target.parentElement.querySelector('.edit-releaseTask__id').value;
        const name = event.target.parentElement.querySelector('.edit-releaseTask__name').value;
        const description = event.target.parentElement.querySelector('.edit-releaseTask__description').value;
        const createdDate = event.target.parentElement.querySelector('.edit-releaseTask__createdDate').value;
        const currentDueTime = event.target.parentElement.querySelector('.edit-releaseTask__currentDueTime').value;
        const newStatusID = event.target.parentElement.querySelector('.edit-releaseTask__Status').value;
        const newPriorityID = event.target.parentElement.querySelector('.edit-releaseTask__Priority').value;
        const newEmployeeID = event.target.parentElement.querySelector('.edit-releaseTask__Employee').value;
        var lastModifiedDate = new Date();
        const formatedDate = lastModifiedDate.toLocaleDateString() + " " + lastModifiedDate.toLocaleTimeString();
        const releaseEdit = {
            id: releaseTaskId,
            Name: name,
            Description: description,
            CurrentDueTime: currentDueTime,
            IsVisisble: true,
            LastModifiedDate: formatedDate,
            CreatedDate: createdDate,
            CurrentStatusID: newStatusID,
            CurrentPriorityID: newPriorityID,
            AssignedEmployeeID: newEmployeeID
        };

        const releaseTaskEndpoint = `https://localhost:44302/api/releaseTask/${releaseTaskId}`;
        apiActions.putRequest2(
            releaseTaskEndpoint,
            releaseEdit
        )

        //TODO:  The next 20 lines are repeated elsewhere in main.js
        //without the alert the page reposts with old data, even though it did save
        //TODO:  Convert this to a Popup?  or add more detail to the alert popup
        alert('Changes Saved');

        //Reload the Left Table
        fetch("https://localhost:44302/api/releaseTask")
            .then(response => response.json())
            .then(releaseTasks => {
                releaseTasks = releaseTasks.filter(task => task.isVisisble == true);
                appDivLeft.innerHTML = ReleaseTasks(releaseTasks);
                currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
                console.log('line 193='+currentSelectedRowID);
                //apiActions.getRequest(releaseTaskEndpoint, releaseTaskCallback);
                HandleTaskRows.highlightSpecificRow(currentSelectedRowID);
            })
            .catch(err => console.log(err))

        //Reload the Right Table
        const releaseTaskCallback = releaseTask => {
            appDivRight.innerHTML = ReleaseTask(releaseTask);
        };
        apiActions.getRequest(releaseTaskEndpoint, releaseTaskCallback);
        console.log('in edit save'+currentSelectedRowID);

    }
})

appDivLeft.addEventListener('click', function () {
    if (event.target.parentElement.classList.contains('add__releaseTaskButton')) {
        console.log("new task clicked")
        console.log('in add task'+currentSelectedRowID);
        const statusDrop = HandleDropDowns.StatusDropDown();
        const priorityDrop = HandleDropDowns.PriorityDropDown();
        const employeeDrop = HandleDropDowns.EmployeeDropDown();
        appDivRight.innerHTML = ReleaseTaskPostSection(statusDrop,priorityDrop,employeeDrop,currentSelectedRowID);
    }
})

appDivRight.addEventListener('click', function () {
    if (event.target.classList.contains('create-releaseTask__submit')) {
        const name = event.target.parentElement.querySelector('.create-releaseTask__name').value;
        const description = event.target.parentElement.querySelector('.create-releaseTask__description').value;
        const currentDueTime = event.target.parentElement.querySelector('.create-releaseTask__currentDueTime').value;
        const currentStatusID = event.target.parentElement.querySelector('.create-releaseTask__Status').value;
        const currentPriorityID = event.target.parentElement.querySelector('.create-releaseTask__Priority').value;
        const assignedEmployeeID = event.target.parentElement.querySelector('.create-releaseTask__Employee').value;
        var lastModifiedDate = new Date();
        const formatedCurrentDate = lastModifiedDate.toLocaleDateString() + " " + lastModifiedDate.toLocaleTimeString();
        var requestBody = {
            Name: name,
            Description: description,
            CreatedDate:formatedCurrentDate,
            IsVisisble: true,
            CurrentDueTime: formatedCurrentDate,
            LastModifiedDate: formatedCurrentDate,
            CurrentStatusID: currentStatusID,
            CurrentPriorityID: currentPriorityID,
            AssignedEmployeeID: assignedEmployeeID,
        }
        console.log(requestBody)
        apiActions.postRequest(
            "https://localhost:44302/api/releaseTask",
            requestBody,
            newReleaseTasks => {
                appDivLeft.innerHTML = ReleaseTasks(newReleaseTasks);
            }
        )

        //TODO:  The next 20 lines are repeated elsewhere in main.js
        //without the alert the page reposts with old data, even though it did save
        //TODO:  Convert this to a Popup?  or add more detail to the alert popup
        alert('Task Added');

        //Reload the Left Table
        fetch("https://localhost:44302/api/releaseTask")
            .then(response => response.json())
            .then(releaseTasks => {
                releaseTasks = releaseTasks.filter(task => task.isVisisble == true);
                appDivLeft.innerHTML = ReleaseTasks(releaseTasks);
                currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
                //apiActions.getRequest(releaseTaskEndpoint, releaseTaskCallback);
                console.log('in Add Task fetch, current row='+currentSelectedRowID);
                HandleTaskRows.highlightSpecificRow(1);
            })
            .catch(err => console.log(err))

        //Reload the Right Table
        //TODO:  Since we don't have an ID (from SQL) for this add we need to default it to 1
        //          so that the display still works with the table row highlighted with the
        //          task details being displayed.  If we have time to conver to a 'Release Task Number'
        //          instead of the SQL ID we could then highlight the newly added row
        //const releaseTaskEndpoint = `https://localhost:44302/api/releaseTask/${releaseTaskId}`;
        const releaseTaskEndpoint = `https://localhost:44302/api/releaseTask/1`;
        const releaseTaskCallback = releaseTask => {
            appDivRight.innerHTML = ReleaseTask(releaseTask);
        };
        apiActions.getRequest(releaseTaskEndpoint, releaseTaskCallback);

    }
})
// function changePriorityColor() {

//     var priorityThreshold = ${priority.id },
//         priorityColor = document.querySelector('.priorityLevel');

//     function changeColor(val) {
//         var color = "green";

//         if (val = 3) {
//             color = "yellow"
//         }
//         if (val = 2) {
//             color = "orange";
//         }
//         if (val = 1) {
//             color = "red";
//         }

//         priorityColor.style.color = color;
//     }
// }

// changeColor(colorThreshold);

//  function rowHighlightHandler(row){
//      alert('row index='+row.rowIndex);
//  }

appDivRight.addEventListener('click', function(releaseTask){
    if (event.target.classList.contains('edit__releaseTaskButton__back')){
        console.log('in back'+currentSelectedRowID);

        const releaseTaskId = event.target.parentElement.querySelector('.edit__releaseTaskButton__back').id;
        console.log('in back2='+releaseTaskId);
        apiActions.getRequest(
            `https://localhost:44302/api/releaseTask/${releaseTaskId}`,
            releaseTask => {
                appDivRight.innerHTML = ReleaseTask(releaseTask);
            }
        )
    }           
})

appDivRight.addEventListener('click', function () {
    if (event.target.classList.contains('add__commentButton')) {
        const ReleaseTaskEditSection = document.querySelector('.releaseTask__detailsInfo');
        const releaseTaskId = event.target.parentElement.querySelector('.add__commentButton').id;
        apiActions.getRequest(
            `https://localhost:44302/api/releaseTask/${releaseTaskId}`,
            addComment => {
                ReleaseTaskEditSection.innerHTML = CommentPost(releaseTaskId, addComment);
            }
        )
        console.log('in add comment'+currentSelectedRowID);

    }
})

appDivRight.addEventListener('click', function () {
    if (event.target.classList.contains('add-comment__submit')) {
        console.log('in save comment');
        const releaseTaskId = event.target.parentElement.querySelector('.add-comment__submit').id;
        const isVisible = true;
        const commentDetails = event.target.parentElement.querySelector('.add-comment__details').value;
        console.log(releaseTaskId);
        console.log(isVisible);
        console.log(commentDetails);

        const newCommentBody = {
            Details: commentDetails,
            IsVisible: isVisible,
            ReleaseTaskID: releaseTaskId
        }

        console.log(newCommentBody);

        apiActions.postRequest2(
            "https://localhost:44302/api/comment",
            newCommentBody
            )

        const releaseTaskEndpoint = `https://localhost:44302/api/releaseTask/${releaseTaskId}`;

        //TODO:  The next 20 lines are repeated elsewhere in main.js
        //without the alert the page reposts with old data, even though it did save
        //TODO:  Convert this to a Popup?  or add more detail to the alert popup
        alert('Changes Saved');

        //Reload the Left Table
        fetch("https://localhost:44302/api/releaseTask")
            .then(response => response.json())
            .then(releaseTasks => {
                releaseTasks = releaseTasks.filter(task => task.isVisisble == true);
                appDivLeft.innerHTML = ReleaseTasks(releaseTasks);
                currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
                console.log('in submit comment'+currentSelectedRowID);
                //apiActions.getRequest(releaseTaskEndpoint, releaseTaskCallback);
                HandleTaskRows.highlightSpecificRow(currentSelectedRowID);
            })
            .catch(err => console.log(err))

        //Reload the Right Table
        const releaseTaskCallback = releaseTask => {
            appDivRight.innerHTML = ReleaseTask(releaseTask);
        };
        apiActions.getRequest(releaseTaskEndpoint, releaseTaskCallback);
        console.log('bottom submit comment'+currentSelectedRowID);


    }
})

function ExecuteTimer(){

    const tasks = Reminders.TasksArray();
    console.log(tasks);
    tasks.sort((a,b) => (a.id < b.id) ? 1: -1);
    console.log(tasks);
    tasks.forEach(element => {
        let curr = (new Date(element.currentDueTime));
        let now = (new Date());
        if (curr < now){
            alert('Warning.  The following task is overdue\n\n'+element.name);
        }
    });

    const activeTasks = ActiveTasks.ActiveTasksArray();
    console.log(activeTasks);
    tasks.sort((a,b) => (a.id < b.id) ? 1: -1);
    console.log(activeTasks);

}

appDivLeft.addEventListener('click', function(){

    if (event.target.parentElement.classList.contains('reminders__button')) {
        if (event.shiftKey){
            fetch("https://localhost:44302/api/releaseTask")
            .then(response => response.json())
            .then(releaseTasks => {
                //releaseTasks = releaseTasks.filter(task => task.isVisisble == true);

                appDivRight.innerHTML = ReleaseTasks(releaseTasks);
                //currentSelectedRowID = HandleTaskRows.highlightSelectedRow();
                //HandleTaskRows.highlightSpecificRow(1);
            })
            .catch(err => console.log(err))
        }
        else {
            ExecuteTimer();
        }
        
    }
})

// appDivLeft.addEventListener('click', function(){
//     console.log('new function');
//     if (event.target.parentElement.classList.contains('headerClass')) {
//         console.log('header clicked');
//     }
// })
