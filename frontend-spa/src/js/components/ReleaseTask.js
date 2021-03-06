export default function ReleaseTask(releaseTask) {
    return `
    <h1 class="table-2__header"  id="${releaseTask.id}">${releaseTask.name}</h1>
    <ul class="releaseTask__detailsInfo">
        <li class="releaseTask__currentDueTime"><u><b>DUE-TIME:</b></u> ${releaseTask.currentDueTime}</li>
        <br>
        <li class="releaseTask__id" ><u><b>ID:</b></u> ${releaseTask.id}</li>
        <br>
        <li class="releaseTask__name" id="${releaseTask.id}"><u><b>NAME:</b></u> ${releaseTask.name}</li>
        <br>
        <li class="releaseTask__description"><u><b>DESCRIPTION:</b></u> ${releaseTask.description}</li>
        <br>
        <li class="releaseTask__currentStatusName"><u><b>STATUS-NAME:</b></u> ${releaseTask.status.name}</li>   
        <br>
        <li class="releaseTask__currentPriorityName"><u><b>PRIORITY-NAME:</b></u> ${releaseTask.priority.name}</li>
        <br>
        <li class="releaseTask__createdDate"><u><b>CREATED:</b></u> ${releaseTask.createdDate}</li>
        <br>
        <li class="releaseTask__lastModifiedDate"><u><b>LAST-MODIFIED:</b></u> ${releaseTask.lastModifiedDate}</li>
        <br>
        <li class="releaseTask__assignedEmployeeName"><u><b>ASSIGNED-TO:</b></u> ${releaseTask.employee.name}</li>
        <br>
    </ul>
    <div class="edit-button">
<button class="edit__releaseTaskButton" id="${releaseTask.id}">Edit</button>
</div>

    `
}